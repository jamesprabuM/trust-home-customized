import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Eyebrow, InnerHero, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";

export const metadata: Metadata = { title: "Awards and recognition | Synthika Trust" };

const { awards } = sitePhotos;

export default function AwardsPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero cover={sitePhotos.covers.awards} coverAlt="Children smiling at Synthika Trust" coverFull coverPosition="50% 50%" coverPositionMobile="74% 50%" eyebrow="Awards and recognition" title={<>Recognised for our <Scribble>service</Scribble></>} text="Our recognitions reflect our dedication to caring for children with disabilities and creating a positive impact in the community." />
      <section className="content-panel section-wrap">
        <div className="award-feature soft-card tone-peach">
          <div className="award-feature-media">
            <img className="award-trophy" src={awards.trophy} alt="The Best Serving Organisation Award trophy presented to Synthika Trust" />
            <img className="award-cert" src={awards.bestOrg} alt="Certificate for the Best Serving Organisation Award, 3 December 2023" />
          </div>
          <div>
            <Eyebrow>3 December 2023</Eyebrow>
            <h2>Best Serving Organisation Award – 2023</h2>
            <p>On December 3, 2023, International Day of Persons with Disabilities, Synthika Trust was honoured by the District Collector with the “Best Serving Organisation for Differently Abled Children” award. This recognition celebrates our commitment to the care, education, rehabilitation, and development of children with disabilities.</p>
          </div>
        </div>

        <div className="award-grid">
          <figure className="award-card soft-card tone-mint">
            <img src={awards.ceremony} alt="Synthika Trust representatives receiving the award on stage" loading="lazy" />
            <figcaption><h3>The award ceremony</h3><p>Receiving the Best Serving Organisation Award on the International Day of Persons with Disabilities.</p></figcaption>
          </figure>
          <figure className="award-card soft-card tone-lavender">
            <img className="contain" src={awards.nikshay} alt="Ni-Kshay Mitra certificate from the Ministry of Health and Family Welfare" loading="lazy" />
            <figcaption><h3>Recognition as a Ni-Kshay Mitra</h3><p>Synthika Trust has also been recognised by the Ministry of Health and Family Welfare as a Ni-Kshay Mitra under the Pradhan Mantri TB Mukt Bharat Abhiyaan. Through this initiative, we support tuberculosis patients by providing nutritional kits, contributing to their nutritional well-being and supporting the country’s efforts to eliminate tuberculosis.</p></figcaption>
          </figure>
        </div>
        <p className="award-closing">These recognitions inspire us to continue serving children with disabilities and vulnerable communities with compassion, dedication, and a commitment to making a meaningful difference.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
