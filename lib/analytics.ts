// GA4 wiring — GIOS_P5_Patient_Conversion_OS.docx Part 8 "Event Tracking".
// Real measurement ID from Dr Anavil's GA4 property (chat, 2026-09-22),
// closing the Techeve audit's "no analytics detected" finding. Hardcoded
// fallback matches the pattern used for other real IDs in site-config.ts
// (googleBusinessProfile, facebook, instagram) rather than requiring a
// Vercel env var to be set separately.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-RYH490HSXE";

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
