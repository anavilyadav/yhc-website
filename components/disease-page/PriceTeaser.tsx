import Link from "next/link";
import type { PricingPlan } from "@/lib/types";

function formatPrice(price: number | null): string {
  if (price === null) return "";
  return `₹${price.toLocaleString("en-IN")}`;
}

/**
 * Real pricing shown right on the condition page, not just on /appointment
 * — Trust & Sales Playbook: cost should never cost a visitor an extra click.
 * Always the live cheapest active plan, sourced from the same data as the
 * appointment page's own pricing section — never a separate hardcoded figure.
 */
export default function PriceTeaser({ plans }: { plans: PricingPlan[] }) {
  const active = plans.filter((p) => p.isActive !== false && p.priceInr !== null);
  if (active.length === 0) return null;

  const cheapest = active.reduce((min, p) => (p.priceInr! < min.priceInr! ? p : min));

  return (
    <section className="bg-white px-5 py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 rounded-lg border border-border-amber bg-cream-bg px-6 py-5 shadow-sm sm:flex-row">
        <p className="text-center text-sm text-navy sm:text-left">
          <span className="font-bold">Consultations start at {formatPrice(cheapest.priceInr)}</span>{" "}
          — same price online or in-clinic. No hidden costs.
        </p>
        <Link
          href="/appointment#fees"
          className="whitespace-nowrap rounded-sm bg-amber px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 print:hidden"
        >
          See Full Pricing →
        </Link>
      </div>
    </section>
  );
}
