import { NextResponse } from "next/server";
import { getPricingPlanByCode } from "@/lib/data/appointment";
import { createRazorpayOrder, getRazorpayKeyId, isRazorpayConfigured } from "@/lib/razorpay";
import { getCourierFeeForPlanCode } from "@/lib/courier";

export async function POST(request: Request) {
  if (!isRazorpayConfigured()) {
    return NextResponse.json(
      { error: "Online payment isn't set up yet. Please WhatsApp us instead." },
      { status: 503 }
    );
  }

  let body: {
    planCode?: string;
    patientName?: string;
    patientPhone?: string;
    includeCourier?: boolean;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const planCode = body.planCode?.trim();
  const patientName = body.patientName?.trim();
  const patientPhone = body.patientPhone?.trim();

  if (!planCode || !patientName || !patientPhone) {
    return NextResponse.json(
      { error: "Plan, name and phone are required." },
      { status: 400 }
    );
  }

  // The amount is always read from the live plan record — never from
  // anything the client sends — so a tampered request can't pay less
  // than the real, current price Dr Anavil has set.
  const plan = await getPricingPlanByCode(planCode);
  if (!plan || plan.priceInr === null || plan.isActive === false) {
    return NextResponse.json(
      { error: "This plan isn't available for online payment right now." },
      { status: 400 }
    );
  }

  // Courier fee is looked up server-side from the plan's own duration,
  // same as the plan price — the client only sends whether it wants
  // courier included, never the amount itself.
  const courierFee = body.includeCourier ? getCourierFeeForPlanCode(planCode) : null;
  const totalInr = plan.priceInr + (courierFee ?? 0);

  try {
    const order = await createRazorpayOrder({
      amountInPaise: totalInr * 100,
      receipt: `${planCode}-${Date.now()}`,
      notes: {
        plan: plan.title,
        patientName,
        patientPhone,
        courierFee: courierFee ? `₹${courierFee}` : "none",
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: getRazorpayKeyId(),
      planTitle: plan.title,
      courierFee,
    });
  } catch (err) {
    console.error("Razorpay order creation failed:", err);
    return NextResponse.json(
      { error: "We couldn't start the payment right now. Please WhatsApp us instead." },
      { status: 502 }
    );
  }
}
