import { NextResponse } from "next/server";
import { verifyRazorpaySignature } from "@/lib/razorpay";

/**
 * Called right after Razorpay's checkout.js reports success. Confirms the
 * payment is genuine (signature check) before the frontend redirects to
 * the booking-confirmed page. Patient/staff notification of the payment
 * itself is handled natively by Razorpay (Dashboard → Settings →
 * Notifications, or the Razorpay app) rather than a custom alert here —
 * this route's only job is proving the payment is real.
 */
export async function POST(request: Request) {
  let body: {
    razorpay_order_id?: string;
    razorpay_payment_id?: string;
    razorpay_signature?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: "Missing payment details." }, { status: 400 });
  }

  const isValid = verifyRazorpaySignature({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
  });

  if (!isValid) {
    console.error("Razorpay signature verification failed for order", razorpay_order_id);
    return NextResponse.json({ error: "Payment could not be verified." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
