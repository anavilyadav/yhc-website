import { whatsappLinks } from "@/lib/whatsapp";

/**
 * A zero-pressure first step for visitors who aren't ready to pay yet —
 * Trust & Sales Playbook ch.9/10 (Stage 3: "the last hesitation before
 * tapping Book"). Sits next to the paid booking options rather than
 * replacing them, so someone 90% convinced has a soft landing instead of
 * an all-or-nothing choice.
 */
export function FreeHealthCheck() {
  return (
    <div className="mx-auto max-w-3xl rounded-sm border-2 border-dashed border-border-amber bg-cream-bg px-6 py-6 text-center">
      <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">
        Not Sure Yet?
      </p>
      <h3 className="mt-1 font-serif text-lg text-navy md:text-xl">
        Get a Free 5-Minute WhatsApp Health Check
      </h3>
      <p className="mx-auto mt-2 max-w-xl text-[14.5px] leading-relaxed text-text-mid">
        No payment, no pressure — just tell us your condition on WhatsApp and
        we&apos;ll honestly tell you whether homeopathy is a good fit before
        you decide anything.
      </p>
      <a
        href={whatsappLinks.freeHealthCheck}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-sm border-2 border-navy px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream"
      >
        💬 Ask Us Free on WhatsApp
      </a>
    </div>
  );
}
