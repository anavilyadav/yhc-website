import { DISEASE_PAGE_SEED } from "../lib/data/disease-page-content";

// Dollar-quote every value so we never have to hand-escape apostrophes
// (this content has a lot of them — "patient's", "Parkinson's" etc).
// Using one tag ($v$) repeated is safe: each pair is a separate lexical
// region, and none of our English medical copy contains the token "$v$".
function dq(value: unknown): string {
  return `$v$${JSON.stringify(value)}$v$`;
}
function dqText(value: string): string {
  return `$v$${value}$v$`;
}

const rows = DISEASE_PAGE_SEED.map((p, i) => {
  const cols = [
    dqText(p.slug),
    dqText(p.pageTitle),
    dqText(p.metaDescription),
    dqText(p.focusKeyword),
    `${dq(p.secondaryKeywords)}::jsonb`,
    `${dq(p.hero)}::jsonb`,
    dqText(p.conditionsIntro),
    `${dq(p.conditions)}::jsonb`,
    `${dq(p.sections)}::jsonb`,
    `${dq(p.patientStory)}::jsonb`,
    `${dq(p.faqs)}::jsonb`,
    dqText(p.finalCta),
    dqText(p.disclaimer),
    p.disclaimerProminent ? "true" : "false",
    `${dq(p.aboutCondition)}::jsonb`,
    "true",
    String(i + 1),
  ];
  return `(\n  ${cols.join(",\n  ")}\n)`;
}).join(",\n");

const sql = `insert into public.disease_pages (
  slug, page_title, meta_description, focus_keyword, secondary_keywords,
  hero, conditions_intro, conditions, sections, patient_story, faqs,
  final_cta, disclaimer, disclaimer_prominent, about_condition,
  is_published, display_order
) values
${rows}
on conflict (slug) do nothing;
`;

console.log(sql);
