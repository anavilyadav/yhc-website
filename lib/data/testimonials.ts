import { supabase } from "@/lib/supabase";
import type { Testimonial } from "@/lib/types";

/**
 * Fallback seed — mirrors the `testimonials` table's seed data (see
 * supabase/migrations/0012_testimonials_anonymize.sql). Used only if
 * Supabase is unreachable or not yet configured. Source content:
 * STEP1_Homepage_Content.docx, Section 7. Per the 2026-09-11 build spec's
 * legal/compliance rules, patient testimonials use the anonymized "Patient
 * Experience" format — no full names, exact ages, or exact lab
 * values/percentages — rather than named-patient claims.
 */
const TESTIMONIAL_SEED: Testimonial[] = [
  {
    id: "seed-1",
    patient_name: "Patient",
    age: null,
    city: "Delhi",
    condition: "Vitiligo",
    quote:
      "I had vitiligo spreading on my face and hands for 6 years. Three dermatologists. Two other homeopaths. Nothing stopped the spread. Within 3 months of starting treatment with Dr Yadav, new patches stopped appearing. By the 7th month I could see pigment dots forming inside the old patches. It's been 14 months and my face patches have shown meaningful repigmentation. I still cannot believe it. Individual results vary.",
    treatment_duration: "14 months",
    is_featured: true,
    display_order: 1,
  },
  {
    id: "seed-2",
    patient_name: "Family Member",
    age: null,
    city: "Jaipur",
    condition: "Kidney Disease",
    quote:
      "My father's kidney health had declined significantly and his nephrologist recommended close monitoring. We were desperate for additional support. My cousin suggested Dr Yadav. We started homeopathic treatment alongside his ongoing nephrology care. Over the following months, his kidney function showed meaningful improvement, tracked through regular blood work with his nephrologist. We continue this integrated approach and are grateful for the support Dr Yadav has provided. Individual results vary.",
    treatment_duration: "6 months",
    is_featured: true,
    display_order: 2,
  },
  {
    id: "seed-3",
    patient_name: "Parent",
    age: null,
    city: "Jaipur",
    condition: "Autism",
    quote:
      "Our son was diagnosed with severe autism at age 2. He was non-verbal, had frequent meltdowns, and struggled to sleep through the night. After 8 months of Dr Yadav's treatment, he began sleeping through the night — that alone changed our family's life. By 12 months he said his first word. He is now attending school with support. This clinic gave us our son back. Individual results vary.",
    treatment_duration: "12 months",
    is_featured: true,
    display_order: 3,
  },
  {
    id: "seed-4",
    patient_name: "Patient",
    age: null,
    city: "Kota",
    condition: "Psoriasis",
    quote:
      "Psoriasis covered my arms, legs and scalp for 11 years. I was on methotrexate and steroids for 4 years with constant side effects. I came to Yadav Homeo Clinic as a last option. After 10 months of constitutional treatment, most of my skin has cleared — without any steroids. The improvement has been steady and real. I only wish I had come here first. Individual results vary.",
    treatment_duration: "10 months",
    is_featured: true,
    display_order: 4,
  },
];

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!supabase) return TESTIMONIAL_SEED;

  const { data, error } = await supabase
    .from("testimonials")
    .select(
      "id, patient_name, age, city, condition, quote, treatment_duration, is_featured, display_order"
    )
    .eq("is_published", true)
    .eq("is_featured", true)
    .order("display_order", { ascending: true })
    .limit(4);

  if (error || !data || data.length === 0) {
    return TESTIMONIAL_SEED;
  }

  return data as Testimonial[];
}
