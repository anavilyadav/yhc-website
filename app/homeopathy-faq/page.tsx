import type { Metadata } from "next";
import Link from "next/link";
import DisclaimerBanner from "@/components/disease-page/DisclaimerBanner";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { FaqSearch } from "@/components/faq/FaqSearch";
import { getDoctorBySlug } from "@/lib/supabase/queries/doctors";
import { buildFAQPageSchema } from "@/lib/schema";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import {
  homeopathyFaqSeo,
  homeopathyFaqHero,
  homeopathyFaqCategories,
  homeopathyFaqDisclaimer,
  homeopathyFaqFinalCta,
} from "@/lib/content/homeopathy-faq-content";

export const metadata: Metadata = {
  title: { absolute: homeopathyFaqSeo.pageTitle },
  description: homeopathyFaqSeo.metaDescription,
  keywords: [homeopathyFaqSeo.focusKeyword, ...homeopathyFaqSeo.secondaryKeywords],
  alternates: { canonical: `${siteConfig.url}/homeopathy-faq/` },
  openGraph: {
    title: homeopathyFaqSeo.pageTitle,
    description: homeopathyFaqSeo.metaDescription,
    url: `${siteConfig.url}/homeopathy-faq/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default async function HomeopathyFaqPage() {
  const doctor = await getDoctorBySlug(siteConfig.doctors.physician.slug);
  const allQuestions = homeopathyFaqCategories.flatMap((cat) => cat.questions);
  const faqPageSchema = buildFAQPageSchema(allQuestions);
  const lastReviewed = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <section className="bg-navy px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl leading-snug text-cream md:text-4xl md:leading-tight">
            {homeopathyFaqHero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/80 md:text-base">
            {homeopathyFaqHero.subheadline}
          </p>
        </div>
      </section>

      <div className="bg-white px-5 pt-10">
        <div className="mx-auto max-w-3xl">
          <AuthorBox
            doctor={doctor}
            lastReviewed={lastReviewed}
            reviewedBy={`${siteConfig.doctors.founder.name}, BHMS — Founder, 35+ years of clinical practice.`}
          />
          <p className="mt-4 text-[12px] leading-relaxed text-text-light">
            Looking for our quick-answer FAQ instead? Visit the{" "}
            <Link href="/faq" className="font-semibold text-amber-dark hover:text-navy">
              main FAQ page →
            </Link>
          </p>
        </div>
      </div>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <FaqSearch categories={homeopathyFaqCategories} />
        </div>
      </section>

      <div className="bg-cream-bg">
        <DisclaimerBanner text={homeopathyFaqDisclaimer} />
      </div>

      <section className="bg-navy px-5 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-xl leading-snug text-cream md:text-3xl">
            {homeopathyFaqFinalCta}
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hello, I have a question about homeopathy that wasn't answered on your FAQ page.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
            >
              💬 WhatsApp Us Directly
            </a>
            <Link
              href="/appointment"
              className="w-full rounded-sm border-2 border-amber-light px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-amber-light transition-colors hover:bg-amber-light hover:text-navy sm:w-auto"
            >
              Book Consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
