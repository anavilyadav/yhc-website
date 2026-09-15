/**
 * Domestic courier/shipping charge for online-consultation patients whose
 * medicine is posted to them — confirmed directly by Dr Anavil (chat,
 * 2026-09-15). Consultation fees stay identical online vs in-clinic (that
 * promise is unchanged); this is a separate, real logistics cost that only
 * applies when medicine is actually shipped, scaled by how many months'
 * worth of medicine is in the parcel (heavier parcel, more months, higher
 * courier cost) — roughly Rs 100/month with a Rs 200 minimum.
 *
 * In-clinic patients collect medicine in person (no charge). Jaipur-local
 * online patients who'd rather arrange their own fast local delivery
 * (Uber/Porter/Swiggy Genie etc.) can do that themselves and skip this
 * charge entirely — it only applies when the clinic itself posts the
 * parcel.
 */

const FIXED_COURIER_TIERS_INR = [200, 300, 600, 900, 1200] as const;

export type CourierTierInr = (typeof FIXED_COURIER_TIERS_INR)[number];

export function isValidCourierTier(amountInr: number): amountInr is CourierTierInr {
  return (FIXED_COURIER_TIERS_INR as readonly number[]).includes(amountInr);
}

/**
 * Reads the month count out of a pricing plan code (e.g. "new_patient_12m"
 * -> 12) and returns the matching courier charge. Returns null for a code
 * that doesn't carry a month count (nothing to ship for that plan).
 */
export function getCourierFeeForPlanCode(code: string): number | null {
  const match = code.match(/_(\d+)m$/);
  if (!match) return null;
  const months = parseInt(match[1], 10);
  return Math.max(200, months * 100);
}
