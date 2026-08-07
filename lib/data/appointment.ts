import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { FaqItem, PricingPlan } from "@/lib/types";

/**
 * Fallback pricing used until the `pricing_plans` table is seeded in
 * Supabase (see supabase/migrations/0002_appointment_contact.sql) or
 * whenever Supabase env vars aren't configured (e.g. local dev).
 *
 * Only two of the four fees are known today. The two figures below
 * (₹3,500 in-clinic first consultation, ₹2,500 in-clinic follow-up)
 * are confirmed in three separate project documents (STEP3 doc's own
 * mockup reference, the CRM sheet, and the Razorpay "Single Visit"
 * price in the Constitution doc), so they're safe defaults. Online
 * fees are genuinely undecided — no document states a number — so
 * they stay null and the UI shows "Fee to be confirmed" instead of
 * guessing.
 */
const FALLBACK_PRICING: PricingPlan[] = [
  {
    id: "fallback-in-clinic-first",
    code: "in_clinic_first",
    title: "First Consultation — In Clinic",
    mode: "in_clinic",
    priceInr: 3500,
    inclusions: [
      "45 to 60 minutes with the doctor",
      "Full case history and analysis",
      "Constitutional remedy prescription",
      "Detailed guidance on diet, lifestyle and what to expect",
    ],
  },
  {
    id: "fallback-in-clinic-followup",
    code: "in_clinic_followup",
    title: "Follow-Up Consultation — In Clinic",
    mode: "in_clinic",
    priceInr: 2500,
    inclusions: [
      "Review of progress since last visit",
      "Prescription adjustment as needed",
      "Report review if applicable",
      "Guidance for the next 4 to 6 weeks",
    ],
  },
  {
    id: "fallback-online-first",
    code: "online_first",
    title: "First Consultation — Online",
    mode: "online",
    priceInr: null,
    inclusions: [
      "Detailed review of your intake form and medical records",
      "Full constitutional analysis",
      "Personalised prescription sent within 24 to 48 hours",
      "Diet and lifestyle instructions",
      "Available to patients across India and internationally",
    ],
  },
  {
    id: "fallback-online-followup",
    code: "online_followup",
    title: "Follow-Up Consultation — Online",
    mode: "online",
    priceInr: null,
    inclusions: [
      "Progress review based on your update",
      "Prescription modification as needed",
      "Report analysis",
      "Guidance for the next follow-up period",
    ],
  },
];

const FALLBACK_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    sortOrder: 1,
    question: "How long does the first consultation take?",
    answer:
      "The first consultation typically takes 45 minutes to 1 hour — sometimes longer for complex cases. Please set aside this time fully. Do not rush. The depth of your first consultation directly determines the accuracy of your prescription and how quickly you respond to treatment.",
  },
  {
    id: "faq-2",
    sortOrder: 2,
    question: "Do I get a prescription on the same day?",
    answer:
      "For in-clinic patients — yes, your prescription is given at the end of the consultation. For online patients — your prescription is sent within 24 to 48 hours of receiving your complete information and payment confirmation.",
  },
  {
    id: "faq-3",
    sortOrder: 3,
    question: "Do I need to stop my allopathic medicines before starting homeopathy?",
    answer:
      "No. Absolutely not. Never stop any prescribed medication without guidance from your allopathic doctor. Homeopathy works safely alongside conventional medicines. As your condition improves under homeopathic treatment, any reduction in allopathic medicines is done gradually, under medical supervision. We will guide you through this process when the time is appropriate.",
  },
  {
    id: "faq-4",
    sortOrder: 4,
    question: "Is homeopathy safe during pregnancy?",
    answer:
      "Yes — constitutional homeopathic medicines are completely safe during pregnancy. In fact, many pregnant patients specifically seek homeopathy because it avoids the risks of chemical medications. However, please always inform us if you are pregnant so we can prescribe with appropriate care.",
  },
  {
    id: "faq-5",
    sortOrder: 5,
    question: "Can children take homeopathic medicines?",
    answer:
      "Homeopathy is ideal for children. The medicines are safe from birth, there are no side effects, and children — because their vital force is strong — often respond faster to homeopathic treatment than adults. The tiny sweet pills are easy to give to even very young children.",
  },
  {
    id: "faq-6",
    sortOrder: 6,
    question: "How often do I need to visit or follow up?",
    answer:
      "For most chronic conditions, follow-up is every 4 to 6 weeks. At each follow-up we assess your response to the medicine and adjust the prescription accordingly. Between follow-ups, you can contact us on WhatsApp if any significant change or concern arises.",
  },
  {
    id: "faq-7",
    sortOrder: 7,
    question: "How long will the treatment take before I see results?",
    answer:
      "For acute conditions — a sudden cold, fever, colic, acute allergy — correctly prescribed homeopathy works within hours or days. For chronic conditions — diseases that have been present for months or years — results take longer. Most patients see meaningful change within 3 to 4 months. Significant improvement typically comes in 6 to 12 months. We give you an honest timeline based on your specific case at the first consultation.",
  },
  {
    id: "faq-8",
    sortOrder: 8,
    question: "I am not in Jaipur. How does online consultation work?",
    answer:
      "Fill our online consultation form, share your medical reports via WhatsApp, pay the fee by UPI, and receive your prescription within 24 to 48 hours. Follow-up is done online every 4 to 6 weeks. Medicines are available at any homeopathy pharmacy in your city or can be ordered online. We have online patients from every state in India and from 15+ countries.",
  },
  {
    id: "faq-9",
    sortOrder: 9,
    question: "What is the difference between your two Jaipur clinic locations?",
    answer:
      "Both clinics — our main branch and our Jagatpura branch — offer the same standard of care and the same constitutional homeopathic approach. The choice of location depends on which is more convenient for you in Jaipur. Please check the timings for each location on our Contact page as they may differ.",
  },
  {
    id: "faq-10",
    sortOrder: 10,
    question: "Can I consult for my child if I am not in Jaipur?",
    answer:
      "Absolutely. Our online consultation process works equally well for paediatric cases including autism, developmental delays and genetic conditions. We ask parents to complete a detailed intake form and also share any school or therapist reports. Video call can be arranged in specific cases where direct observation is helpful.",
  },
  {
    id: "faq-11",
    sortOrder: 11,
    question: "What if homeopathy does not work for my condition?",
    answer:
      "We are honest from the beginning about what homeopathy can realistically achieve for your specific condition. If after a fair trial of treatment — typically 4 to 6 months — we are not seeing the expected response, we will tell you clearly. We will suggest appropriate next steps and refer you where necessary. We do not keep patients on treatment indefinitely without meaningful progress.",
  },
  {
    id: "faq-12",
    sortOrder: 12,
    question: "Is there a cancellation or rescheduling policy?",
    answer:
      "We understand that plans change. If you need to reschedule your appointment, please inform us at least 24 hours in advance via call or WhatsApp so that we can offer your slot to another patient. We will reschedule your appointment at the earliest convenient time.",
  },
];

export async function getPricingPlans(): Promise<PricingPlan[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return FALLBACK_PRICING;

  const { data, error } = await supabase
    .from("pricing_plans")
    .select("id, code, title, mode, price_inr, inclusions")
    .order("code");

  if (error || !data || data.length === 0) return FALLBACK_PRICING;

  return data.map((row) => ({
    id: row.id,
    code: row.code,
    title: row.title,
    mode: row.mode,
    priceInr: row.price_inr,
    inclusions: row.inclusions ?? [],
  }));
}

export async function getAppointmentFaqs(): Promise<FaqItem[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return FALLBACK_FAQS;

  const { data, error } = await supabase
    .from("faqs")
    .select("id, question, answer, sort_order")
    .eq("page", "appointment")
    .order("sort_order");

  if (error || !data || data.length === 0) return FALLBACK_FAQS;

  return data.map((row) => ({
    id: row.id,
    question: row.question,
    answer: row.answer,
    sortOrder: row.sort_order,
  }));
}
