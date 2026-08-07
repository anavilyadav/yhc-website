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
}

export interface DiseasePageSubsection {
  /** Short bold label, e.g. "DURING CHEMOTHERAPY AND RADIATION:" or "Month 1-2:" */
  label: string;
  paragraphs?: string[];
  list?: string[];
}

export interface DiseasePageSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  subsections?: DiseasePageSubsection[];
  /** Small-print note, e.g. "Results vary by individual..." */
  note?: string;
}

export interface DiseasePageFAQ {
  question: string;
  answer: string;
}

export interface DiseasePagePatientStory {
  quote: string;
  attribution: string;
}

export interface DiseasePageAboutCondition {
  name: string;
  alternateNames: string[];
  description: string;
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
  patientStory: DiseasePagePatientStory;
  faqs: DiseasePageFAQ[];
  finalCta: string;
  disclaimer: string;
  /** Cancer + neurological pages get a prominent top-of-page disclaimer per GIOS_P7. */
  disclaimerProminent: boolean;
  aboutCondition: DiseasePageAboutCondition;
  isPublished: boolean;
}
