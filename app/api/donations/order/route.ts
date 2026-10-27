import { NextResponse } from "next/server";
import { priceSelection } from "@/lib/donations";
import { createOrder, razorpayKeys } from "@/lib/razorpay";

type DonorInput = { name?: unknown; email?: unknown; phone?: unknown; pan?: unknown };

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  const keys = razorpayKeys();
  if (!keys) return NextResponse.json({ error: "Online donations are not set up yet. Please use bank transfer or contact the trust." }, { status: 503 });

  const body = await request.json().catch(() => null);
  const priced = priceSelection(body?.items);
  if (!priced) return NextResponse.json({ error: "Please choose at least one project." }, { status: 400 });

  const donor: DonorInput = body?.donor ?? {};
  const name = clean(donor.name, 80);
  const email = clean(donor.email, 120);
  const phone = clean(donor.phone, 15).replace(/\D/g, "");
  const pan = clean(donor.pan, 10).toUpperCase();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !/^\d{10}$/.test(phone.slice(-10))) {
    return NextResponse.json({ error: "Please enter your name, a valid email, and a 10-digit mobile number." }, { status: 400 });
  }
  if (pan && !/^[A-Z]{5}\d{4}[A-Z]$/.test(pan)) return NextResponse.json({ error: "That PAN doesn’t look right. Check it, or leave it blank." }, { status: 400 });

  const summary = priced.lines.map((line) => `${line.project.id}x${line.units}`).join(",");
  try {
    const order = await createOrder(priced.total * 100, `don_${Date.now()}`, {
      donor_name: name,
      donor_email: email,
      donor_phone: phone,
      donor_pan: pan || "not provided",
      projects: summary.slice(0, 250),
    });
    return NextResponse.json({ orderId: order.id, amount: order.amount, keyId: keys.keyId, name, email, phone });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "We couldn’t start the payment. Please try again in a moment." }, { status: 502 });
  }
}
