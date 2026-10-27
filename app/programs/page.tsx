import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Eyebrow, InnerHero, ProgramCard, Scribble } from "@/components/ui";
import { programs } from "@/lib/programs";
import { sitePhotos } from "@/lib/site-photos";

const places = [
  { tone: "mint", title: "Synthika Home", image: sitePhotos.about.home, alt: "The front of the Synthika Home building with colourful pillars", text: "A residential home where intellectually disabled, hearing impaired, and visually impaired children receive food, shelter, care, and special education." },
  { tone: "lavender", title: "Synthika Special School", image: sitePhotos.about.school, alt: "Students and staff of Synthika Special School gathered for a group photo", text: "Our school brings children, teachers, and therapists together for individual learning, therapy, and everyday life skills." },
];

export default function ProgramsPage() {
  return (
    <main className="programs-page">
      <SiteHeader />
      <InnerHero cover={sitePhotos.covers.programs} coverAlt="Children learning at Synthika Trust" eyebrow="What we do" title={<>Support for every stage of <Scribble>growth</Scribble></>} text="Our work combines residential care, special education, therapy, nutrition, practical skills, and community inclusion for differently abled children." />
      <section className="content-panel section-wrap">
        <div className="place-grid">
          {places.map((place) => (
            <article key={place.title} className={`soft-card tone-${place.tone} place-card`}>
              <img src={place.image} alt={place.alt} loading="lazy" />
              <div><h3>{place.title}</h3><p>{place.text}</p></div>
            </article>
          ))}
        </div>

        <div className="section-head projects-head">
          <div>
            <Eyebrow>Our projects</Eyebrow>
            <h2 className="display">The work behind <Scribble kind="swoosh">every child</Scribble></h2>
          </div>
        </div>
        <div className="program-stack">
          {programs.map((program) => <ProgramCard key={program.number} program={program} href="/contact" showGallery />)}
        </div>
        <p className="content-note">Program descriptions are based on the content supplied by Synthika Trust. Confirm current availability and eligibility directly with the trust.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
