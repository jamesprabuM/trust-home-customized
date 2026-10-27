// Server-only: reads the secret key. Import from route handlers and server components only.
import { createHmac, timingSafeEqual } from "node:crypto";

const API = "https://api.razorpay.com/v1";

/** Returns the keys from .env.local, or null while they are blank or still the example placeholders. */
export function razorpayKeys() {
  const keyId = process.env.RAZORPAY_KEY_ID?.trim() ?? "";
  const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim() ?? "";
  const isPlaceholder = (value: string) => !value || /x{6,}/i.test(value);
  if (!/^rzp_(test|live)_/.test(keyId) || isPlaceholder(keyId) || isPlaceholder(keySecret)) return null;
  return { keyId, keySecret };
}

export const isRazorpayConfigured = () => razorpayKeys() !== null;

async function razorpayFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const keys = razorpayKeys();
  if (!keys) throw new Error("Razorpay keys are not configured");
  const response = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Basic ${Buffer.from(`${keys.keyId}:${keys.keySecret}`).toString("base64")}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Razorpay ${path} failed with ${response.status}: ${await response.text()}`);
  return response.json() as Promise<T>;
}

export type RazorpayOrder = { id: string; amount: number; currency: string; status: string; notes: Record<string, string> };
export type RazorpayPayment = { id: string; order_id: string; amount: number; currency: string; status: string; method: string; email: string; contact: string; created_at: number };

export const createOrder = (amountInPaise: number, receipt: string, notes: Record<string, string>) =>
  razorpayFetch<RazorpayOrder>("/orders", { method: "POST", body: JSON.stringify({ amount: amountInPaise, currency: "INR", receipt, notes }) });

export const fetchOrder = (orderId: string) => razorpayFetch<RazorpayOrder>(`/orders/${encodeURIComponent(orderId)}`);

export const fetchPayment = (paymentId: string) => razorpayFetch<RazorpayPayment>(`/payments/${encodeURIComponent(paymentId)}`);

/** Checks the signature Razorpay sends back after checkout: HMAC-SHA256 of "order_id|payment_id". */
export function isValidSignature(orderId: string, paymentId: string, signature: string) {
  const keys = razorpayKeys();
  if (!keys) return false;
  const expected = createHmac("sha256", keys.keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}
