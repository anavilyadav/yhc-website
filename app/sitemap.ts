import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { supabase } from "@/lib/supabase";
import { getAllDiseasePageSlugs } from "@/lib/data/disease-pages";
import { getAllBlogSlugs } from "@/lib/data/blog";
import { getDoctors } from "@/lib/supabase/queries/doctors";
import { getConditionFaqSlugs } from "@/lib/content/homeopathy-faq-content";
import { CITIES } from "@/lib/data/cities";

/**
 * Techeve audit (17 Sept 2026): every sitemap entry was stamped with
 * `new Date()` at build/request time, so every page looked "modified
 * today" regardless of when its content actually changed — a signal
 * search engines use to judge freshness and prioritise re-crawling.
 * Supabase-backed content has a real `updated_at`; this fetches it in
 * one query per table and falls back to omitting `lastModified` (valid
 * per the sitemap spec) rather than inventing a date, for rows that
 * aren't in Supabase yet (unconfigured env, or a seed-only page).
 */
async function getUpdatedAtMap(table: "disease_pages" | "blog_posts" | "doctors"): Promise<Map<string, Date>> {
  const map = new Map<string, Date>();
  if (!supabase) return map;

  const { data, error } = await supabase.from(table).select("slug, updated_at").eq("is_published", true);
  if (error || !data) return map;

  for (const row of data) {
    if (row.updated_at) map.set(row.slug as string, new Date(row.updated_at as string));
  }
  return map;
}

const STATIC_ROUTES = [
  "",
  "about",
  "our-doctors",
  "appointment",
  "online-consultation",
  "contact",
  "blog",
  "faq",
  "homeopathy-faq",
  "patient-stories",
  "homeopathy-doctor-jaipur",
  "homeopathy-clinic-jagatpura-jaipur",
  "skin-diseases/vitiligo-treatment-jaipur",
  "skin-diseases/psoriasis-treatment-jaipur",
  "skin-diseases/eczema-treatment-jaipur",
  "respiratory-diseases/asthma-treatment-jaipur",
  "nervous-system-disease/cerebral-palsy-treatment-jaipur",
  "genetic-diseases/down-syndrome-treatment-jaipur",
  "privacy-policy",
  "terms-of-use",
  "medical-disclaimer",
  "cities",
  "international-patients",
  "diet-lifestyle-guide",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [diseaseSlugs, blogSlugs, doctors, diseaseUpdatedAt, blogUpdatedAt, doctorUpdatedAt] = await Promise.all([
    getAllDiseasePageSlugs(),
    getAllBlogSlugs(),
    getDoctors(),
    getUpdatedAtMap("disease_pages"),
    getUpdatedAtMap("blog_posts"),
    getUpdatedAtMap("doctors"),
  ]);

  // Static, seed-only routes (marketing pages, legal pages, the city hub)
  // have no tracked edit timestamp, so lastModified is left out rather
  // than stamped with the current date.
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: route ? `${siteConfig.url}/${route}` : siteConfig.url,
  }));

  const diseaseEntries = diseaseSlugs.map((slug) => ({
    url: `${siteConfig.url}/${slug}`,
    ...(diseaseUpdatedAt.has(slug) ? { lastModified: diseaseUpdatedAt.get(slug) } : {}),
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    ...(blogUpdatedAt.has(slug) ? { lastModified: blogUpdatedAt.get(slug) } : {}),
  }));

  const doctorEntries = doctors.map((doctor) => ({
    url: `${siteConfig.url}/our-doctors/${doctor.slug}`,
    ...(doctorUpdatedAt.has(doctor.slug) ? { lastModified: doctorUpdatedAt.get(doctor.slug) } : {}),
  }));

  const conditionFaqEntries = getConditionFaqSlugs().map((slug) => ({
    url: `${siteConfig.url}/homeopathy-faq/${slug}`,
  }));

  // Only the major cities are indexable (see CityInfo.isMajor) — the rest
  // are noindex,follow and deliberately left out of the sitemap.
  const cityEntries = CITIES.filter((city) => city.isMajor).map((city) => ({
    url: `${siteConfig.url}/cities/${city.slug}`,
  }));

  return [
    ...staticEntries,
    ...diseaseEntries,
    ...blogEntries,
    ...doctorEntries,
    ...conditionFaqEntries,
    ...cityEntries,
  ];
}
