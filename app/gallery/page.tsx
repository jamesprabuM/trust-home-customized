import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero cover={sitePhotos.covers.gallery} coverAlt="A child playing in a colourful sensory tunnel" eyebrow="Photos" title={<>Moments of learning, care, and <Scribble>community</Scribble></>} text="A glimpse into everyday life at the trust: classrooms, therapy, play, skill-building, and the garden our children help grow." />
      <section className="content-panel section-wrap">
        <div className="masonry">
          {sitePhotos.gallery.map((src) => (
            <img key={src} src={src} alt="Life at Synthika Trust" loading="lazy" />
          ))}
        </div>
        <p className="content-note">Photos are shared with appropriate consent.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
