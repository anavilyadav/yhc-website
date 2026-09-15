/**
 * International (outside-India) consultation pricing — confirmed
 * directly by Dr Anavil (chat, 2026-09-15). Deliberately a small, static
 * list rather than a Supabase table (unlike domestic pricing_plans):
 * there are only 5 fixed rates, they're not expected to change often,
 * and there's no admin-panel need yet.
 *
 * Consultation itself is identical in depth to an in-clinic visit —
 * only the currency/amount and shipping logistics differ for patients
 * outside India. No PayPal/Wise checkout is wired up yet (that needs
 * Dr Anavil's own business account, same as Razorpay did), so every
 * plan here books via WhatsApp for now.
 */
export interface InternationalPlan {
  id: string;
  title: string;
  priceUsd: number;
  originalPriceUsd?: number;
  badge?: string;
  description: string;
  inclusions: string[];
}

export const INTERNATIONAL_PLANS: InternationalPlan[] = [
  {
    id: "intl-initial",
    title: "First-Time Consultation",
    priceUsd: 400,
    description: "For new patients starting treatment — one month to begin with.",
    inclusions: [
      "Registration + full case-taking (video call)",
      "Personalised prescription",
      "1 month of guidance included",
    ],
  },
  {
    id: "intl-monthly-followup",
    title: "Monthly Follow-Up",
    priceUsd: 79,
    description: "For patients continuing month to month after their first consultation.",
    inclusions: ["Progress review", "Prescription adjustment as needed"],
  },
  {
    id: "intl-annual-new",
    title: "Complete Annual Care — New Patient",
    priceUsd: 850,
    originalPriceUsd: 1269,
    badge: "Best Value for Chronic Cases",
    description: "For chronic, long-standing conditions that benefit from a full year of continuity.",
    inclusions: [
      "Registration + full case-taking (video call)",
      "Personalised prescription",
      "Up to 11 follow-ups across 12 months",
    ],
  },
  {
    id: "intl-annual-existing",
    title: "Annual Follow-Up Care — Existing Patient",
    priceUsd: 600,
    originalPriceUsd: 948,
    description: "For existing patients who've already completed their first consultation.",
    inclusions: ["Up to 12 follow-ups across 12 months"],
  },
  {
    id: "intl-long-followup",
    title: "Detailed Follow-Up (Returning After a Gap)",
    priceUsd: 180,
    description:
      "If it's been 12 months or more since your last visit, this covers a fresh, detailed review — often close to a re-case, since a lot can change in a year.",
    inclusions: ["Full case review", "Updated prescription"],
  },
];

/** Rounded percentage saved vs. paying month-to-month, for plans that carry a reference price. */
export function percentSaved(plan: InternationalPlan): number | null {
  if (!plan.originalPriceUsd || plan.originalPriceUsd <= plan.priceUsd) return null;
  return Math.round(((plan.originalPriceUsd - plan.priceUsd) / plan.originalPriceUsd) * 100);
}
