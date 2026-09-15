"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PricingPlan } from "@/lib/types";
import { getCourierFeeForPlanCode } from "@/lib/courier";
import styles from "@/app/appointment/appointment.module.css";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const REGISTRATION_FEE_INR = 1000;

type PaymentMode = "full" | "registration";

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function RazorpayCheckoutButton({ plan }: { plan: PricingPlan }) {
  const router = useRouter();
  const [step, setStep] = useState<"idle" | "form" | "processing">("idle");
  const [mode, setMode] = useState<PaymentMode>("full");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [includeCourier, setIncludeCourier] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Consultation fee is identical online or in-clinic — courier is a
  // separate, real shipping cost that only applies when medicine is
  // actually posted, so it's offered here as an optional add-on rather
  // than baked into the plan price itself.
  const courierFee = getCourierFeeForPlanCode(plan.code);
  const totalInr = (plan.priceInr ?? 0) + (includeCourier ? courierFee ?? 0 : 0);

  // In-clinic Option B — New Patient only (Follow-Up plans have no
  // registration component to pay separately from the rest of the fee).
  const canPayRegistrationOnly = plan.code.startsWith("new_patient");

  function openForm(nextMode: PaymentMode) {
    setMode(nextMode);
    setError(null);
    setStep("form");
  }

  async function handlePay() {
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    setError(null);
    setStep("processing");

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      setError("Couldn't load the payment window. Please WhatsApp us instead.");
      setStep("form");
      return;
    }

    try {
      const endpoint =
        mode === "registration"
          ? "/api/razorpay/create-registration-order"
          : "/api/razorpay/create-order";
      const orderRes = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planCode: plan.code,
          patientName: name,
          patientPhone: phone,
          ...(mode === "full" ? { includeCourier } : {}),
        }),
      });
      const order = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(order?.error ?? "Something went wrong.");
      }

      const description =
        mode === "registration" ? `${order.planTitle} — Registration Only` : order.planTitle;

      const razorpay = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "Yadav Homeo Clinic",
        description,
        prefill: { name, contact: phone },
        theme: { color: "#1a2a41" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          if (verifyRes.ok) {
            router.push(`/booking-confirmed?plan=${encodeURIComponent(description)}`);
          } else {
            setError("Payment succeeded but couldn't be verified. Please WhatsApp us your payment ID.");
            setStep("form");
          }
        },
        modal: {
          ondismiss: () => setStep("form"),
        },
      });
      razorpay.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please WhatsApp us instead.");
      setStep("form");
    }
  }

  if (step === "idle") {
    return (
      <div>
        <button type="button" className={styles.cardCta} onClick={() => openForm("full")}>
          Pay ₹{plan.priceInr?.toLocaleString("en-IN")} Online →
        </button>
        {canPayRegistrationOnly && (
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => openForm("registration")}
          >
            Or pay ₹{REGISTRATION_FEE_INR.toLocaleString("en-IN")} registration only — rest at
            the clinic →
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      {mode === "registration" && (
        <p className={styles.courierCheckbox}>
          Pay ₹{REGISTRATION_FEE_INR.toLocaleString("en-IN")} now to register — the rest of your
          package fee is settled at the clinic after your consultation, by cash or online,
          whichever suits you.
        </p>
      )}
      <input
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.payInput}
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={styles.payInput}
      />
      {mode === "full" && courierFee !== null && (
        <label className={styles.courierCheckbox}>
          <input
            type="checkbox"
            checked={includeCourier}
            onChange={(e) => setIncludeCourier(e.target.checked)}
          />
          Consulting online? Ship my medicine to me (+₹{courierFee.toLocaleString("en-IN")}
          courier — skip this if you&apos;ll collect in-clinic, or if you&apos;re in Jaipur and
          want to arrange your own fast local delivery)
        </label>
      )}
      {error && <p className={styles.payError}>{error}</p>}
      <button
        type="button"
        className={styles.cardCta}
        onClick={handlePay}
        disabled={step === "processing"}
      >
        {step === "processing"
          ? "Opening payment window…"
          : mode === "registration"
            ? `Proceed to Pay ₹${REGISTRATION_FEE_INR.toLocaleString("en-IN")} →`
            : `Proceed to Pay ₹${totalInr.toLocaleString("en-IN")} →`}
      </button>
      {canPayRegistrationOnly && step === "form" && (
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => openForm(mode === "full" ? "registration" : "full")}
        >
          {mode === "full"
            ? `Or pay ₹${REGISTRATION_FEE_INR.toLocaleString("en-IN")} registration only instead →`
            : "Or pay the full amount instead →"}
        </button>
      )}
    </div>
  );
}
