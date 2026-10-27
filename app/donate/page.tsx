import type { Metadata } from "next";
import Link from "next/link";
import DonationForm from "@/components/donation-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { InnerHero, Scribble } from "@/components/ui";
import { sitePhotos } from "@/lib/site-photos";
import { isRazorpayConfigured } from "@/lib/razorpay";

// Read the keys on every request so adding them to .env.local only needs a restart, not a rebuild.
export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Donate | Synthika Trust", description: "Choose a project and donate securely to Synthika Trust through Razorpay." };

export default function DonatePage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Donate" title={<>Choose how you want to <Scribble>help</Scribble></>} text="Pick one or more projects, choose how many children or units to support, and pay securely through Razorpay." cover={sitePhotos.covers.donate} coverAlt="Children showing their painted hands" />
      <section className="content-panel section-wrap">
        <DonationForm paymentsEnabled={isRazorpayConfigured()} />
        <p className="content-note">Prefer a bank transfer? See <Link href="/get-involved">bank details</Link> or <Link href="/contact">contact the trust</Link>.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
