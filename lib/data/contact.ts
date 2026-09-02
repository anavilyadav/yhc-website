import { getSupabaseServerClient } from "@/lib/supabase/server";
import { siteConfig } from "@/lib/site-config";
import type { ClinicLocation } from "@/lib/types";

// Confirmed directly by Dr Anavil (chat, 2026-08-29) — addresses, phone
// numbers, timings and Google Maps links for both branches. Both clinics
// are strictly appointment-only; there is no walk-in service at either.
const FALLBACK_CLINICS: ClinicLocation[] = [
  {
    id: "fallback-main",
    slug: "main",
    name: "Yadav Homeo Clinic — Main Branch",
    addressLine: "A-21, Anita Colony, Bajaj Nagar, Near Gandhi Nagar Railway Station Gate No. 1",
    city: "Jaipur",
    state: "Rajasthan",
    pinCode: "302015",
    phone: siteConfig.phone.display,
    whatsapp: siteConfig.phone.whatsappNumber,
    landmark: "Near Gandhi Nagar Railway Station, Gate No. 1",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.993728813466!2d75.7976175749421!3d26.8720567766714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d3560b52b5%3A0x7b2f32354e44eec6!2sYadav%20Homeo%20Clinic%20(Dr.T.P.%20Yadav)%20(Dr.%20Anavil%20Yadav)%20-%20Best%20homeopathy%20doctor%2C%20Best%20homeopathy%20clinic!5e1!3m2!1sen!2sin!4v1788346103210!5m2!1sen!2sin",
    directionsUrl: "https://maps.app.goo.gl/bpQdQ7o4yKUTXWpf6",
    timingsWeekday: "Monday–Saturday: 11:00 AM–8:00 PM (strictly by appointment only)",
    timingsSunday: "Sunday: Closed (Jagatpura branch open 11 AM–2 PM)",
  },
  {
    id: "fallback-jagatpura",
    slug: "jagatpura",
    name: "Yadav Homeo Clinic — Jagatpura",
    addressLine: "A-7, Ashish Vihar, Mahal Road, Jagatpura",
    city: "Jaipur",
    state: "Rajasthan",
    pinCode: "302017",
    phone: "+91-9057070705",
    whatsapp: "919057070705",
    landmark: null,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.1922968068257!2d75.84176887494046!3d26.82939387669687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9341bacfd55%3A0x2f2b01b9e8a44be1!2sYadav%20Homeo%20Clinic%20Jagatpura%20(Dr%20T.P.%20Yadav)%20(Dr%20Anavil%20Yadav)%20-%20Best%20homeopathy%20doctor%2C%20best%20homeopathy%20clinic!5e1!3m2!1sen!2sin!4v1788346039070!5m2!1sen!2sin",
    directionsUrl: "https://maps.app.goo.gl/mQoVBJz4FMZmSHZD6",
    timingsWeekday: "Monday–Saturday: Closed",
    timingsSunday: "Sunday: 11:00 AM–2:00 PM (strictly by appointment only)",
  },
];

export async function getClinicLocations(): Promise<ClinicLocation[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return FALLBACK_CLINICS;

  const { data, error } = await supabase
    .from("clinic_locations")
    .select(
      "id, slug, name, address_line, city, state, pin_code, phone, whatsapp, landmark, map_embed_url, directions_url, timings_weekday, timings_sunday"
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
    directionsUrl: row.directions_url,
    timingsWeekday: row.timings_weekday,
    timingsSunday: row.timings_sunday,
  }));
}
