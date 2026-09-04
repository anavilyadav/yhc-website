import type { Metadata } from "next";
import { PatientStoriesFilter } from "@/components/patient-stories/PatientStoriesFilter";
import { PageVideo } from "@/components/shared/PageVideo";
import { getPageVideos } from "@/lib/data/videos";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import {
  patientStoriesSeo,
  patientStoriesHero,
  patientStoriesIntro,
  patientStoryCategories,
  PATIENT_STORIES,
  testimonialDisclaimer,
  patientStoriesFinalCta,
} from "@/lib/content/patient-stories-content";

export const metadata: Metadata = {
  title: { absolute: patientStoriesSeo.pageTitle },
  description: patientStoriesSeo.metaDescription,
  keywords: [patientStoriesSeo.focusKeyword, ...patientStoriesSeo.secondaryKeywords],
  alternates: { canonical: `${siteConfig.url}/patient-stories/` },
  openGraph: {
    title: patientStoriesSeo.pageTitle,
    description: patientStoriesSeo.metaDescription,
    url: `${siteConfig.url}/patient-stories/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default async function PatientStoriesPage() {
  const videos = await getPageVideos("patient-stories");

  return (
    <>
      <section className="bg-navy px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl leading-snug text-cream md:text-4xl md:leading-tight">
            {patientStoriesHero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/80 md:text-base">
            {patientStoriesHero.subheadline}
          </p>
          <p className="mt-6 text-sm font-medium text-cream/70">
            {patientStoriesHero.trustLine.split("|").map((item, i, arr) => (
              <span key={item}>
                ✔ {item.trim()}
                {i < arr.length - 1 && <>&nbsp;&nbsp;</>}
              </span>
            ))}
          </p>
        </div>
      </section>

      <PageVideo videos={videos} />

      <section className="bg-cream px-5 py-4">
        <p className="mx-auto max-w-2xl text-center text-[13px] leading-relaxed text-text-light">
          {testimonialDisclaimer}
        </p>
      </section>

      <section className="bg-cream-bg px-5 py-10">
        <div className="mx-auto max-w-3xl space-y-4">
          {patientStoriesIntro.map((paragraph) => (
            <p key={paragraph.slice(0, 60)} className="text-base leading-relaxed text-text-mid">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-cream-bg px-5 pb-14">
        <div className="mx-auto max-w-5xl">
          <PatientStoriesFilter categories={patientStoryCategories} stories={PATIENT_STORIES} />
        </div>
      </section>

      <section className="bg-white px-5 py-8">
        <p className="mx-auto max-w-2xl text-center text-[13px] leading-relaxed text-text-light">
          {testimonialDisclaimer}
        </p>
      </section>

      <section className="bg-navy px-5 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-xl leading-snug text-cream md:text-3xl">
            {patientStoriesFinalCta}
          </h2>
          <p className="mt-3 text-sm text-cream/70">
            Online consultation available pan-India and internationally
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href={whatsappLink("Hello, I read the patient stories page and would like to book a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-amber px-8 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
            >
              💬 WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
