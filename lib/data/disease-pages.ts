import { supabase } from "@/lib/supabase";
import type { DiseasePageContent } from "@/lib/types";
import { DISEASE_PAGE_SEED } from "@/lib/data/disease-page-content";

/**
 * Fetches full content for one disease/treatment page by slug.
 * Supabase-first (so Dr Anavil can edit copy from an admin panel later
 * without a redeploy), falling back to the bundled seed if Supabase isn't
 * configured, the row doesn't exist there yet, or the row isn't published.
 * Returns null if the slug isn't a known disease page at all.
 */
export async function getDiseasePage(slug: string): Promise<DiseasePageContent | null> {
  const seedMatch = DISEASE_PAGE_SEED.find((page) => page.slug === slug) ?? null;

  if (!supabase) return seedMatch;

  const { data, error } = await supabase
    .from("disease_pages")
    .select(
      "slug, page_title, meta_description, focus_keyword, secondary_keywords, hero, conditions_intro, conditions, sections, patient_story, faqs, final_cta, disclaimer, disclaimer_prominent, about_condition, is_published",
    )
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error || !data) return seedMatch;

  return {
    slug: data.slug,
    pageTitle: data.page_title,
    metaDescription: data.meta_description,
    focusKeyword: data.focus_keyword,
    secondaryKeywords: data.secondary_keywords ?? [],
    hero: data.hero,
    conditionsIntro: data.conditions_intro,
    conditions: data.conditions ?? [],
    sections: data.sections ?? [],
    patientStory: data.patient_story,
    faqs: data.faqs ?? [],
    finalCta: data.final_cta,
    disclaimer: data.disclaimer,
    disclaimerProminent: data.disclaimer_prominent,
    aboutCondition: data.about_condition,
    isPublished: data.is_published,
  };
}

/**
 * All slugs that currently have full page content — used by
 * `generateStaticParams` so these pages are statically pre-rendered at
 * build time (with ISR revalidation) rather than rendered on first request.
 * Only queries Supabase for *which slugs exist*; falls back to the seed
 * list so `npm run build` never depends on Supabase being reachable.
 */
export async function getAllDiseasePageSlugs(): Promise<string[]> {
  const seedSlugs = DISEASE_PAGE_SEED.map((page) => page.slug);

  if (!supabase) return seedSlugs;

  const { data, error } = await supabase.from("disease_pages").select("slug").eq("is_published", true);

  if (error || !data || data.length === 0) return seedSlugs;

  return data.map((row) => row.slug as string);
}
