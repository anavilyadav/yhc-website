import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import DisclaimerBanner from "@/components/disease-page/DisclaimerBanner";
import FAQAccordion from "@/components/disease-page/FAQAccordion";
import { buildFAQPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { getDiseasePage } from "@/lib/data/disease-pages";
import {
  getConditionFaqs,
  getConditionFaqSlugs,
  homeopathyFaqDisclaimer,
} from "@/lib/content/homeopathy-faq-content";

// UW report ch.5/6: splitting the 50-question mega FAQ page into
// per-condition pages that can each rank for their own searches, instead
// of one page competing with itself across many unrelated keywords.
// Every question here is drawn verbatim from homeopathyFaqCategories —
// nothing new is written for this page.
export const revalidate = 3600;

export async function generateStaticParams() {
  return getConditionFaqSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getDiseasePage(slug);
  if (!page) return {};

  const title = `Homeopathy for ${page.aboutCondition.name} — FAQ | Yadav Homeo Clinic`;
  const description = `Common questions about homeopathic treatment for ${page.aboutCondition.name.toLowerCase()}, answered by Dr Anavil Yadav (BHMS), Yadav Homeo Clinic, Jaipur.`;
  const pageUrl = `${siteConfig.url}/homeopathy-faq/${slug}/`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ConditionFaqPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getDiseasePage(slug);
  const faqs = getConditionFaqs(slug);
  if (!page || faqs.length === 0) notFound();

  const faqPageSchema = buildFAQPageSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <section className="bg-navy px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber">
            Homeopathy FAQ
          </p>
          <h1 className="font-serif text-2xl leading-snug text-cream md:text-4xl md:leading-tight">
            Homeopathy for {page.aboutCondition.name} — Your Questions Answered
          </h1>
        </div>
      </section>

      <FAQAccordion faqs={faqs} heading={`${page.aboutCondition.name} — Frequently Asked Questions`} />

      <div className="bg-cream-bg">
        <DisclaimerBanner text={homeopathyFaqDisclaimer} />
      </div>

      <section className="bg-white px-5 py-10 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`/${slug}/`}
            className="w-full rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
          >
            Full {page.aboutCondition.name} Treatment Page →
          </Link>
          <Link
            href="/homeopathy-faq"
            className="w-full rounded-sm border-2 border-navy px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream sm:w-auto"
          >
            ← All Homeopathy FAQs
          </Link>
        </div>
      </section>
    </>
  );
}
