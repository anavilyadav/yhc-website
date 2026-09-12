"use client";

import Link from "next/link";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon, PhoneIcon } from "@/components/shared/icons";

export default function DiseasePageFinalCTA({
  finalCta,
  conditionName,
}: {
  finalCta: string;
  conditionName: string;
}) {
  return (
    <section className="border-t-2 border-amber bg-amber-tint px-5 py-14 md:py-16 print:hidden">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-xl leading-snug text-navy md:text-3xl">{finalCta}</h2>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={whatsappLink(`Hello, I would like to book a consultation for ${conditionName}.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { entry_point: "disease_final_cta", condition: conditionName })}
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us Now
          </a>
          <a
            href={telLink()}
            onClick={() => trackEvent("phone_click", { click_source: "disease_final_cta" })}
            className="flex w-full items-center justify-center gap-2 rounded-sm border-2 border-navy px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream sm:w-auto"
          >
            <PhoneIcon className="h-4 w-4" /> Call {siteConfig.phone.display}
          </a>
        </div>

        <p className="mt-5 text-sm text-text-mid">
          Already decided?{" "}
          <Link
            href="/appointment"
            onClick={() => trackEvent("book_click", { entry_point: "disease_final_cta", condition: conditionName })}
            className="font-semibold text-amber-dark underline underline-offset-2"
          >
            Book &amp; pay online →
          </Link>
        </p>
      </div>
    </section>
  );
}
