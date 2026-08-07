import { createClient } from "@/lib/supabase/server";
import { DOCTOR_SEED } from "@/lib/content/doctors-seed";

export interface ConsultationPoint {
  heading: string;
  body: string;
}

export interface Doctor {
  slug: string;
  display_order: number;
  full_name: string;
  role_title: string;
  header_subline: string | null;
  bio_paragraphs: string[];
  short_bio: string | null;
  specializations: string[];
  consultation_points: ConsultationPoint[] | null;
  philosophy_quote: string | null;
  college_name: string | null;
  credential_name: string | null;
  credential_year: string | null;
  registration_number: string | null;
  registration_council: string | null;
  photo_url: string | null;
  photo_alt: string | null;
  social_instagram: string | null;
  social_linkedin: string | null;
  social_youtube: string | null;
}

/**
 * All published doctors, ordered for the /about/ and /our-doctors/ pages.
 * Falls back to the bundled seed (mirrors the Supabase seed exactly) when
 * Supabase isn't configured yet, matching the pattern used by
 * lib/data/*.ts elsewhere on this site — so these pages never render
 * empty and `npm run build` always works before Supabase is connected.
 */
export async function getDoctors(): Promise<Doctor[]> {
  const supabase = createClient();
  if (!supabase) return DOCTOR_SEED;

  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  if (error || !data || data.length === 0) return DOCTOR_SEED;

  return data;
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  const seedMatch = DOCTOR_SEED.find((doctor) => doctor.slug === slug) ?? null;

  const supabase = createClient();
  if (!supabase) return seedMatch;

  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error || !data) return seedMatch;

  return data;
}
