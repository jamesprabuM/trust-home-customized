import { HeartHandshake, ShieldCheck, Sprout } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Eyebrow, InnerHero, PillLink, Scribble } from "@/components/ui";
import { photos } from "@/lib/photos";
import { sitePhotos } from "@/lib/site-photos";

const values = [
  { icon: Sprout, tone: "mint", color: "green", title: "Our Vision", image: sitePhotos.about.vision, alt: "A smiling boy standing beside a plant at the home", text: ["To build an inclusive society where children with disabilities are empowered to reach their full potential and enjoy equal opportunities."] },
  { icon: HeartHandshake, tone: "lavender", color: "purple", title: "Our Mission", image: sitePhotos.about.mission, alt: "Children smiling on the stairs of the home", text: ["To provide quality special education, healthcare, skill development, and opportunities for social inclusion, enabling every child to grow with confidence and independence."] },
  { icon: ShieldCheck, tone: "peach", color: "yellow", title: "Our Goals and Objectives", image: sitePhotos.about.goals, alt: "Children, including wheelchair users, gathered outside the home", text: [
    "Synthika Trust aims to create opportunities for children with disabilities to lead fulfilling and meaningful lives, participate actively in society, and reach their full potential. We strive to improve their overall health and well-being through appropriate healthcare, prescribed medications, nutritious food, and healthy daily habits.",
    "Through special education, counselling, therapy, rehabilitation, and vocational training, we focus on developing each child’s abilities, confidence, and essential life skills. Our goal is to help children perform daily activities with greater independence, encourage social inclusion, and enable them to participate meaningfully in their families and communities.",
  ] },
];

const origin = [
  "Synthika Trust was founded in 2006 by Mr. T. Selvaraj, Founder and Managing Trustee, driven by a deep desire to give back to the community. Having received sponsorship support throughout his school and college education, he developed a strong sense of gratitude and a passion for helping children in need, especially children with disabilities.",
  "Inspired by the support he had received, Mr. Selvaraj began Synthika Trust with just seven children with disabilities in a rented house. What started as a small initiative rooted in compassion and service gradually grew into a residential special school and home dedicated to providing care, special education, therapy, rehabilitation, and opportunities for children to develop their abilities and independence.",
  "Today, Synthika Trust continues its journey with the same founding spirit: to ensure that every child receives the care, support, and opportunities they deserve to learn, grow, and lead a dignified life.",
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero cover={sitePhotos.covers.about} coverAlt="Children at Synthika Trust" coverFull coverPosition="38% 50%" coverPositionMobile="50% 50%" eyebrow="About Synthika Trust" title={<>Creating an Inclusive <Scribble>Future</Scribble> Since 2006</>} text="Synthika Trust is a non-profit organisation dedicated to supporting children with disabilities through residential care, special education, rehabilitation, and therapy services. We nurture each child’s abilities through personalized learning, life skills training, and vocational development, helping them build confidence, achieve greater independence, and lead dignified lives in an inclusive society.">
        <PillLink href="/programs">Explore our work</PillLink>
      </InnerHero>
      <section className="content-panel section-wrap">
        <div className="story-grid">
          <img className="story-photo" src={sitePhotos.about.founder} alt="Mr. T. Selvaraj, Founder and Managing Trustee of Synthika Trust, at his desk" />
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2>Origin and History</h2>
            {origin.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
          </div>
        </div>
        <div className="card-grid">
          {values.map(({ icon: Icon, tone, color, title, text, image, alt }) => (
            <article key={title} className={`soft-card tone-${tone} value-photo-card`}>
              <img src={image} alt={alt} loading="lazy" />
              <span className={`icon-circle big ${color}`}><Icon size={30} /></span>
              <div><h3>{title}</h3>{text.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}</div>
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
