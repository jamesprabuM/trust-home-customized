import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, Scribble } from "@/components/ui";

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Privacy" title={<>Privacy and <Scribble>safeguarding</Scribble></>} text="This is a draft, not legal advice. Publish a policy that accurately reflects actual data collection, vendors, retention practices, and applicable law." />
      <section className="section-wrap content-panel prose">
        <h2>Before publishing</h2>
        <p>Explain what information is collected through contact, volunteer, and donation forms; why it is collected; who can access it; how long it is retained; and how people can make privacy requests where applicable.</p>
        <p>Children’s information and photographs require heightened care. Establish a safeguarding policy, obtain appropriate consent and permissions, avoid unnecessary sensitive information, and provide a way to raise privacy concerns.</p>
        <p>Identify Synthika Trust’s legal name and privacy contact. Have the final policy reviewed for applicable Indian law and any rules relevant to donations.</p>
        <p><Link href="/contact">Contact the trust →</Link></p>
      </section>
      <SiteFooter />
    </main>
  );
}
