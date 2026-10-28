"use client";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";

const EMAIL = "info@synthikatrust.org";
const ADDRESS = "Trichy main road, E. Vellanur (PO), Lalgudi (TK), Trichy (DT) – 621712";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Synthika Trust, ${ADDRESS}`)}`;
const PHONES = [
  { label: "+91 99765 82866", tel: "+919976582866" },
  { label: "+91 87546 38240", tel: "+918754638240" },
];

export default function ContactPage() {
  const [opened, setOpened] = useState(false);

  // No backend: build a pre-filled email and hand it to the visitor's mail app.
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const topic = String(form.get("topic") ?? "General enquiry");
    const message = String(form.get("message") ?? "").trim();
    const subject = `${topic} – enquiry from ${name}`;
    const body = `${message}\n\n—\nName: ${name}\nEmail: ${email}\nTopic: ${topic}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Contact Synthika Trust" title={<>We’re here to <Scribble>hear</Scribble> from you</>} text="For questions about our work, services, visiting, volunteering, partnerships, or donations, please use the details below." cover={sitePhotos.covers.contact} coverAlt="A teacher with children in a classroom" />
      <section className="section-wrap contact-layout">
        <div className="contact-details">
          <a className="soft-card tone-mint contact-card" href={MAP_URL} target="_blank" rel="noopener noreferrer">
            <MapPin /><h2>Visit us</h2><p>{ADDRESS}</p>
            <span className="contact-action">Open in Google Maps <ArrowUpRight size={16} /></span>
          </a>
          <div className="soft-card tone-lavender contact-card">
            <Phone /><h2>Call us</h2>
            <div className="contact-phones">
              {PHONES.map((phone) => <a key={phone.tel} href={`tel:${phone.tel}`} className="contact-action">{phone.label} <ArrowUpRight size={16} /></a>)}
            </div>
          </div>
          <a className="soft-card tone-peach contact-card" href={`mailto:${EMAIL}`}>
            <Mail /><h2>Email us</h2><p>{EMAIL}</p>
            <span className="contact-action">Write an email <ArrowUpRight size={16} /></span>
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send an enquiry</h2>
          <p>Fill this in and press Send. Your email app will open with the message ready to send to {EMAIL}.</p>
          <label>Your name<input required name="name" autoComplete="name" placeholder="Full name" /></label>
          <label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
          <label>Topic<select name="topic" defaultValue="General enquiry"><option>General enquiry</option><option>Residential care</option><option>Special education</option><option>Donation</option><option>Volunteering</option><option>Partnership</option></select></label>
          <label>Message<textarea required name="message" rows={4} placeholder="How can we help?" /></label>
          <button className="pill pill-purple" type="submit">Send enquiry <span className="pill-icon"><ArrowRight size={17} strokeWidth={2.4} /></span></button>
          {opened && <p className="form-notice" role="status">Your email app should now be open with your message. Press send there to deliver it. If nothing opened, email us directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>}
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
