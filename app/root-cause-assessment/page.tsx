import type { Metadata } from "next";
import { RootCauseAssessment } from "@/components/assessment/RootCauseAssessment";
import { siteConfig } from "@/lib/site-config";

const pageUrl = `${siteConfig.url}/root-cause-assessment/`;

export const metadata: Metadata = {
  title: { absolute: `Root Cause Assessment — Find What's Behind Your Condition | ${siteConfig.name}` },
  description:
    "A short, guided assessment to help you understand your condition before your consultation with Dr Anavil Yadav and Dr T P Yadav. Not a diagnosis — just a helpful first step.",
  alternates: { canonical: pageUrl },
  robots: { index: false, follow: true },
};

export default function RootCauseAssessmentPage() {
  return (
    <section className="bg-cream-bg px-5 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-dark">
          Root Cause Assessment
        </p>
        <h1 className="mt-3 font-serif text-2xl text-navy md:text-3xl">
          Find Out What&apos;s Behind Your Condition
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-text-mid">
          5 quick questions. This is not a diagnosis or a symptom score — just a short, honest
          starting point before you talk to Dr Anavil Yadav or Dr T P Yadav.
        </p>
        <div className="mx-auto mt-4 flex max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12.5px] text-text-light">
          <span>✓ Takes under 2 minutes</span>
          <span>✓ No obligation to book</span>
          <span>✓ Sent privately on WhatsApp</span>
        </div>
      </div>

      <div className="mt-10">
        <RootCauseAssessment />
      </div>
    </section>
  );
}
