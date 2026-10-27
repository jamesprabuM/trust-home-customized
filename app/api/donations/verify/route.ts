import { NextResponse } from "next/server";
import { isValidSignature } from "@/lib/razorpay";

/** Razorpay posts the checkout result here (redirect mode), then we send the donor to the right page. */
export async function POST(request: Request) {
  const form = await request.formData();
  const paymentId = String(form.get("razorpay_payment_id") ?? "");
  const orderId = String(form.get("razorpay_order_id") ?? "");
  const signature = String(form.get("razorpay_signature") ?? "");
  // Behind a proxy request.url can carry an internal host, so prefer the configured public URL.
  const origin = process.env.SITE_URL?.replace(/\/$/, "") || new URL(request.url).origin;

  if (paymentId && orderId && signature && isValidSignature(orderId, paymentId, signature)) {
    return NextResponse.redirect(`${origin}/donate/thank-you?payment=${encodeURIComponent(paymentId)}`, 303);
  }

  const reason = String(form.get("error[description]") ?? "");
  return NextResponse.redirect(`${origin}/donate/failed${reason ? `?reason=${encodeURIComponent(reason.slice(0, 160))}` : ""}`, 303);
}
