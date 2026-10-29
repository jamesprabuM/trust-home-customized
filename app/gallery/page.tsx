import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero cover={sitePhotos.covers.gallery} coverAlt="A child playing in a colourful sensory tunnel" coverFull coverPosition="45% 50%" eyebrow="Photos" title={<>Moments at <Scribble>Synthika</Scribble></>} text="Explore moments of learning, therapy, play, creativity, and togetherness that capture the everyday experiences of our children at Synthika Trust." />
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
