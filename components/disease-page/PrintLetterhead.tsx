import { siteConfig } from "@/lib/site-config";

/**
 * Shown only when printing (hidden on screen) — replaces the real
 * <Header>, which is hidden in print via print:hidden, so the PDF
 * summary still carries the clinic's identity when saved or printed.
 */
export function PrintLetterhead() {
  return (
    <div className="hidden border-b-2 border-navy px-5 pb-3 pt-5 print:block">
      <p className="font-serif text-lg font-bold text-navy">{siteConfig.name}</p>
      <p className="text-xs text-text-mid">
        {siteConfig.url.replace(/^https?:\/\//, "")} · Jaipur, Rajasthan · Since{" "}
        {siteConfig.foundingYear}
      </p>
    </div>
  );
}
