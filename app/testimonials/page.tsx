import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, Scribble } from "@/components/ui";
import VideoPopup from "@/components/video-popup";
import { sitePhotos } from "@/lib/site-photos";
import { testimonials } from "@/lib/testimonials";

// Web encodes of the original recording: full video with sound for the popup, a 20s muted clip for the preview loop.
const testimonialVideo = { src: "/videos/testimonial.mp4", preview: "/videos/testimonial-preview.mp4", poster: "/images/site/covers/testimonial-poster.jpg" };

export default function TestimonialsPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Testimonials" title={<>Words from those who have <Scribble>seen</Scribble> our work</>} text="Hear from our donors, partners, parents, and supporters about their experiences with Synthika Trust and the difference our work makes in the lives of children with disabilities and their families." cover={sitePhotos.covers.testimonials} coverAlt="A teacher working with children at Synthika Trust" coverFull coverPosition="40% 50%" coverPositionMobile="10% 50%" media={<VideoPopup src={testimonialVideo.src} previewSrc={testimonialVideo.preview} poster={testimonialVideo.poster} label="A look inside Synthika Trust" />} />
      <section className="content-panel testimonial-reel" aria-label="Testimonials">
        <div className="testimonial-viewport">
          <div className="testimonial-track">
            {/* Second copy makes the loop seamless; it is hidden from assistive tech. */}
            {[0, 1].map((copy) => testimonials.map((item) => (
              <figure key={`${copy}-${item.name}`} className={`testimonial-card soft-card tone-${item.tone}`} aria-hidden={copy === 1 || undefined}>
                <span className="testimonial-mark" aria-hidden="true">“</span>
                <blockquote>{item.quote.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{[item.role, item.organisation].filter(Boolean).join(" · ")}</span>
                </figcaption>
              </figure>
            )))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
