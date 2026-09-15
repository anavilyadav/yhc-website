/**
 * Root Cause Assessment — a short, guided pre-consultation quiz,
 * confirmed with Dr Anavil (chat, 2026-09-16) as the flagship
 * interactive element for the site (inspired by a competitor's
 * assessment tool, adapted here). Deliberately not a diagnosis or a
 * symptom score — just structured questions that (a) make the visitor
 * feel heard before they even book, and (b) hand the clinic a
 * genuinely useful, structured lead instead of a bare "hi" message.
 *
 * No backend/DB submission — answers are compiled into a pre-filled
 * WhatsApp message the patient sends themselves, same pattern as
 * every other WhatsApp CTA on the site (see lib/whatsapp.ts).
 */
export const CONCERN_OPTIONS = [
  "Skin condition (Vitiligo, Psoriasis, Eczema)",
  "Autoimmune disease",
  "Kidney disease / high creatinine",
  "Autism / child development",
  "PCOS / women's hormonal health",
  "Thyroid disorder",
  "Migraine / chronic headache",
  "Joint pain / arthritis",
  "Anxiety, stress or sleep issues",
  "Digestive issues",
  "Cancer support",
  "Genetic / rare disease",
  "Men's health",
  "Cardiac support",
  "Child health (general)",
  "Something else",
];

export const DURATION_OPTIONS = [
  "Less than 1 month",
  "1-6 months",
  "6 months to 2 years",
  "More than 2 years",
];

export const PRIOR_TREATMENT_OPTIONS = [
  "No, this is new",
  "Yes — allopathic/conventional treatment",
  "Yes — other homeopathy",
  "Yes — multiple approaches",
];

export const IMPACT_OPTIONS = ["Mild — manageable", "Moderate — noticeable impact", "Severe — significantly affecting daily life"];

export const CONSULTATION_PREFERENCE_OPTIONS = [
  "Online (I'm not in Jaipur)",
  "In-clinic (Jaipur)",
  "Not sure yet",
];

export interface AssessmentAnswers {
  concern: string;
  duration: string;
  priorTreatment: string;
  impact: string;
  preference: string;
  name: string;
  phone: string;
}

export function buildAssessmentWhatsAppMessage(answers: AssessmentAnswers): string {
  return [
    "Hello, I just completed the Root Cause Assessment on your website. Here are my details:",
    `Name: ${answers.name}`,
    `Main concern: ${answers.concern}`,
    `Duration: ${answers.duration}`,
    `Previous treatment: ${answers.priorTreatment}`,
    `Impact on daily life: ${answers.impact}`,
    `Preferred consultation: ${answers.preference}`,
    "Please review my case and let me know the next step.",
  ].join("\n");
}
