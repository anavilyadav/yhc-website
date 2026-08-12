import crypto from "node:crypto";

/**
 * Server-only Razorpay helpers. Both env vars are optional — the site
 * works fully without them (Appointment page just shows the existing
 * "WhatsApp us" flow instead of a pay button). Nothing here is called
 * unless isRazorpayConfigured() is true, matching the Supabase/GA4
 * pattern used everywhere else in this codebase.
 *
 * NEXT_PUBLIC_RAZORPAY_KEY_ID is safe to expose client-side — Razorpay's
 * own checkout.js needs it in the browser. RAZORPAY_KEY_SECRET must never
 * be prefixed NEXT_PUBLIC_ and is only read here, server-side.
 */
const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_KEY_SECRET;

export function isRazorpayConfigured(): boolean {
  return Boolean(keyId && keySecret);
}

export function getRazorpayKeyId(): string | null {
  return keyId ?? null;
}

interface CreateOrderParams {
  amountInPaise: number;
  receipt: string;
  notes?: Record<string, string>;
}

interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

/**
 * Creates a Razorpay order via their REST API (Orders API — supports a
 * dynamic amount decided at request time, unlike Razorpay's static
 * "Payment Buttons" which lock in a fixed amount until manually edited).
 * This is what lets Dr Anavil change a price in Supabase and have
 * checkout reflect it immediately, with no code change.
 */
export async function createRazorpayOrder({
  amountInPaise,
  receipt,
  notes,
}: CreateOrderParams): Promise<RazorpayOrder> {
  if (!keyId || !keySecret) {
    throw new Error("Razorpay is not configured.");
  }

  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: amountInPaise,
      currency: "INR",
      receipt,
      notes,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Razorpay order creation failed: ${res.status} ${body}`);
  }

  return res.json();
}

/**
 * Verifies the HMAC SHA256 signature Razorpay returns after a successful
 * checkout. This MUST pass before treating a payment as real — Razorpay's
 * checkout.js success callback fires client-side and is not by itself
 * proof of payment (a tampered client could fake the callback).
 */
export function verifyRazorpaySignature({
  orderId,
  paymentId,
  signature,
}: {
  orderId: string;
  paymentId: string;
  signature: string;
}): boolean {
  if (!keySecret) return false;

  const expected = crypto
    .createHmac("sha256", keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  // Constant-time comparison — avoids leaking signature bytes via timing.
  const expectedBuf = Buffer.from(expected);
  const actualBuf = Buffer.from(signature);
  if (expectedBuf.length !== actualBuf.length) return false;
  return crypto.timingSafeEqual(expectedBuf, actualBuf);
}
