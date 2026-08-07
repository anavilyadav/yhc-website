import { BLOG_POST_SEED } from "../lib/data/blog-posts";

// Dollar-quote every value so we never have to hand-escape apostrophes —
// same approach as gen-disease-pages-sql.ts.
function dq(value: unknown): string {
  return `$v$${JSON.stringify(value)}$v$`;
}
function dqText(value: string): string {
  return `$v$${value}$v$`;
}

const rows = BLOG_POST_SEED.map((p, i) => {
  const cols = [
    dqText(p.slug),
    dqText(p.title),
    dqText(p.metaDescription),
    dqText(p.focusKeyword),
    `${dq(p.secondaryKeywords)}::jsonb`,
    dqText(p.category),
    `${dq(p.tags)}::jsonb`,
    dqText(p.readTime),
    `date ${dqText(p.publishedDate)}`,
    `${dq(p.intro)}::jsonb`,
    `${dq(p.sections)}::jsonb`,
    dqText(p.finalCta),
    dqText(p.relatedDiseaseSlug),
    `${dq(p.relatedPostSlugs)}::jsonb`,
    p.isPublished ? "true" : "false",
    String(i + 1),
  ];
  return `(\n  ${cols.join(",\n  ")}\n)`;
}).join(",\n");

const sql = `insert into public.blog_posts (
  slug, title, meta_description, focus_keyword, secondary_keywords,
  category, tags, read_time, published_date, intro, sections, final_cta,
  related_disease_slug, related_post_slugs, is_published, display_order
) values
${rows}
on conflict (slug) do nothing;
`;

console.log(sql);
