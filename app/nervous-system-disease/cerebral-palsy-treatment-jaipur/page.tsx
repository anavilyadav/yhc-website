import type { Metadata } from "next";
import Link from "next/link";
import DiseaseHero from "@/components/disease-page/DiseaseHero";
import ContentSections from "@/components/disease-page/ContentSections";
import PatientStoryCard from "@/components/disease-page/PatientStoryCard";
import FAQAccordion from "@/components/disease-page/FAQAccordion";
import DisclaimerBanner from "@/components/disease-page/DisclaimerBanner";
import DiseasePageFinalCTA from "@/components/disease-page/DiseasePageFinalCTA";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { CEREBRAL_PALSY_PAGE } from "@/lib/content/cerebral-palsy-content";
import { buildMedicalWebPageSchema, buildFAQPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { getDoctorBySlug } from "@/lib/supabase/queries/doctors";

const page = CEREBRAL_PALSY_PAGE;

export const metadata: Metadata = {
  title: { absolute: page.pageTitle },
  description: page.metaDescription,
  keywords: [page.focusKeyword, ...page.secondaryKeywords],
  alternates: { canonical: `${siteConfig.url}/${page.parentSlug}/${page.slug}/` },
  openGraph: {
    title: page.pageTitle,
    description: page.metaDescription,
    url: `${siteConfig.url}/${page.parentSlug}/${page.slug}/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default async function CerebralPalsyPage() {
  const doctor = await getDoctorBySlug(siteConfig.doctors.physician.slug);
  const medicalWebPageSchema = buildMedicalWebPageSchema({
    slug: `${page.parentSlug}/${page.slug}`,
    pageTitle: page.pageTitle,
    metaDescription: page.metaDescription,
    aboutCondition: page.aboutCondition,
    breadcrumbParent: { label: page.parentLabel, href: `/${page.parentSlug}` },
  });
  const faqPageSchema = buildFAQPageSchema(page.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <DiseaseHero
        hero={page.hero}
        conditionName={page.aboutCondition.name}
        breadcrumbParent={{ label: page.parentLabel, href: `/${page.parentSlug}` }}
      />

      <div className="mx-auto max-w-4xl px-5 pt-8">
        <AuthorBox
          doctor={doctor}
          lastReviewed={new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          reviewedBy={`${siteConfig.doctors.founder.name}, BHMS — Founder, 35+ years of clinical practice.`}
        />
      </div>

      <ContentSections sections={page.sections} />

      <div className="mx-auto max-w-4xl px-5 pb-2">
        <p className="text-[13px] text-text-mid">
          Looking for other neurological conditions we treat — epilepsy, migraine, Parkinson&apos;s?{" "}
          <Link href={`/${page.parentSlug}`} className="font-semibold text-amber-dark hover:text-navy">
            Visit our Nervous System Disorders page →
          </Link>
        </p>
      </div>

      {page.patientStory && <PatientStoryCard story={page.patientStory} />}
      <FAQAccordion faqs={page.faqs} />
      <DisclaimerBanner text={page.disclaimer} />
      <DiseasePageFinalCTA finalCta={page.finalCta} conditionName={page.aboutCondition.name} />
    </>
  );
}
