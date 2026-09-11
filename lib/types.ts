export interface Disease {
  slug: string;
  title: string;
  description: string;
  is_specialty: boolean;
  display_order: number;
}

export interface Testimonial {
  id: string;
  patient_name: string;
  age: number | null;
  city: string;
  condition: string;
  quote: string;
  treatment_duration: string | null;
  is_featured: boolean;
  display_order: number;
}

/**
 * Full disease/treatment page content (e.g. /skin-diseases/, /autism/).
 * Distinct from the lightweight `Disease` type above, which only backs the
 * homepage condition cards. Source: STEP4_Disease_Pages_Part1.docx +
 * STEP5_Disease_Pages_Part2.docx, with hero overrides from
 * dr-anavil-step8-hero-fixes-2026-07-12.docx where noted.
 */
export interface DiseasePageHero {
  headline: string;
  subheadline: string;
  /** Only present where STEP8 added a trust line to the hero (e.g. skin-diseases). */
  trustLine?: string;
  /**
   * YouTube video ID for the hero's video slot (e.g. "dQw4w9WgXcQ" from
   * youtube.com/watch?v=dQw4w9WgXcQ) — not a full URL. Optional and left
   * unset until a real video exists for this page; VideoEmbed renders
   * nothing when it's absent, per the 2026-09-11 build spec's content-
   * degradation rule (no placeholder box or "pending" label).
   */
  youtubeId?: string;
}

export interface DiseasePageSubsection {
  /** Short bold label, e.g. "DURING CHEMOTHERAPY AND RADIATION:" or "Month 1-2:" */
  label: string;
  paragraphs?: string[];
  list?: string[];
}

/** A photo or video break inserted mid-section — layout #8 "Visual Proof Strip". */
export interface DiseasePageMedia {
  type: "video" | "photo";
  /** YouTube video ID (video type) or image URL (photo type) — left unset until real media exists. */
  youtubeId?: string;
  photoUrl?: string;
  caption: string;
}

export interface DiseasePageSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  subsections?: DiseasePageSubsection[];
  /** Small-print note, e.g. "Results vary by individual..." */
  note?: string;
  /** Short chip label for the section jump-nav (e.g. "Why It Spreads"). Falls back to an auto-shortened heading when unset. */
  navLabel?: string;
  /**
   * How to render `list` — "bullets" (default) for plain prose lists;
   * "stats" for short "Label — description" results-style lists rendered
   * as big number/label tiles; "cards" for "Name — description" lists
   * (e.g. named sub-types) rendered as a 2-column card grid. Only applies
   * when every list item actually follows the "X — description" shape.
   */
  listStyle?: "bullets" | "stats" | "cards";
  /** Photo/video break shown after this section's paragraphs, before its list/subsections. */
  media?: DiseasePageMedia;
}

export interface DiseasePageFAQ {
  question: string;
  answer: string;
}

export interface DiseasePagePatientStory {
  quote: string;
  attribution: string;
  /** Legal-compliance caveat shown under the story, e.g. "Individual results vary." */
  note?: string;
}

export interface DiseasePageAboutCondition {
  name: string;
  alternateNames: string[];
  description: string;
}

export interface DiseasePageComparisonRow {
  factor: string;
  conventional: string;
  homeopathy: string;
}

export interface DiseasePageContent {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  hero: DiseasePageHero;
  conditionsIntro: string;
  conditions: string[];
  sections: DiseasePageSection[];
  /** GIOS Stage1 Final Audit "VALIDATED" item — only on the top 5 highest-traffic pages. */
  comparisonTable?: DiseasePageComparisonRow[];
  /**
   * Short, scannable chips of root causes/triggers — Trust & Sales
   * Playbook ch.6/9 (GEO: AI tools extract short discrete facts far more
   * reliably than long paragraphs). Each entry must already be stated,
   * near-verbatim, somewhere in this page's own `sections` prose — never
   * a new claim invented for the chip. Omitted (not forced) on pages
   * whose causes are too condition-specific to summarise honestly as one
   * page-level list (e.g. autism's page deliberately avoids "root cause"
   * framing; womens-health covers many conditions with different causes).
   */
  commonTriggers?: string[];
  /**
   * Short, scannable symptom chips — PDM report ch.3.4 (their "symptom
   * chips, cause chips, types chips" pattern). Distinct from
   * `soundFamiliar`: that's relatable narrative questions for persuasion,
   * this is short noun-phrase facts for GEO/scannability. Deliberately no
   * separate "types" chip group — the existing `conditions` list already
   * covers named types/conditions in fuller, better form; a chip cloud of
   * the same names right below it would be pure duplication, not new
   * value. Each entry must already be named in this page's own conditions
   * list or sections — never invented.
   */
  commonSymptoms?: string[];
  /**
   * "Does This Sound Familiar?" — short, relatable checklist shown near the
   * top of the page, before the visitor has to read anything else. UW
   * report ch.3.3/Trust & Sales Playbook: get the visitor to self-diagnose
   * ("that's me") in five seconds. Each line must paraphrase something
   * already said in this page's own hero or sections — never a new symptom
   * invented for the checklist.
   */
  soundFamiliar?: string[];
  /** Optional — omitted for pages with no doc-approved, consented patient testimonial (e.g. STEP11's 3 new pages) rather than inventing one. */
  patientStory?: DiseasePagePatientStory;
  faqs: DiseasePageFAQ[];
  finalCta: string;
  disclaimer: string;
  /** Cancer + neurological pages get a prominent top-of-page disclaimer per GIOS_P7. */
  disclaimerProminent: boolean;
  aboutCondition: DiseasePageAboutCondition;
  isPublished: boolean;
}

/**
 * Appointment & Contact page types. Source: STEP3_Appointment_Contact_Pages.docx.
 */
export type ConsultationMode = "in_clinic" | "online";

export interface ClinicLocation {
  id: string;
  slug: "main" | "jagatpura";
  name: string;
  addressLine: string | null;
  city: string;
  state: string;
  pinCode: string | null;
  phone: string;
  whatsapp: string;
  landmark: string | null;
  mapEmbedUrl: string | null;
  /** "Get Directions" link — the clinic's own Google Maps share link, distinct from mapEmbedUrl (the iframe src). */
  directionsUrl: string | null;
  timingsWeekday: string;
  timingsSunday: string;
}

export interface PricingPlan {
  id: string;
  /**
   * Free-form unique slug — not a fixed union. Dr Anavil can add new plans
   * (packages, seasonal offers) as new Supabase rows without a code change;
   * the original 4 codes (in_clinic_first, in_clinic_followup, online_first,
   * online_followup) still exist as the starting seed but aren't the only
   * ones allowed anymore.
   */
  code: string;
  title: string;
  mode: ConsultationMode;
  priceInr: number | null;
  /** Set alongside a lower priceInr to show a "was ₹X" strikethrough for a discount/seasonal offer. */
  originalPriceInr?: number | null;
  /** Small pill shown on the card, e.g. "Most Chosen" or "Festive Offer — 20% Off". */
  badge?: string | null;
  inclusions: string[];
  /** Lets Dr Anavil hide a plan without deleting it. Defaults to true. */
  isActive?: boolean;
  sortOrder?: number;
}

/**
 * One embedded video for a given page — Trust & Sales Playbook ch.8/11.
 * Added/removed/updated entirely from the Supabase table editor (same
 * workflow as pricing plans), keyed by pageSlug so any page can carry
 * any number of videos with no code change.
 */
export interface PageVideo {
  id: string;
  pageSlug: string;
  youtubeId: string;
  title: string;
  caption: string;
  sortOrder: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  sortOrder: number;
}

export interface ContactSubmission {
  fullName: string;
  phone: string;
  email: string | null;
  cityCountry: string;
  consultationType: "In-Clinic — Jaipur" | "Online — India" | "Online — International";
  condition: string;
  heardFrom: string | null;
  message: string | null;
}

/**
 * Blog post types. Source: STEP6_Blog_Posts.docx.
 */
export interface BlogPostSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Closing caveat/qualifier rendered after the list, e.g. a "results vary" note. */
  note?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  category: string;
  tags: string[];
  readTime: string;
  publishedDate: string;
  intro: string[];
  sections: BlogPostSection[];
  finalCta: string;
  /** Disease page slug this post most naturally links back to, e.g. "skin-diseases". */
  relatedDiseaseSlug: string;
  /** Other blog post slugs to surface as "related reading". */
  relatedPostSlugs: string[];
  isPublished: boolean;
}

/**
 * Sub-page under a disease page (e.g. /skin-diseases/vitiligo-treatment-jaipur).
 * Same shape as DiseasePageContent minus the "Conditions We Treat" bullet
 * list, which doesn't apply to a single-condition deep-dive page.
 * Source: dr-anavil-step7-missing-pages-2026-07-12.docx.
 */
export interface DiseaseSubPageContent {
  slug: string;
  parentSlug: string;
  parentLabel: string;
  pageTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  hero: DiseasePageHero;
  sections: DiseasePageSection[];
  /** Optional — omitted rather than inventing one where no doc-approved, consented patient testimonial exists for this specific condition. */
  patientStory?: DiseasePagePatientStory;
  faqs: DiseasePageFAQ[];
  finalCta: string;
  disclaimer: string;
  aboutCondition: DiseasePageAboutCondition;
}
