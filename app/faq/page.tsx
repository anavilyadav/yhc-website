import type { Metadata } from "next";
import Link from "next/link";
import DisclaimerBanner from "@/components/disease-page/DisclaimerBanner";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { FaqSearch } from "@/components/faq/FaqSearch";
import { getDoctorBySlug } from "@/lib/supabase/queries/doctors";
import { buildFAQPageSchema } from "@/lib/schema";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { faqSeo, faqHero, faqCategories, faqFinalCta, faqDisclaimer } from "@/lib/content/faq-content";

export const metadata: Metadata = {
  title: { absolute: faqSeo.pageTitle },
  description: faqSeo.metaDescription,
  keywords: [faqSeo.focusKeyword, ...faqSeo.secondaryKeywords],
  alternates: { canonical: `${siteConfig.url}/faq/` },
  openGraph: {
    title: faqSeo.pageTitle,
    description: faqSeo.metaDescription,
    url: `${siteConfig.url}/faq/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default async function FaqPage() {
  const doctor = await getDoctorBySlug(siteConfig.doctors.physician.slug);
  const allQuestions = faqCategories.flatMap((cat) => cat.questions);
  const faqPageSchema = buildFAQPageSchema(allQuestions);

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
            {faqHero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/80 md:text-base">
            {faqHero.subheadline}
          </p>
        </div>
      </section>

      <div className="bg-white px-5 pt-10">
        <div className="mx-auto max-w-3xl">
          <AuthorBox
            doctor={doctor}
            lastReviewed={new Date().toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        </div>
      </div>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <FaqSearch categories={faqCategories} />
        </div>
      </section>

      <div className="bg-cream-bg">
        <DisclaimerBanner text={faqDisclaimer} />
      </div>

      <section className="bg-navy px-5 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-xl leading-snug text-cream md:text-3xl">{faqFinalCta}</h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hello, I have a question about treatment at Yadav Homeo Clinic.")}
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
