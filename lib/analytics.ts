// GA4 wiring — GIOS_P5_Patient_Conversion_OS.docx Part 8 "Event Tracking".
// Entirely inert until NEXT_PUBLIC_GA_MEASUREMENT_ID is set (Vercel env
// vars), matching the Supabase/schema pattern used elsewhere on this site:
// omit real tracking rather than ship a fake/placeholder measurement ID.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 event if gtag is loaded (i.e. GA_MEASUREMENT_ID is set).
 * Safe to call unconditionally from any client component — no-ops otherwise.
 */
export function trackEvent(name: string, params?: Record<string, string>): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
