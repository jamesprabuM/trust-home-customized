import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Eyebrow, PillLink, Scribble } from "@/components/ui";
import { donationProjects, formatRupees } from "@/lib/donations";
import { fetchOrder, fetchPayment, type RazorpayOrder, type RazorpayPayment } from "@/lib/razorpay";

export const metadata: Metadata = { title: "Thank you | Synthika Trust", robots: { index: false } };
export const dynamic = "force-dynamic";

async function loadDonation(paymentId: string) {
  if (!/^pay_[A-Za-z0-9]+$/.test(paymentId)) return null;
  try {
    // Look the payment up with Razorpay rather than trusting the URL.
    const payment: RazorpayPayment = await fetchPayment(paymentId);
    if (!["captured", "authorized"].includes(payment.status)) return null;
    const order: RazorpayOrder = await fetchOrder(payment.order_id);
    return { payment, order };
  } catch (error) {
    console.error(error);
    return null;
  }
}

const describeProjects = (summary = "") =>
  summary.split(",").filter(Boolean).map((part) => {
    const [id, units] = part.split("x");
    const project = donationProjects.find((p) => p.id === id);
    return project ? `${project.title} × ${units}` : null;
  }).filter(Boolean) as string[];

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ payment?: string }> }) {
  const { payment: paymentId = "" } = await searchParams;
  const donation = await loadDonation(paymentId);

  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <div className="section-wrap result-wrap">
          {donation ? (
            <div className="result-card soft-card tone-mint">
              <Eyebrow>Payment successful</Eyebrow>
              <h1>Thank you, {donation.order.notes.donor_name?.split(" ")[0] || "friend"}. You’ve made a real <Scribble>difference</Scribble></h1>
              <p>Your donation of <strong>{formatRupees(donation.payment.amount / 100)}</strong> has been received. A payment receipt from Razorpay is on its way to {donation.payment.email}.</p>
              <ul className="result-list">
                {describeProjects(donation.order.notes.projects).map((line) => <li key={line}>{line}</li>)}
              </ul>
              <dl className="result-meta">
                <div><dt>Payment ID</dt><dd>{donation.payment.id}</dd></div>
                <div><dt>Date</dt><dd>{new Date(donation.payment.created_at * 1000).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" })}</dd></div>
              </dl>
              <p className="result-note">Keep your payment ID for your records. For a tax-exemption receipt, <Link href="/contact">contact the trust</Link> with this ID.</p>
              <PillLink href="/">Back to home</PillLink>
            </div>
          ) : (
            <div className="result-card soft-card tone-peach">
              <Eyebrow>We couldn’t confirm this payment</Eyebrow>
              <h1>Let’s check your donation</h1>
              <p>We couldn’t find a completed payment for this link. If money left your account, it will appear in Razorpay within a few minutes; please <Link href="/contact">contact the trust</Link> with your payment ID and we’ll confirm it.</p>
              <PillLink href="/donate">Back to donations</PillLink>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
