import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/lib/types";
import { BLOG_POST_SEED } from "@/lib/data/blog-posts";

const SELECT_COLUMNS =
  "slug, title, meta_description, focus_keyword, secondary_keywords, category, tags, read_time, published_date, intro, sections, final_cta, related_disease_slug, related_post_slugs, is_published";

function fromRow(row: Record<string, unknown>): BlogPost {
  return {
    slug: row.slug as string,
    title: row.title as string,
    metaDescription: row.meta_description as string,
    focusKeyword: row.focus_keyword as string,
    secondaryKeywords: (row.secondary_keywords as string[]) ?? [],
    category: row.category as string,
    tags: (row.tags as string[]) ?? [],
    readTime: row.read_time as string,
    publishedDate: row.published_date as string,
    intro: (row.intro as string[]) ?? [],
    sections: (row.sections as BlogPost["sections"]) ?? [],
    finalCta: row.final_cta as string,
    relatedDiseaseSlug: row.related_disease_slug as string,
    relatedPostSlugs: (row.related_post_slugs as string[]) ?? [],
    isPublished: row.is_published as boolean,
  };
}

/**
 * Fetches one blog post by slug. Supabase-first (so Dr Anavil can edit
 * copy or toggle publish status from an admin panel later without a
 * redeploy), falling back to the bundled seed otherwise — same pattern as
 * lib/data/disease-pages.ts.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const seedMatch = BLOG_POST_SEED.find((post) => post.slug === slug) ?? null;

  if (!supabase) return seedMatch;

  const { data, error } = await supabase
    .from("blog_posts")
    .select(SELECT_COLUMNS)
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error || !data) return seedMatch;

  return fromRow(data);
}

/** All published posts, newest first — used for the /blog listing page. */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const seedPosts = BLOG_POST_SEED.filter((post) => post.isPublished);

  if (!supabase) return seedPosts;

  const { data, error } = await supabase
    .from("blog_posts")
    .select(SELECT_COLUMNS)
    .eq("is_published", true)
    .order("published_date", { ascending: false });

  if (error || !data || data.length === 0) return seedPosts;

  return data.map(fromRow);
}

/** All published slugs — used by generateStaticParams. */
export async function getAllBlogSlugs(): Promise<string[]> {
  const seedSlugs = BLOG_POST_SEED.filter((post) => post.isPublished).map((post) => post.slug);

  if (!supabase) return seedSlugs;

  const { data, error } = await supabase.from("blog_posts").select("slug").eq("is_published", true);

  if (error || !data || data.length === 0) return seedSlugs;

  return data.map((row) => row.slug as string);
}
