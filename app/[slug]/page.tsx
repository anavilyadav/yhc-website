import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import DiseaseHero from "@/components/disease-page/DiseaseHero";
import SectionJumpNav from "@/components/disease-page/SectionJumpNav";
import DisclaimerBanner from "@/components/disease-page/DisclaimerBanner";
import ConditionsList from "@/components/disease-page/ConditionsList";
import ContentSections from "@/components/disease-page/ContentSections";
import PatientStoryCard from "@/components/disease-page/PatientStoryCard";
import FAQAccordion from "@/components/disease-page/FAQAccordion";
import DiseasePageFinalCTA from "@/components/disease-page/DiseasePageFinalCTA";
import RelatedConditions from "@/components/disease-page/RelatedConditions";
import ComparisonTable from "@/components/disease-page/ComparisonTable";
import WorriesTable from "@/components/disease-page/WorriesTable";
import TriggerChips from "@/components/disease-page/TriggerChips";
import SoundFamiliar from "@/components/disease-page/SoundFamiliar";
import PriceTeaser from "@/components/disease-page/PriceTeaser";
import { PdfSummaryButton } from "@/components/disease-page/PdfSummaryButton";
import { PrintLetterhead } from "@/components/disease-page/PrintLetterhead";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { PageVideo } from "@/components/shared/PageVideo";
import RelatedVideosGallery from "@/components/shared/RelatedVideosGallery";
import { getDiseasePage, getAllDiseasePageSlugs } from "@/lib/data/disease-pages";
import { getPageVideos } from "@/lib/data/videos";
import { getRelatedVideos } from "@/lib/data/related-videos";
import { CATEGORY_VIDEO_TAG_CLUSTERS } from "@/lib/data/condition-video-tags";
import { getPricingPlans } from "@/lib/data/appointment";
import { getDoctorBySlug } from "@/lib/supabase/queries/doctors";
import { buildMedicalWebPageSchema, buildFAQPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { RELATED_CONDITIONS, SUB_PAGE_LINKS } from "@/lib/content/related-conditions";
import { slugify, autoShortenHeading } from "@/lib/utils";

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

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default async function DiseasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [page, doctor, videos, pricingPlans, relatedVideos] = await Promise.all([
    getDiseasePage(slug),
    getDoctorBySlug(siteConfig.doctors.physician.slug),
    getPageVideos(slug),
    getPricingPlans(),
    getRelatedVideos(CATEGORY_VIDEO_TAG_CLUSTERS[slug] ?? []),
  ]);
  if (!page) notFound();

  const medicalWebPageSchema = buildMedicalWebPageSchema(page);
  const faqPageSchema = buildFAQPageSchema(page.faqs);
  const relatedConditions = RELATED_CONDITIONS[page.slug] ?? [];
  const subPageLinks = SUB_PAGE_LINKS[page.slug] ?? [];
  const jumpNavItems = [
    ...page.sections.map((s) => ({ id: slugify(s.heading), label: s.navLabel ?? autoShortenHeading(s.heading) })),
    ...(page.patientStory ? [{ id: "patient-story", label: "Patient Story" }] : []),
    { id: "faq", label: "FAQ" },
  ];

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

      <PrintLetterhead />

      <DiseaseHero hero={page.hero} conditionName={page.aboutCondition.name} doctor={doctor} />

      <SectionJumpNav items={jumpNavItems} />

      <SoundFamiliar items={page.soundFamiliar ?? []} />

      {/*
        Author box near the top, not just the bottom — GIOS_P4 GEO Layer 2
        EXP-4 and the sitemap doc's E-E-A-T checklist both call this out
        explicitly ("top mein bhi, sirf bottom mein nahi").
      */}
      <div className="mx-auto max-w-4xl px-5 pt-8">
        <AuthorBox
          doctor={doctor}
          lastReviewed={formatDate(new Date())}
          reviewedBy={`${siteConfig.doctors.founder.name}, BHMS, MD — Founder, 35+ years of clinical practice.`}
        />
      </div>

      {/*
        PDF summary — UW ch.5 "low-effort lead magnet built from content
        already on the site". Scoped to the same 5 flagship pages that
        already have a comparisonTable, not every disease page.
      */}
      {page.comparisonTable && (
        <div className="mx-auto max-w-4xl px-5 pt-4 text-center sm:text-left">
          <PdfSummaryButton conditionName={page.aboutCondition.name} />
        </div>
      )}

      {page.disclaimerProminent && (
        <DisclaimerBanner text={page.disclaimer} prominent />
      )}

      <ConditionsList intro={page.conditionsIntro} conditions={page.conditions} />

      <PriceTeaser plans={pricingPlans} />

      <TriggerChips triggers={page.commonTriggers ?? []} />

      <TriggerChips
        triggers={page.commonSymptoms ?? []}
        heading="Common Symptoms"
        tint="white"
      />

      <PageVideo videos={videos} />

      <WorriesTable />

      {subPageLinks.length > 0 && (
        <div className="mx-auto max-w-4xl px-5 pb-6">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">
            In-Depth Guides
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {subPageLinks.map((link) => (
              <Link
                key={link.slug}
                href={`/${link.slug}/`}
                className="rounded-sm border border-border-amber bg-cream-bg px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-amber hover:text-amber-dark"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      )}

      <ContentSections sections={page.sections} />
      {page.comparisonTable && (
        <ComparisonTable rows={page.comparisonTable} conditionName={page.aboutCondition.name} />
      )}
      {page.patientStory && <PatientStoryCard story={page.patientStory} />}
      <FAQAccordion faqs={page.faqs} />
      <RelatedVideosGallery videos={relatedVideos} />
      {relatedConditions.length > 0 && <RelatedConditions items={relatedConditions} />}

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
