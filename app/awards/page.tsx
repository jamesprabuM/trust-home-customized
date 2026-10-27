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
      <InnerHero cover={sitePhotos.covers.awards} coverAlt="Children smiling at Synthika Trust" eyebrow="Awards and recognition" title={<>Recognised for our <Scribble>service</Scribble></>} text="Our work with differently abled children and the community has been recognised by the district administration and the Government of India." />
      <section className="content-panel section-wrap">
        <div className="award-feature soft-card tone-peach">
          <div className="award-feature-media">
            <img className="award-trophy" src={awards.trophy} alt="The Best Organization Award trophy presented to Synthika Trust" />
            <img className="award-cert" src={awards.bestOrg} alt="Certificate for the Best Organization Award, World Disability Day, 3 December 2023" />
          </div>
          <div>
            <Eyebrow>3 December 2023</Eyebrow>
            <h2>Best Organization Award</h2>
            <p>Presented by the District Collector on World Disability Day, recognising Synthika Trust’s service to differently abled children.</p>
          </div>
        </div>

        <div className="award-grid">
          <figure className="award-card soft-card tone-mint">
            <img src={awards.ceremony} alt="Synthika Trust representatives receiving the award on stage" loading="lazy" />
            <figcaption><h3>The award ceremony</h3><p>Receiving the Best Organization Award at the World Disability Day celebration.</p></figcaption>
          </figure>
          <figure className="award-card soft-card tone-lavender">
            <img className="contain" src={awards.nikshay} alt="Ni-Kshay Mitra certificate from the Ministry of Health and Family Welfare" loading="lazy" />
            <figcaption><h3>Ni-Kshay Mitra</h3><p>Registered with the Ministry of Health and Family Welfare as a Ni-Kshay Mitra under the Pradhan Mantri TB Mukt Bharat Abhiyaan, supporting people undergoing TB treatment.</p></figcaption>
          </figure>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
