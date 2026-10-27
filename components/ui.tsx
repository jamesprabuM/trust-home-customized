import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/programs";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z" /></svg>
      {children}
    </div>
  );
}

type PillProps = { href: string; children: React.ReactNode; variant?: "purple" | "white" };

export function PillLink({ href, children, variant = "purple" }: PillProps) {
  return (
    <Link href={href} className={`pill pill-${variant}`}>
      {children}
      <span className="pill-icon"><ArrowRight size={17} strokeWidth={2.4} /></span>
    </Link>
  );
}

/** Wraps a word in a hand-drawn yellow loop, like a marker circle. */
export function Scribble({ children, kind = "loop" }: { children: React.ReactNode; kind?: "loop" | "swoosh" }) {
  return (
    <span className="scribble">
      {children}
      {kind === "loop" ? (
        <svg viewBox="0 0 220 70" preserveAspectRatio="none" aria-hidden="true">
          <path d="M28 52C6 44 4 26 40 16 92 2 182 4 206 22c20 15-8 34-62 40-52 6-120 2-136-14" />
        </svg>
      ) : (
        <svg className="swoosh" viewBox="0 0 220 30" preserveAspectRatio="none" aria-hidden="true">
          <path d="M4 22C60 6 150 2 216 14" />
        </svg>
      )}
    </span>
  );
}

const marqueeWords = ["Care with dignity", "Learning for every child", "Support with purpose", "Inclusion for all"];

export function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {items.map((word, i) => (
              <span key={`${copy}-${i}`} className="marquee-item">
                <AsteriskMark />
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AsteriskMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`asterisk ${className}`} viewBox="0 0 40 40" aria-hidden="true">
      <g strokeWidth="7" strokeLinecap="round">
        <path d="M20 4v32M4 20h32M8.7 8.7l22.6 22.6M31.3 8.7 8.7 31.3" />
      </g>
    </svg>
  );
}

type InnerHeroProps = { eyebrow: string; title: React.ReactNode; text: string; image?: string; imageAlt?: string; cover?: string; coverAlt?: string; children?: React.ReactNode };

/** Page heading. `cover` is a wide banner photo shown full-width above the heading. */
export function InnerHero({ eyebrow, title, text, image, imageAlt = "", cover, coverAlt = "", children }: InnerHeroProps) {
  return (
    <>
    {cover && <div className="inner-cover"><img src={cover} alt={coverAlt} /></div>}
    <section className="inner-hero">
      <div className="section-wrap inner-hero-grid">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </div>
        {image && <img className="inner-hero-photo" src={image} alt={imageAlt} />}
      </div>
    </section>
    </>
  );
}

export function ProgramCard({ program, href = "/programs", showGallery = false }: { program: Program; href?: string; showGallery?: boolean }) {
  return (
    <article className={`program-card tone-${program.tone}${program.image ? "" : " no-image"}`}>
      <div className="program-card-body">
        <span className="number-badge">{program.number}</span>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        <span className="tag">{program.tag}</span>
        <Link className="detail-link" href={href}>View details <ArrowRight size={16} /></Link>
      </div>
      {program.image && <img src={program.image} alt={`${program.title} at Synthika Trust`} loading="lazy" />}
      {showGallery && program.gallery && program.gallery.length > 0 && (
        <div className="program-strip">
          {program.gallery.map((src) => <img key={src} src={src} alt={`${program.title} at Synthika Trust`} loading="lazy" />)}
        </div>
      )}
    </article>
  );
}
