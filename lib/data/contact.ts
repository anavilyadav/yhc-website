import { getSupabaseServerClient } from "@/lib/supabase/server";
import { siteConfig } from "@/lib/site-config";
import type { ClinicLocation } from "@/lib/types";

const FALLBACK_CLINICS: ClinicLocation[] = [
  {
    id: "fallback-main",
    slug: "main",
    name: "Yadav Homeo Clinic — Main Branch",
    addressLine: null, // PENDING — must match Google Business Profile exactly
    city: "Jaipur",
    state: "Rajasthan",
    pinCode: null, // PENDING
    phone: siteConfig.phone.display,
    whatsapp: siteConfig.phone.whatsappNumber,
    landmark: null, // PENDING (optional)
    mapEmbedUrl: null, // PENDING — Google Maps > Share > Embed a map
    timingsWeekday: "Mon–Sat: Morning 9:00 AM–1:30 PM · Evening 5:00 PM–8:30 PM",
    timingsSunday: "Sunday: 10:00 AM–1:00 PM (by prior appointment only)",
  },
  {
    id: "fallback-jagatpura",
    slug: "jagatpura",
    name: "Yadav Homeo Clinic — Jagatpura",
    addressLine: null, // PENDING
    city: "Jaipur",
    state: "Rajasthan",
    pinCode: null, // PENDING
    phone: siteConfig.phone.display, // PENDING confirm if Jagatpura has a different number
    whatsapp: siteConfig.phone.whatsappNumber,
    landmark: null, // PENDING (optional)
    mapEmbedUrl: null, // PENDING
    timingsWeekday: "", // PENDING — not yet confirmed
    timingsSunday: "", // PENDING — not yet confirmed
  },
];

export async function getClinicLocations(): Promise<ClinicLocation[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return FALLBACK_CLINICS;

  const { data, error } = await supabase
    .from("clinic_locations")
    .select(
      "id, slug, name, address_line, city, state, pin_code, phone, whatsapp, landmark, map_embed_url, timings_weekday, timings_sunday"
    )
    .order("slug");

  if (error || !data || data.length === 0) return FALLBACK_CLINICS;

  return data.map((row) => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    addressLine: row.address_line,
    city: row.city,
    state: row.state,
    pinCode: row.pin_code,
    phone: row.phone,
    whatsapp: row.whatsapp,
    landmark: row.landmark,
    mapEmbedUrl: row.map_embed_url,
    timingsWeekday: row.timings_weekday,
    timingsSunday: row.timings_sunday,
  }));
}
