import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Eyebrow, InnerHero, ProgramCard, Scribble } from "@/components/ui";
import { programs } from "@/lib/programs";
import { sitePhotos } from "@/lib/site-photos";

const places = [
  { tone: "mint", title: "Synthika Home", image: sitePhotos.about.home, alt: "The front of the Synthika Home building with colourful pillars", text: ["Synthika Trust runs a residential home for children who need full-time care and support. The home provides safe accommodation, nutritious food, medical attention, and emotional care under the supervision of dedicated staff. Children live and learn together as one family, participating in school programs, therapies, and celebrations that nurture their confidence and happiness."] },
  { tone: "lavender", title: "Synthika Special School", image: sitePhotos.about.school, alt: "Students and staff of Synthika Special School gathered for a group photo", text: [
    "Synthika Trust is committed to providing quality special education and rehabilitation for children with disabilities, including intellectual disabilities, autism, cerebral palsy, and multiple disabilities.",
    "We offer individualized special education, speech therapy, physiotherapy, occupational therapy, life skills training, and vocational skill development tailored to each child’s abilities and needs. Through Individualized Education Plans (IEPs), hands-on learning, therapeutic support, and daily living activities, we help every child learn at their own pace, build confidence, develop essential skills, and achieve greater independence in a caring and inclusive environment.",
  ] },
];

export default function ProgramsPage() {
  return (
    <main className="programs-page" data-text-reveal>
      <SiteHeader />
      <InnerHero cover={sitePhotos.covers.programs} coverAlt="A teacher showing fruit and vegetables to children around a classroom table" coverFull coverPosition="50% 32%" eyebrow="What we do" title={<>Nurturing Abilities, Building <Scribble>Independence</Scribble></>} text="At Synthika Trust, we support children with disabilities through residential care, special education, rehabilitation, and therapies. We also provide vocational training and sustainable agriculture activities to develop practical skills, encourage independence, and create opportunities for a more fulfilling life." />
      <section className="content-panel section-wrap">
        <div className="place-grid">
          {places.map((place) => (
            <article key={place.title} className={`soft-card tone-${place.tone} place-card`}>
              <img src={place.image} alt={place.alt} loading="lazy" />
              <div><h3>{place.title}</h3>{place.text.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}</div>
            </article>
          ))}
        </div>

        <div className="section-head projects-head">
          <div>
            <Eyebrow>Our projects</Eyebrow>
            <h2 className="display">Creating Opportunities, <Scribble kind="swoosh">Changing Lives</Scribble></h2>
            <p className="body-text">Every project at Synthika Trust aims to improve the lives of children with disabilities through better facilities, quality education, rehabilitation, skill development, and compassionate care.</p>
          </div>
        </div>
        <div className="program-stack">
          {programs.map((program) => <ProgramCard key={program.number} program={program} full />)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
