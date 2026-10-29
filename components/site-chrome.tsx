"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Eyebrow, PillLink } from "@/components/ui";
import { photos } from "@/lib/photos";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/awards", label: "Awards" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Synthika Trust home">
      <span className="brand-logo"><img src={photos.logo} alt="" /></span>
      <span>Synthika Trust<small>Empowering the Differently-Abled</small></span>
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header${overlay ? " is-overlay" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <div className="header-cta"><PillLink href="/donate" variant="white">Donate</PillLink></div>
        <button className="mobile-menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <PillLink href="/donate" variant="white">Donate</PillLink>
        </nav>
      )}
    </header>
  );
}

export function JoinCta() {
  return (
    <section className="join-wrap">
      <div className="section-wrap">
        <div className="join-card">
          <img className="join-dot dot-a" src={photos.hoops} alt="" />
          <img className="join-dot dot-b" src={photos.stairs} alt="" />
          <img className="join-dot dot-c" src={photos.circleClass} alt="" />
          <img className="join-dot dot-d" src={photos.candleMaking} alt="" />
          <h2>Help create equal<br />opportunities today</h2>
          <p>Your support provides education, therapy, nutrition, shelter, and skill development for differently abled children.</p>
          <PillLink href="/donate">Donate now</PillLink>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <>
      <JoinCta />
      <footer className="site-footer">
        <div className="section-wrap footer-grid">
          <div className="footer-about">
            <Brand />
            <p>Supporting differently abled children since 2006 with care, education, rehabilitation, and a path towards inclusion.</p>
            <Eyebrow light>Care with dignity</Eyebrow>
          </div>
          <div className="footer-contact">
            <p>Trichy main road, E. Vellanur (PO), Lalgudi (TK), Trichy (DT) – 621712</p>
            <p><a href="tel:+919976582866">+91 99765 82866</a><br /><a href="mailto:info@synthikatrust.org">info@synthikatrust.org</a></p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/">Home</Link><Link href="/testimonials">Testimonials</Link>
            <Link href="/about">About</Link><Link href="/gallery">Gallery</Link>
            <Link href="/programs">Programs</Link><Link href="/get-involved">Get involved</Link>
            <Link href="/awards">Awards</Link><Link href="/donate">Donate</Link>
            <Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link>
          </nav>
        </div>
        <div className="section-wrap footer-bottom">
          © {new Date().getFullYear()} <span>Synthika Trust</span>. All rights reserved. Made with care.
        </div>
      </footer>
    </>
  );
}
