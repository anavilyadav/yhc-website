import type { Metadata } from "next";
import { UNIVERSAL_TIPS, DIET_MISCONCEPTIONS } from "@/lib/content/diet-lifestyle-content";
import { ConditionTabs } from "@/components/diet-lifestyle/ConditionTabs";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon, InfoIcon } from "@/components/shared/icons";

const pageUrl = `${siteConfig.url}/diet-lifestyle-guide`;

export const metadata: Metadata = {
  title: { absolute: `Diet & Lifestyle Guide for Homeopathy Patients | ${siteConfig.name}` },
  description:
    "General diet and lifestyle guidance to support your homeopathic treatment — hydration, meal timing, sleep, movement and condition-specific tips from Yadav Homeo Clinic.",
  alternates: { canonical: pageUrl },
};

export default function DietLifestyleGuidePage() {
  return (
    <>
      <section className="bg-cream-bg px-5 py-14 md:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">
            Patient Guidance
          </p>
          <h1 className="mt-3 font-serif text-2xl text-navy md:text-4xl">Diet & Lifestyle Guide</h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-text-mid">
            Homeopathic treatment works from within — but diet and lifestyle choices either
            support or slow down that process. This guidance is general, not a substitute for
            what we tell you personally at your consultation.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">
            Universal Lifestyle Tips
          </h2>
          <p className="mt-2 text-[14px] text-text-mid">
            Applicable to all patients during homeopathic treatment, regardless of condition.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {UNIVERSAL_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-border-amber bg-cream-bg p-5">
                <h3 className="font-serif text-base font-bold text-navy">{tip.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {tip.points.map((point) => (
                    <li key={point} className="flex gap-2 text-[13px] leading-relaxed text-text-mid">
                      <span aria-hidden className="mt-1 text-amber-dark">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">Condition-Specific Guidance</h2>
          <p className="mt-2 text-[14px] text-text-mid">
            Pick your condition for more specific tips. Your actual, personalised advice comes
            from your consultation.
          </p>
          <div className="mt-6">
            <ConditionTabs />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">
            What Does NOT Interfere With Homeopathy
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-text-mid">
            Modern classical homeopathy does not require the blanket restrictions some patients
            expect. Here are a few common misconceptions worth clearing up:
          </p>
          <ul className="mt-4 space-y-3">
            {DIET_MISCONCEPTIONS.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-2.5 text-[14px] leading-relaxed text-text-mid">
                <span aria-hidden className="mt-1 text-green">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-10">
        <div className="mx-auto max-w-3xl">
          <p className="flex items-start gap-2 rounded-lg border border-border-amber bg-white p-5 text-[13px] leading-relaxed text-text-mid">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" />
            <span>
              <strong className="text-navy">Medical disclaimer:</strong> This guidance is
              educational and general. It does not replace individualised advice from Dr Anavil
              Yadav or Dr T P Yadav. Always tell us about dietary changes, supplements, or new
              medications you start during treatment, and never stop any prescribed medication
              without your treating doctor&apos;s guidance.
            </span>
          </p>
        </div>
      </section>

      <section className="bg-navy px-5 py-14 text-center text-cream">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-xl md:text-2xl">
            Have a Question About Your Own Case?
          </h2>
          <p className="mt-3 text-[15px] text-cream/80">
            General guidance only takes you so far — WhatsApp us your specific question.
          </p>
          <a
            href={whatsappLink("Hello, I have a diet/lifestyle question about my treatment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
