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
  { value: 2006, suffix: "", label: "Year Synthika Trust was founded" },
  { value: 7, suffix: "", label: "Children we began our journey with" },
  { value: 100, suffix: "+", label: "Nutritious food packets distributed every day" },
  { value: 7, suffix: "", label: "Programs supporting care and development" },
];

const moments = [
  { tone: "mint", title: "Phenyl Making", src: photos.phenylMaking, alt: "Students and teachers with bottles of phenyl they made" },
  { tone: "lavender", title: "Dhoop Stick Making", src: sitePhotos.projects.skilling[5], alt: "Young adults in gloves shaping dhoop sticks at a table" },
  { tone: "peach", title: "Gardening Practice", src: sitePhotos.home.gardening, alt: "A young man watering brinjal plants in the garden" },
  { tone: "mint", title: "Life at Synthika Home", src: photos.stairs, alt: "Children sitting together on the stairs of the home" },
  { tone: "lavender", title: "Group Activities", src: photos.circleClass, alt: "A teacher leading a classroom activity with students seated in a circle" },
  { tone: "peach", title: "Outdoor Games", src: photos.hoops, alt: "A smiling girl playing with hoops outdoors" },
  { tone: "mint", title: "Learning with Real Life Objects", src: photos.classroomFruits, alt: "A teacher using fruits and vegetables in a lesson" },
  { tone: "lavender", title: "Colouring & Writing Practice", src: photos.coloring, alt: "A student colouring at a desk" },
];

const values = [
  { icon: Sprout, tone: "mint", title: "Our Vision", text: "To build an inclusive society where children with disabilities are empowered to reach their full potential and enjoy equal opportunities." },
  { icon: HeartHandshake, tone: "lavender", title: "Our Mission", text: "To provide quality special education, healthcare, skill development, and opportunities for social inclusion, enabling every child to grow with confidence and independence." },
];

const features = [
  { title: "Residential Care", text: "A safe and loving home with nutritious meals, comfortable shelter, personal care, and daily support for children with disabilities." },
  { title: "Special Education", text: "Individualized learning guided by trained special educators, helping each child learn at their own pace and develop essential skills." },
  { title: "Therapy and Rehabilitation", text: "Speech therapy, physiotherapy, and occupational therapy to support children’s communication, movement, coordination, and everyday activities." },
  { title: "Life Skills and Vocational Training", text: "Hands-on activities such as gardening, phenyl making, dhoop stick making, and other vocational skills that encourage confidence and independence." },
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
        <ScrollVideo poster={photos.heroPoster} />
        <div className="hero-shade" aria-hidden="true" />
        <div className="section-wrap video-hero-content">
          <h1 id="hero-title">Empowering Every Ability, Celebrating Every Individual.</h1>
          <p className="hero-lede">Nurturing Hope, Building Independence, Creating a World of Inclusion.</p>
          <PillLink href="/donate" variant="white">Donate now</PillLink>
        </div>
      </section>

      <Marquee />

      <section className="about-section tone-bg-cream">
        <div className="section-wrap">
          <div className="about-head">
            <Eyebrow>About us</Eyebrow>
            <h2 className="lead-text">
              A home where children with disabilities receive loving care, special education, and support to grow into confident, independent individuals.
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
          <Eyebrow>A day at Synthika Home</Eyebrow>
          <h2 id="photo-reel-title" className="display display-sm">Every day is a chance to <Scribble>grow</Scribble></h2>
          <p className="body-text">“Learning, Playing, and Building Skills at Synthika Trust.”</p>
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
          <figcaption><span aria-hidden="true">✦</span>Our Synthika Family<span aria-hidden="true">✦</span></figcaption>
        </figure>
      </section>

      <section className="why-section">
        <svg className="deco-squiggle" viewBox="0 0 600 500" aria-hidden="true"><path d="M590 20c-60-10-70 30-80 60s-60 70-110 30-20-90 30-60 60 120 0 190-160 60-220 30-140 90-120 180" /></svg>
        <div className="section-wrap why-grid">
          <img className="why-photo" src={photos.stairs} alt="Children in Synthika Trust uniforms sitting on the stairs of the home" />
          <div>
            <Eyebrow>Why Synthika?</Eyebrow>
            <h2 className="display">Care that sees<br />the whole <Scribble>child</Scribble></h2>
            <p className="body-text">We create a safe and nurturing home where children receive individual attention, special education, and compassionate care, helping them learn at their own pace, develop essential life skills, and grow in confidence every day.</p>
            <div className="asterisk-divider"><AsteriskMark /></div>
            <div className="why-points">
              <div><h3>Safe and nurturing home</h3><p>A secure, loving environment with comfortable shelter, nutritious meals, and compassionate care.</p></div>
              <div><h3>Joyful learning</h3><p>Individualized special education, play, and therapeutic activities tailored to each child’s abilities and needs.</p></div>
            </div>
            <PillLink href="/contact">Contact us</PillLink>
          </div>
        </div>
      </section>

      <section className="guided-section">
        <div className="section-wrap guided-grid">
          <div className="guided-copy">
            <h2 className="display">Guided by Care<br />and <Scribble>Inclusion</Scribble></h2>
            <p className="body-text">Everything we do is rooted in one belief: every child with a disability deserves equal opportunities for special education, meaningful participation, and the chance to grow, belong, and thrive.</p>
          </div>
          <div className="value-cards">
            {values.map(({ icon: Icon, tone, title, text }) => (
              <article key={title} className={`soft-card value-card tone-${tone}`}>
                <span className={`icon-circle big ${tone === "mint" ? "green" : "purple"}`}><Icon size={30} /></span>
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
          <h2 id="presentation-title" className="accent-title">A Glimpse into <em>Synthika Home</em></h2>
        </div>
      </section>
      <Marquee />

      <section className="programs-section tone-bg-cream">
        <div className="section-wrap">
          <div className="section-head">
            <div>
              <Eyebrow>Our programs</Eyebrow>
              <h2 className="display">Practical Learning for<br /><Scribble kind="swoosh">Independent Living</Scribble></h2>
            </div>
            <PillLink href="/programs">View all programs</PillLink>
          </div>
          <div className="program-stack">
            {programs.map((program) => <ProgramCard key={program.number} program={program} />)}
          </div>
        </div>
      </section>

      <section className="features-section">
        <svg className="deco-squiggle small" viewBox="0 0 300 200" aria-hidden="true"><path d="M290 10c-60 0-70 20-75 60s-40 80-100 90" /></svg>
        <div className="section-wrap features-grid">
          <div className="features-copy">
            <Eyebrow>What we provide</Eyebrow>
            <h2 className="display">Care in Every<br />Little <Scribble>Detail</Scribble></h2>
            <p className="body-text">At Synthika Trust, every child receives the care, education, and support they need to learn, grow, and develop their abilities in a safe and nurturing environment.</p>
            <PillLink href="/programs">Explore our major Programs</PillLink>
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
              <h2 id="gallery-title" className="display">Our Journey in <Scribble>Pictures</Scribble></h2>
              <p className="body-text">Discover the everyday moments of learning, play, creativity, and growth that make life at Synthika special.</p>
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
              <h2 className="display">Be a Part of our <Scribble>Journey</Scribble></h2>
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
