import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";
import { testimonials } from "@/lib/testimonials";

const initials = (name: string) =>
  name.replace(/^(Mr|Mrs|Ms|Dr)\.\s*/, "").split(" ").map((part) => part[0]).slice(0, 2).join("");

export default function TestimonialsPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Testimonials" title={<>Words from those who have <Scribble>seen</Scribble> our work</>} text="Partners, medical officers, and supporters share what they have witnessed at Synthika Trust and in the communities we serve." cover={sitePhotos.covers.testimonials} coverAlt="A teacher working with children at Synthika Trust" />
      <section className="content-panel section-wrap">
        <div className="testimonial-list">
          {testimonials.map((item) => (
            <figure key={item.name} className="testimonial-card">
              <div className={`testimonial-side soft-card tone-${item.tone}`} aria-hidden="true">
                <span className="testimonial-mark">“</span>
                <span className="testimonial-initials">{initials(item.name)}</span>
              </div>
              <div className="testimonial-body">
                <blockquote>{item.quote.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{[item.role, item.organisation].filter(Boolean).join(" · ")}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
