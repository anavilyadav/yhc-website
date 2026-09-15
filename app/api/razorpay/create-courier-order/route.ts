import { NextResponse } from "next/server";
import { createRazorpayOrder, getRazorpayKeyId, isRazorpayConfigured } from "@/lib/razorpay";
import { isValidCourierTier } from "@/lib/courier";

/**
 * Standalone courier-only payment — for an online patient who already
 * booked/paid for consultation earlier and is now, on some later month,
 * requesting that month's (or a multi-month) medicine parcel be posted.
 * Separate from create-order (which is always tied to a consultation
 * plan) since a courier request isn't a consultation purchase.
 */
export async function POST(request: Request) {
  if (!isRazorpayConfigured()) {
    return NextResponse.json(
      { error: "Online payment isn't set up yet. Please WhatsApp us instead." },
      { status: 503 }
    );
  }

  let body: { amountInr?: number; patientName?: string; patientPhone?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const amountInr = body.amountInr;
  const patientName = body.patientName?.trim();
  const patientPhone = body.patientPhone?.trim();

  if (!amountInr || !patientName || !patientPhone) {
    return NextResponse.json(
      { error: "Parcel size, name and phone are required." },
      { status: 400 }
    );
  }

  // Only the fixed, published tiers are ever accepted — a tampered
  // request can't submit an arbitrary amount.
  if (!isValidCourierTier(amountInr)) {
    return NextResponse.json({ error: "Not a valid courier charge." }, { status: 400 });
  }

  try {
    const order = await createRazorpayOrder({
      amountInPaise: amountInr * 100,
      receipt: `courier-${Date.now()}`,
      notes: {
        type: "courier",
        patientName,
        patientPhone,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: getRazorpayKeyId(),
    });
  } catch (err) {
    console.error("Razorpay courier order creation failed:", err);
    return NextResponse.json(
      { error: "We couldn't start the payment right now. Please WhatsApp us instead." },
      { status: 502 }
    );
  }
}
