"use client";
import { useState } from "react";
import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";

const details = [
  { icon: MapPin, tone: "mint", title: "Visit us", body: <>Trichy main road, E. Vellanur (PO), Lalgudi (TK), Trichy (DT) – 621712</> },
  { icon: Phone, tone: "lavender", title: "Call us", body: <><a href="tel:+919976582866">+91 99765 82866</a><br /><a href="tel:+918754638240">+91 87546 38240</a></> },
  { icon: Mail, tone: "peach", title: "Email us", body: <a href="mailto:info@synthikatrust.org">info@synthikatrust.org</a> },
  { icon: Globe, tone: "cream", title: "Website", body: <>synthikatrust.org</> },
];

export default function ContactPage() {
  const [checked, setChecked] = useState(false);
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Contact Synthika Trust" title={<>We’re here to <Scribble>hear</Scribble> from you</>} text="For questions about our work, services, visiting, volunteering, partnerships, or donations, please use the details below." cover={sitePhotos.covers.contact} coverAlt="A teacher with children in a classroom" />
      <section className="section-wrap contact-layout">
        <div className="contact-details">
          {details.map(({ icon: Icon, tone, title, body }) => (
            <div key={title} className={`soft-card tone-${tone}`}><Icon /><h2>{title}</h2><p>{body}</p></div>
          ))}
        </div>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); setChecked(true); }}>
          <h2>Send an enquiry</h2>
          <p>Demo only: this form does not transmit messages.</p>
          <label>Your name<input required name="name" autoComplete="name" placeholder="Full name" /></label>
          <label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
          <label>Topic<select name="topic" defaultValue="General enquiry"><option>General enquiry</option><option>Residential care</option><option>Special education</option><option>Donation</option><option>Volunteering</option><option>Partnership</option></select></label>
          <label>Message<textarea required name="message" rows={4} placeholder="How can we help?" /></label>
          <button className="pill pill-purple" type="submit">Preview enquiry <span className="pill-icon"><ArrowRight size={17} strokeWidth={2.4} /></span></button>
          {checked && <p className="form-notice" role="status">Local validation passed, but your message has not been sent. Connect a secure backend before launch.</p>}
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
