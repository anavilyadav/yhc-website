"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PricingPlan } from "@/lib/types";
import styles from "@/app/appointment/appointment.module.css";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

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
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planCode: plan.code, patientName: name, patientPhone: phone }),
      });
      const order = await orderRes.json();

      if (!orderRes.ok) {
        throw new Error(order?.error ?? "Something went wrong.");
      }

      const razorpay = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "Yadav Homeo Clinic",
        description: order.planTitle,
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
            router.push(`/booking-confirmed?plan=${encodeURIComponent(plan.title)}`);
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
      <button type="button" className={styles.cardCta} onClick={() => setStep("form")}>
        Pay ₹{plan.priceInr?.toLocaleString("en-IN")} Online →
      </button>
    );
  }

  return (
    <div>
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
      {error && <p className={styles.payError}>{error}</p>}
      <button
        type="button"
        className={styles.cardCta}
        onClick={handlePay}
        disabled={step === "processing"}
      >
        {step === "processing" ? "Opening payment window…" : "Proceed to Pay →"}
      </button>
    </div>
  );
}
