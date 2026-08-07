import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import DiseaseHero from "@/components/disease-page/DiseaseHero";
import DisclaimerBanner from "@/components/disease-page/DisclaimerBanner";
import ConditionsList from "@/components/disease-page/ConditionsList";
import ContentSections from "@/components/disease-page/ContentSections";
import PatientStoryCard from "@/components/disease-page/PatientStoryCard";
import FAQAccordion from "@/components/disease-page/FAQAccordion";
import DiseasePageFinalCTA from "@/components/disease-page/DiseasePageFinalCTA";
import { getDiseasePage, getAllDiseasePageSlugs } from "@/lib/data/disease-pages";
import { buildMedicalWebPageSchema, buildFAQPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

// ISR: re-fetch Supabase-backed page content at most once per hour, so
// admin-panel edits go live without a redeploy while pages still serve as
// fast, cached static responses the rest of the time.
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllDiseasePageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getDiseasePage(slug);
  if (!page) return {};

  const pageUrl = `${siteConfig.url}/${page.slug}/`;

  return {
    title: { absolute: page.pageTitle },
    description: page.metaDescription,
    keywords: [page.focusKeyword, ...page.secondaryKeywords],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: page.pageTitle,
      description: page.metaDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getDiseasePage(slug);
  if (!page) notFound();

  const medicalWebPageSchema = buildMedicalWebPageSchema(page);
  const faqPageSchema = buildFAQPageSchema(page.faqs);

  return (
    <>
      {/*
        Plain <script> tags, not next/script's <Script> component — Script
        defers to client-side injection (afterInteractive by default), so
        it never appears in the actual server-rendered HTML that crawlers
        fetch. Confirmed against the homepage's own prerendered output,
        which has this same gap; flagging that separately rather than
        touching STEP1's shipped code here.
      */}
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

      <DiseaseHero hero={page.hero} conditionName={page.aboutCondition.name} />

      {page.disclaimerProminent && (
        <DisclaimerBanner text={page.disclaimer} prominent />
      )}

      <ConditionsList intro={page.conditionsIntro} conditions={page.conditions} />
      <ContentSections sections={page.sections} />
      {page.patientStory && <PatientStoryCard story={page.patientStory} />}
      <FAQAccordion faqs={page.faqs} />

      {!page.disclaimerProminent && <DisclaimerBanner text={page.disclaimer} />}

      {/*
        Doc-specified narrow exception (dr-anavil-step11-disease-gap-
        analysis-new-pages-2026-07-13.docx, Section 6): Sexual Health gets
        "quiet placement" — no main nav, no homepage grid card — with its
        only internal link required to come specifically from Men's Health.
      */}
      {page.slug === "mens-health" && (
        <div className="mx-auto max-w-4xl px-5 pb-2">
          <p className="text-[13px] text-text-mid">
            We also offer confidential consultations for sexual health concerns.{" "}
            <Link href="/sexual-health" className="font-semibold text-amber-dark hover:text-navy">
              Visit our Sexual Health page →
            </Link>
          </p>
        </div>
      )}

      <DiseasePageFinalCTA finalCta={page.finalCta} conditionName={page.aboutCondition.name} />
    </>
  );
}
