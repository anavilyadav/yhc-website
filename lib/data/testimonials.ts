import { supabase } from "@/lib/supabase";
import type { Testimonial } from "@/lib/types";

/**
 * Fallback seed — mirrors the `testimonials` table's initial seed data
 * (see supabase/schema.sql). Used only if Supabase is unreachable or not
 * yet configured. Source content: STEP1_Homepage_Content.docx, Section 7.
 * Real patient names used with consent per clinic's existing testimonials.
 */
const TESTIMONIAL_SEED: Testimonial[] = [
  {
    id: "seed-1",
    patient_name: "Sunita Verma",
    age: 31,
    city: "Delhi",
    condition: "Vitiligo",
    quote:
      "I had vitiligo spreading on my face and hands for 6 years. Three dermatologists. Two other homeopaths. Nothing stopped the spread. Within 3 months of starting treatment with Dr Yadav, new patches stopped appearing. By the 7th month I could see pigment dots forming inside the old patches. It's been 14 months and my face patches are 60% recovered. I still cannot believe it.",
    treatment_duration: "14 months",
    is_featured: true,
    display_order: 1,
  },
  {
    id: "seed-2",
    patient_name: "Ajay Sharma",
    age: 42,
    city: "Jaipur",
    condition: "Kidney Disease",
    quote:
      "My father's creatinine was 6.8 in February. The nephrologist said dialysis was the next step. We were desperate. My cousin suggested Dr Yadav. We started homeopathic treatment in March. By September — just 6 months later — creatinine came down to 3.1. He is still not on dialysis. We share his blood reports every 6 weeks. We thank God and Dr Yadav every single day.",
    treatment_duration: "6 months",
    is_featured: true,
    display_order: 2,
  },
  {
    id: "seed-3",
    patient_name: "Priya Sharma",
    age: null,
    city: "Jaipur",
    condition: "Autism",
    quote:
      "Our son was diagnosed with severe autism at age 2. He was non-verbal, had 5-6 meltdowns a day, couldn't sleep more than 3 hours at night. After 8 months of Dr Yadav's treatment, he began sleeping through the night — that alone changed our family's life. By 12 months he said his first word. He is now 7 and attending school with support. This clinic gave us our son back.",
    treatment_duration: "12 months",
    is_featured: true,
    display_order: 3,
  },
  {
    id: "seed-4",
    patient_name: "Vikram Singh",
    age: 38,
    city: "Kota",
    condition: "Psoriasis",
    quote:
      "Psoriasis covered my arms, legs and scalp for 11 years. I was on methotrexate and steroids for 4 years with constant side effects. I came to Yadav Homeo Clinic as a last option. After 10 months of constitutional treatment, my skin is 75% clear — without any steroids. The improvement has been steady and real. I only wish I had come here first.",
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
