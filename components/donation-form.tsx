"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Lock, Minus, Plus } from "lucide-react";
import { donationProjects, formatRupees, MAX_UNITS } from "@/lib/donations";

type RazorpayOptions = Record<string, unknown>;
declare global {
  interface Window { Razorpay?: new (options: RazorpayOptions) => { open: () => void } }
}

const loadCheckout = () =>
  new Promise<boolean>((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

export default function DonationForm({ paymentsEnabled }: { paymentsEnabled: boolean }) {
  const [units, setUnits] = useState<Record<string, number>>({});
  const [donor, setDonor] = useState({ name: "", email: "", phone: "", pan: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const summaryRef = useRef<HTMLElement>(null);
  const [summaryInView, setSummaryInView] = useState(false);

  // The mobile total bar would cover the real Donate button, so hide it once the summary is on screen.
  useEffect(() => {
    const summary = summaryRef.current;
    if (!summary) return;
    const observer = new IntersectionObserver(([entry]) => setSummaryInView(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(summary);
    return () => observer.disconnect();
  }, []);

  const selected = useMemo(() => donationProjects.filter((p) => units[p.id]), [units]);
  const total = selected.reduce((sum, p) => sum + p.rate * units[p.id], 0);

  const toggle = (id: string) => setUnits((prev) => {
    const next = { ...prev };
    if (next[id]) delete next[id]; else next[id] = 1;
    return next;
  });
  const step = (id: string, delta: number) => setUnits((prev) => ({ ...prev, [id]: Math.min(MAX_UNITS, Math.max(1, (prev[id] ?? 1) + delta)) }));
  const field = (key: keyof typeof donor) => ({ value: donor[key], onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDonor({ ...donor, [key]: e.target.value }) });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    if (!selected.length) return setError("Choose at least one project to support.");
    setBusy(true);
    try {
      const response = await fetch("/api/donations/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: selected.map((p) => ({ id: p.id, units: units[p.id] })), donor }),
      });
      const order = await response.json();
      if (!response.ok) throw new Error(order.error ?? "Something went wrong.");
      if (!(await loadCheckout()) || !window.Razorpay) throw new Error("Couldn’t load the Razorpay payment page. Check your connection and try again.");

      new window.Razorpay({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: "INR",
        name: "Synthika Trust",
        description: "Donation",
        image: `${window.location.origin}/images/photos/logo-mark.png`,
        prefill: { name: order.name, email: order.email, contact: order.phone },
        theme: { color: "#520080" },
        // Redirect mode: the donor leaves for Razorpay's page and comes back to our verify route.
        redirect: true,
        callback_url: `${window.location.origin}/api/donations/verify`,
        modal: { ondismiss: () => setBusy(false) },
      }).open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setBusy(false);
    }
  }

  return (
    <form className="donate-layout" onSubmit={handleSubmit} noValidate>
      <fieldset className="donate-projects">
        <legend>1. Choose what to support</legend>
        {donationProjects.map((project) => {
          const isOn = Boolean(units[project.id]);
          return (
            <div key={project.id} className={`donate-option tone-${project.tone}${isOn ? " is-on" : ""}`}>
              <label className="donate-option-main">
                <input type="checkbox" checked={isOn} onChange={() => toggle(project.id)} />
                <span className="donate-check" aria-hidden="true"><Check size={14} strokeWidth={3} /></span>
                <img className="donate-thumb" src={project.image} alt="" loading="lazy" />
                <span className="donate-option-text">
                  <strong>{project.title}</strong>
                  <span>{project.summary}</span>
                  <small>{project.details}</small>
                </span>
                <span className="donate-rate">{formatRupees(project.rate)}<small>per {project.unit}</small></span>
              </label>
              {isOn && (
                <div className="donate-qty">
                  <span>How many?</span>
                  <div className="stepper">
                    <button type="button" aria-label={`Fewer for ${project.title}`} onClick={() => step(project.id, -1)} disabled={units[project.id] <= 1}><Minus size={16} /></button>
                    <output aria-live="polite">{units[project.id]}</output>
                    <button type="button" aria-label={`More for ${project.title}`} onClick={() => step(project.id, 1)} disabled={units[project.id] >= MAX_UNITS}><Plus size={16} /></button>
                  </div>
                  <strong>{formatRupees(project.rate * units[project.id])}</strong>
                </div>
              )}
            </div>
          );
        })}
      </fieldset>

      <aside className="donate-summary" id="donation-summary" ref={summaryRef}>
        <div className="donate-summary-card">
          <h2>2. Your donation</h2>
          {selected.length ? (
            <ul className="donate-lines">
              {selected.map((p) => <li key={p.id}><span>{p.title} × {units[p.id]}</span><strong>{formatRupees(p.rate * units[p.id])}</strong></li>)}
            </ul>
          ) : <p className="donate-empty">Nothing selected yet. Tick one or more projects.</p>}
          <div className="donate-total"><span>Total</span><strong>{formatRupees(total)}</strong></div>

          <h2>3. Your details</h2>
          <label>Full name<input required autoComplete="name" {...field("name")} /></label>
          <label>Email<input required type="email" autoComplete="email" {...field("email")} /></label>
          <label>Mobile number<input required type="tel" inputMode="numeric" autoComplete="tel" maxLength={13} {...field("phone")} /></label>
          <label><span>PAN <span className="optional">(optional, for your tax receipt)</span></span><input autoCapitalize="characters" maxLength={10} placeholder="ABCDE1234F" {...field("pan")} /></label>

          {error && <p className="donate-error" role="alert">{error}</p>}
          {!paymentsEnabled && (
            <p className="donate-notice" role="status">Online payments are being set up. Until then, please donate by <Link href="/get-involved">bank transfer</Link> or <Link href="/contact">contact the trust</Link>.</p>
          )}
          <button type="submit" className="pill pill-purple donate-submit" disabled={busy || !selected.length || !paymentsEnabled}>
            {!paymentsEnabled ? "Online payments coming soon" : busy ? "Opening Razorpay…" : `Donate ${total ? formatRupees(total) : ""}`}
            <span className="pill-icon"><ArrowRight size={17} strokeWidth={2.4} /></span>
          </button>
          <p className="donate-secure"><Lock size={14} /> Secure payment by Razorpay: UPI, cards, net banking, and wallets. We never see or store your card details.</p>
        </div>
      </aside>

      {selected.length > 0 && !summaryInView && (
        <div className="donate-mobile-bar">
          <span><small>{selected.length} selected</small>{formatRupees(total)}</span>
          <a href="#donation-summary" className="pill pill-purple">Continue<span className="pill-icon"><ArrowRight size={17} strokeWidth={2.4} /></span></a>
        </div>
      )}
    </form>
  );
}
