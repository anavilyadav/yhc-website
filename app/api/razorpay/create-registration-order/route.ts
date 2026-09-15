import { NextResponse } from "next/server";
import { getPricingPlanByCode } from "@/lib/data/appointment";
import { createRazorpayOrder, getRazorpayKeyId, isRazorpayConfigured } from "@/lib/razorpay";

const REGISTRATION_FEE_INR = 1000;

/**
 * In-clinic Option B — confirmed directly by Dr Anavil (chat, 2026-09-15):
 * a New Patient can pay just the Rs 1,000 registration + case-taking fee
 * online in advance, then settle the rest of the package (cash or online,
 * whichever suits them) at the clinic after their consultation. Only
 * valid for New Patient plans — Follow-Up plans have no registration
 * component to pay separately.
 */
export async function POST(request: Request) {
  if (!isRazorpayConfigured()) {
    return NextResponse.json(
      { error: "Online payment isn't set up yet. Please WhatsApp us instead." },
      { status: 503 }
    );
  }

  let body: { planCode?: string; patientName?: string; patientPhone?: string };
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

  if (!planCode.startsWith("new_patient")) {
    return NextResponse.json(
      { error: "Registration-only payment is only available for New Patient plans." },
      { status: 400 }
    );
  }

  const plan = await getPricingPlanByCode(planCode);
  if (!plan || plan.isActive === false) {
    return NextResponse.json(
      { error: "This plan isn't available for online payment right now." },
      { status: 400 }
    );
  }

  try {
    const order = await createRazorpayOrder({
      amountInPaise: REGISTRATION_FEE_INR * 100,
      receipt: `${planCode}-registration-${Date.now()}`,
      notes: {
        type: "registration_only",
        plan: plan.title,
        patientName,
        patientPhone,
        note: "Balance to be paid at clinic (cash or online) after consultation.",
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: getRazorpayKeyId(),
      planTitle: plan.title,
    });
  } catch (err) {
    console.error("Razorpay registration order creation failed:", err);
    return NextResponse.json(
      { error: "We couldn't start the payment right now. Please WhatsApp us instead." },
      { status: 502 }
    );
  }
}
