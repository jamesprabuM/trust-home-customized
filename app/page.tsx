import Link from "next/link";
import { BookOpen, Check, Heart, HeartHandshake, Puzzle, ShieldCheck, Sprout } from "lucide-react";
import AutoplayVideo from "@/components/autoplay-video";
import CountUp from "@/components/count-up";
import ScrollVideo from "@/components/scroll-video";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AsteriskMark, Eyebrow, Marquee, PillLink, ProgramCard, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";
import { photos } from "@/lib/photos";
import { programs } from "@/lib/programs";

const stats = [
  { value: 2006, suffix: "", label: "Year the trust was founded" },
  { value: 7, suffix: "", label: "Children we began with" },
  { value: 110, suffix: "+", label: "Food packets shared daily" },
  { value: 7, suffix: "", label: "Programs of care and learning" },
];

const moments = [
  { tone: "mint", title: "Classroom activities", src: photos.circleClass, alt: "A teacher leading a classroom activity with students seated in a circle" },
  { tone: "lavender", title: "Outdoor play", src: photos.hoops, alt: "A smiling girl playing with hoops outdoors" },
  { tone: "peach", title: "Learning with fruits and vegetables", src: photos.classroomFruits, alt: "A teacher using fruits and vegetables in a lesson" },
  { tone: "mint", title: "Colouring practice", src: photos.coloring, alt: "A student colouring at a desk" },
  { tone: "lavender", title: "Phenyl making", src: photos.phenylMaking, alt: "Students and teachers with bottles of phenyl they made" },
  { tone: "peach", title: "Candle making", src: photos.candleMaking, alt: "Young adults waving with gloved hands after a candle-making session" },
  { tone: "mint", title: "Sustainable gardening", src: sitePhotos.home.gardening, alt: "A young man watering brinjal plants in the garden" },
  { tone: "lavender", title: "Life at Synthika Home", src: photos.stairs, alt: "Children sitting together on the stairs of the home" },
];

const values = [
  { icon: Sprout, tone: "mint", title: "Our vision", text: "An inclusive society where differently abled children are recognised, empowered, and given equal opportunities to reach their full potential." },
  { icon: HeartHandshake, tone: "lavender", title: "Our mission", text: "Access to quality education, healthcare, skill development, counselling, therapy, and social inclusion for every child in our care." },
  { icon: ShieldCheck, tone: "peach", title: "Our goals", text: "Helping children lead fulfilling lives, build independence, and become productive and respected members of society." },
];

const features = [
  { title: "Residential care", text: "Food, shelter, and a safe home for intellectually disabled, hearing impaired, and visually impaired children." },
  { title: "Trained teachers", text: "Special educators who adapt every lesson to each child’s pace, abilities, and interests." },
  { title: "Therapy on site", text: "Speech therapy, occupational therapy, and physiotherapy as part of everyday life at the home." },
  { title: "Skills for life", text: "Gardening, crafts, and vocational work that build confidence and self-reliance." },
];

const ways = [
  { tone: "mint", title: "Donate", text: "Help provide education, therapy, nutrition, and shelter for the children in our care.", items: ["Special education and therapy", "Daily meals and nutrition", "Residential care and shelter", "Skill-building materials", "Verified receipts on request"], href: "/donate", cta: "Donate now", variant: "purple" as const },
  { tone: "peach", title: "Volunteer or partner", text: "Share your time, skills, or organisation’s support with our children and community.", items: ["Teaching and activity support", "Therapy and health camps", "Community awareness drives", "Corporate partnerships", "Visits by appointment"], href: "/contact", cta: "Get in touch", variant: "white" as const },
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader overlay />

      <section className="video-hero" aria-labelledby="hero-title">
        <ScrollVideo poster={photos.hoops} />
        <div className="hero-shade" aria-hidden="true" />
        <div className="section-wrap video-hero-content">
          <h1 id="hero-title">Support, dignity,<br />and <Scribble>possibility</Scribble></h1>
          <p className="hero-lede">Since 2006, Synthika Trust has supported differently abled children with care, education, therapy, food, shelter, and a path towards independence.</p>
          <PillLink href="/donate" variant="white">Donate now</PillLink>
        </div>
      </section>

      <Marquee />

      <section className="about-section tone-bg-cream">
        <div className="section-wrap">
          <div className="about-head">
            <Eyebrow>About us</Eyebrow>
            <h2 className="lead-text">
              A home where differently abled children are cared for, taught, and encouraged to grow into confident, independent lives
              <span className="icon-stack" aria-hidden="true">
                <span className="green"><Heart size={18} fill="currentColor" /></span>
                <span className="purple"><ShieldCheck size={18} /></span>
                <span className="yellow"><Puzzle size={18} fill="currentColor" /></span>
              </span>
            </h2>
          </div>
          <div className="stats-row">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <strong><CountUp to={stat.value} suffix={stat.suffix} duration={stat.value > 1000 ? 1800 : 1400} /></strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="photo-reel" aria-labelledby="photo-reel-title">
        <div className="section-wrap photo-reel-head">
          <Eyebrow>A day at the home</Eyebrow>
          <h2 id="photo-reel-title" className="display">Every day is a chance to <Scribble>grow</Scribble></h2>
          <p className="body-text">Learning, play, and skill-building at Synthika Trust.</p>
        </div>
        <div className="photo-reel-viewport">
          <div className="photo-reel-track">
            {[0, 1].map((copy) => moments.map((moment) => (
              <figure key={`${copy}-${moment.title}`} className={`reel-card tone-${moment.tone}`} aria-hidden={copy === 1 || undefined}>
                <img src={moment.src} alt={copy === 0 ? moment.alt : ""} decoding="async" />
                <figcaption>{moment.title}</figcaption>
              </figure>
            )))}
          </div>
        </div>
        <figure className="section-wrap family-photo">
          <img src={sitePhotos.home.family} alt="Children and staff of Synthika Trust gathered together for a group photo" loading="lazy" />
          <figcaption>Our Synthika family</figcaption>
        </figure>
      </section>

      <section className="why-section">
        <svg className="deco-squiggle" viewBox="0 0 600 500" aria-hidden="true"><path d="M590 20c-60-10-70 30-80 60s-60 70-110 30-20-90 30-60 60 120 0 190-160 60-220 30-140 90-120 180" /></svg>
        <div className="section-wrap why-grid">
          <img className="why-photo" src={photos.stairs} alt="Children in Synthika Trust uniforms sitting on the stairs of the home" />
          <div>
            <Eyebrow>Why Synthika</Eyebrow>
            <h2 className="display">Care that sees<br />the whole <Scribble>child</Scribble></h2>
            <p className="body-text">We create a safe and dignified home where children receive individual attention, learn at their own pace, and grow in confidence every day.</p>
            <div className="asterisk-divider"><AsteriskMark /></div>
            <div className="why-points">
              <div><h3>Safe home</h3><p>Shelter, meals, and care in a secure, supportive place.</p></div>
              <div><h3>Joyful learning</h3><p>Lessons, play, and therapy designed for each child.</p></div>
            </div>
            <PillLink href="/contact">Contact us</PillLink>
          </div>
        </div>
      </section>

      <section className="guided-section">
        <div className="section-wrap guided-grid">
          <div className="guided-copy">
            <h2 className="display">Guided by care<br />and <Scribble>inclusion</Scribble></h2>
            <p className="body-text">Everything we do is shaped by one belief: differently abled children deserve the same opportunities to learn, belong, and thrive.</p>
          </div>
          <div className="value-scroller">
            {values.map(({ icon: Icon, tone, title, text }) => (
              <article key={title} className={`soft-card value-card tone-${tone}`}>
                <span className={`icon-circle big ${tone === "mint" ? "green" : tone === "lavender" ? "purple" : "yellow"}`}><Icon size={30} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="presentation" aria-labelledby="presentation-title">
        <AutoplayVideo src="/videos/building.mp4" poster={photos.building} label="The front of the Synthika Trust home, with colourful pillars and a mural reading “Every child is an artist”" />
        <div className="presentation-copy">
          <Eyebrow light>Life at the home</Eyebrow>
          <h2 id="presentation-title">Discover our <Scribble kind="swoosh">learning space</Scribble></h2>
        </div>
      </section>
      <Marquee />

      <section className="programs-section tone-bg-cream">
        <div className="section-wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Our programs</Eyebrow>
              <h2 className="display">Practical support for<br /><Scribble kind="swoosh">independent lives</Scribble></h2>
            </div>
            <PillLink href="/programs">View all programs</PillLink>
          </div>
          <div className="program-stack">
            {programs.slice(0, 4).map((program) => <ProgramCard key={program.number} program={program} />)}
          </div>
        </div>
      </section>

      <section className="features-section">
        <svg className="deco-squiggle small" viewBox="0 0 300 200" aria-hidden="true"><path d="M290 10c-60 0-70 20-75 60s-40 80-100 90" /></svg>
        <div className="section-wrap features-grid">
          <div className="features-copy">
            <Eyebrow>What we provide</Eyebrow>
            <h2 className="display">Care in every<br />little <Scribble>detail</Scribble></h2>
            <p className="body-text">A closer look at what makes the trust a home, where every routine is designed to support dignity, learning, and independence.</p>
            <PillLink href="/programs">Explore our work</PillLink>
          </div>
          <div className="feature-cards">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <AsteriskMark className="yellow" />
                <div><h3>{feature.title}</h3><p>{feature.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-strip tone-bg-cream" aria-labelledby="gallery-title">
        <div className="section-wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Gallery</Eyebrow>
              <h2 id="gallery-title" className="display">Moments that make<br />a <Scribble>home</Scribble></h2>
            </div>
            <PillLink href="/gallery" variant="white">Visit the gallery</PillLink>
          </div>
          <div className="mosaic">
            <img className="m-tall" src={photos.circleClass} alt="Teacher leading a group activity in a classroom" />
            <img src={photos.candleMaking} alt="Young adults waving during a craft session" />
            <img src={photos.garden} alt="Vegetable garden tended by the trust" />
            <img src={photos.classroomFruits} alt="Teacher using fruits and vegetables in a lesson" />
            <img src={photos.coloring} alt="Student colouring at a desk" />
          </div>
        </div>
      </section>

      <section className="ways-section tone-bg-cream">
        <div className="section-wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Get involved</Eyebrow>
              <h2 className="display">Ways to stand<br />with our <Scribble>children</Scribble></h2>
            </div>
          </div>
          <div className="ways-grid">
            {ways.map((way) => (
              <article key={way.title} className={`soft-card way-card tone-${way.tone}`}>
                <h3>{way.title}</h3>
                <p>{way.text}</p>
                <PillLink href={way.href} variant={way.variant}>{way.cta}</PillLink>
                <hr />
                <h4>What it supports</h4>
                <ul>{way.items.map((item) => <li key={item}><span><Check size={13} strokeWidth={3} /></span>{item}</li>)}</ul>
              </article>
            ))}
            <img className="ways-photo" src={photos.handsChild} alt="An adult hand holding a child’s hand" />
          </div>
          <p className="fine-print"><BookOpen size={14} /> Online donations are not connected yet. <Link href="/contact">Contact the trust</Link> for verified payment details.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
