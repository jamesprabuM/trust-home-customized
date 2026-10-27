import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Eyebrow, PillLink } from "@/components/ui";

export const metadata: Metadata = { title: "Payment not completed | Synthika Trust", robots: { index: false } };

export default async function FailedPage({ searchParams }: { searchParams: Promise<{ reason?: string }> }) {
  const { reason } = await searchParams;
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <div className="section-wrap result-wrap">
          <div className="result-card soft-card tone-peach">
            <Eyebrow>Payment not completed</Eyebrow>
            <h1>Your donation didn’t go through</h1>
            <p>{reason ? `Razorpay said: “${reason}”` : "The payment was cancelled or couldn’t be completed."} If any amount was debited, it is refunded automatically to your account.</p>
            <p>You can try again with another payment method, or <Link href="/get-involved">donate by bank transfer</Link>.</p>
            <PillLink href="/donate">Try again</PillLink>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
