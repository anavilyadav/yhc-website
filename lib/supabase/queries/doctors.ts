import { createClient } from "@/lib/supabase/server";

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
 * All published doctors, ordered for the /about/ page.
 * Falls back to an empty array (rather than throwing) when Supabase isn't
 * configured yet, matching the pattern used by lib/data/*.ts elsewhere on
 * this site — the About page simply skips a doctor section it has no data for.
 */
export async function getDoctors(): Promise<Doctor[]> {
  const supabase = createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error(`getDoctors: ${error.message}`);
    return [];
  }

  return data ?? [];
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  const supabase = createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error(`getDoctorBySlug(${slug}): ${error.message}`);
    return null;
  }

  return data;
}
