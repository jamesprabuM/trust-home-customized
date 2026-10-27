import { HeartHandshake, ShieldCheck, Sprout } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Eyebrow, InnerHero, PillLink, Scribble } from "@/components/ui";
import { photos } from "@/lib/photos";
import { sitePhotos } from "@/lib/site-photos";

const values = [
  { icon: Sprout, tone: "mint", color: "green", title: "Our vision", image: sitePhotos.about.vision, alt: "A smiling boy standing beside a plant at the home", text: "To create an inclusive society where differently abled children are recognised, empowered, and provided equal opportunities to develop and reach their full potential." },
  { icon: HeartHandshake, tone: "lavender", color: "purple", title: "Our mission", image: sitePhotos.about.mission, alt: "Children smiling on the stairs of the home", text: "To provide access to quality education, healthcare, skill development, counselling, therapy, and social inclusion." },
  { icon: ShieldCheck, tone: "peach", color: "yellow", title: "Our goals", image: sitePhotos.about.goals, alt: "Children, including wheelchair users, gathered outside the home", text: "To help children lead fulfilling lives, build independence, and become productive and respected members of society." },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero cover={sitePhotos.covers.about} coverAlt="Children at Synthika Trust" eyebrow="About Synthika Trust" title={<>Creating an inclusive <Scribble>future</Scribble> since 2006</>} text="Synthika Trust is a non-profit organisation working to support differently abled children with care, education, rehabilitation, and opportunities to become self-sufficient and independent.">
        <PillLink href="/programs">Explore our work</PillLink>
      </InnerHero>
      <section className="content-panel section-wrap">
        <div className="story-grid">
          <img className="story-photo" src={sitePhotos.about.origin} alt="Children sitting on the stairs at the Synthika Trust home" />
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2>Origin and history</h2>
            <p>In 2006, passionate individuals came together with a shared vision to make a difference in the lives of differently abled children. The journey began with seven children and a commitment to provide comprehensive care, education, and rehabilitation services.</p>
          </div>
        </div>
        <div className="card-grid">
          {values.map(({ icon: Icon, tone, color, title, text, image, alt }) => (
            <article key={title} className={`soft-card tone-${tone} value-photo-card`}>
              <img src={image} alt={alt} loading="lazy" />
              <span className={`icon-circle big ${color}`}><Icon size={30} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="presentation" aria-label="Hands held together">
        <img src={photos.handsLight} alt="" />
        <div className="presentation-copy">
          <Eyebrow light>Our promise</Eyebrow>
          <h2>Care with dignity, support with <Scribble kind="swoosh">purpose</Scribble></h2>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
