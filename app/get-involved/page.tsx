import { Landmark } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, PillLink, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";

export default function GetInvolvedPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Support Synthika Trust" title={<>Help create equal <Scribble>opportunities</Scribble></>} text="Your support can help provide care, education, therapy, nutrition, shelter, and skill development for differently abled children." cover={sitePhotos.covers.donate} coverAlt="Children showing their painted hands">
        <PillLink href="/donate">Donate online</PillLink>
      </InnerHero>
      <section className="content-panel section-wrap">
        <div className="card-grid get-involved-grid">
          <article className="soft-card tone-mint">
            <span className="icon-circle big green"><Landmark size={30} /></span>
            <div>
              <h3>Donate by bank transfer</h3>
              <p>For verified donation instructions, please contact Synthika Trust directly. The bank details supplied for foreign donations are listed below for confirmation before any transfer.</p>
            </div>
            <ul className="bank-list">
              <li><strong>Account:</strong> SYNTHIKA TRUST</li>
              <li><strong>Bank:</strong> State Bank of India</li>
              <li><strong>Account number:</strong> 40109028493</li>
              <li><strong>Branch code:</strong> 00691</li>
              <li><strong>IFSC:</strong> SBIN0000691</li>
              <li><strong>SWIFT:</strong> SBININBB104</li>
              <li><strong>Branch:</strong> New Delhi Main Branch</li>
            </ul>
          </article>
        </div>
        <p className="content-note">The supplied document states that the trust is permitted under FCRA and references 80G exemption. Confirm current certificates and details directly with the trust.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
