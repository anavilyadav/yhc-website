"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CourierTierInr } from "@/lib/courier";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const TIERS: { months: string; amountInr: CourierTierInr }[] = [
  { months: "1 month", amountInr: 200 },
  { months: "3 months", amountInr: 300 },
  { months: "6 months", amountInr: 600 },
  { months: "9 months", amountInr: 900 },
  { months: "12 months", amountInr: 1200 },
];

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

export function CourierPaymentForm() {
  const router = useRouter();
  const [selected, setSelected] = useState<CourierTierInr | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePay() {
    if (!selected) {
      setError("Please choose how many months' medicine is in this parcel.");
      return;
    }
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    setError(null);
    setProcessing(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      setError("Couldn't load the payment window. Please WhatsApp us instead.");
      setProcessing(false);
      return;
    }

    try {
      const orderRes = await fetch("/api/razorpay/create-courier-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountInr: selected, patientName: name, patientPhone: phone }),
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
        description: `Medicine courier — ${selected}`,
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
            router.push(`/booking-confirmed?plan=${encodeURIComponent("Medicine Courier")}`);
          } else {
            setError("Payment succeeded but couldn't be verified. Please WhatsApp us your payment ID.");
            setProcessing(false);
          }
        },
        modal: {
          ondismiss: () => setProcessing(false),
        },
      });
      razorpay.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please WhatsApp us instead.");
      setProcessing(false);
    }
  }

  return (
    <div className="rounded-xl border border-border-amber bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-navy">How much medicine is in this parcel?</p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {TIERS.map((tier) => (
          <button
            key={tier.amountInr}
            type="button"
            onClick={() => setSelected(tier.amountInr)}
            className={`rounded-sm border px-3 py-2.5 text-sm font-semibold transition-colors ${
              selected === tier.amountInr
                ? "border-amber bg-amber text-navy"
                : "border-navy/20 text-navy hover:border-amber"
            }`}
          >
            {tier.months}
            <br />
            <span className="text-xs font-normal">₹{tier.amountInr.toLocaleString("en-IN")}</span>
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
        />
      </div>

      {error && <p className="mt-2 text-[13px] text-red-700">{error}</p>}

      <button
        type="button"
        onClick={handlePay}
        disabled={processing}
        className="mt-4 w-full rounded-sm bg-amber px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {processing
          ? "Opening payment window…"
          : selected
            ? `Pay ₹${selected.toLocaleString("en-IN")} Online →`
            : "Pay Online →"}
      </button>
    </div>
  );
}
