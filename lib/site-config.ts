// Central, single source of truth for clinic identity data used across the site.
// Update here once — every component reads from this file.

export const siteConfig = {
  name: "Yadav Homeo Clinic",
  url: "https://yadavhomeoclinic.com",
  legalName: "Yadav Homeo Clinic",
  foundingYear: 1991,
  phone: {
    display: "+91-8949427254",
    e164: "+918949427254",
    whatsappNumber: "918949427254",
  },
  // Confirmed directly by Dr Anavil (chat, 2026-08-29) — both branches are
  // strictly appointment-only, no walk-ins. Full per-branch address/phone/
  // timings live in lib/data/contact.ts; this is the condensed, header-bar
  // version covering both branches.
  hours: {
    weekday: "Mon–Sat: 11 AM–8 PM (Bajaj Nagar) — by appointment only",
    sunday: "Sun: 11 AM–2 PM (Jagatpura) — by appointment only",
  },
  // Main Branch address, used by the clinic JSON-LD schema. Confirmed
  // directly by Dr Anavil (chat, 2026-08-29). Lat/long extracted from the
  // Google Maps embed link he shared, not estimated.
  address: {
    streetAddress: "A-21, Anita Colony, Bajaj Nagar, Near Gandhi Nagar Railway Station Gate No. 1",
    locality: "Jaipur",
    region: "Rajasthan",
    postalCode: "302015",
    country: "IN",
    latitude: "26.8720567766714",
    longitude: "75.7976175749421",
  },
  personalPhone: {
    display: "+91-8003231288",
    e164: "+918003231288",
  },
  email: process.env.NEXT_PUBLIC_CLINIC_EMAIL || null, // fill in real clinic email
  // Confirmed directly by Dr Anavil (chat, 2026-08-29) — no longer a
  // placeholder. Env var can still override if it ever changes.
  upiId: process.env.NEXT_PUBLIC_CLINIC_UPI || "paytmqr6in7uh@ptys",
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || null,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || null,
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || null,
    // Main branch's real Google Business Profile share link (chat,
    // 2026-08-29). This links to the real profile so a visitor can read
    // and verify reviews themselves — it is not a live embedded star
    // widget (that needs a separate service like Elfsight, connected to
    // the GBP account, which hasn't been set up yet).
    googleBusinessProfile:
      process.env.NEXT_PUBLIC_GBP_URL || "https://share.google/w79lFy9J9p50Wu8re",
  },
  doctors: {
    founder: {
      name: "Dr T P Yadav",
      title: "Founder & Chief Homeopathic Physician",
      slug: "dr-tp-yadav",
    },
    physician: {
      name: "Dr Anavil Yadav",
      title: "Homeopathic Physician (BHMS)",
      slug: "dr-anavil-yadav",
    },
  },
  stats: [
    { value: "35+", label: "Years of Trusted Practice" },
    { value: "1,00,000+", label: "Patients Treated" },
    { value: "5,000+", label: "Special Children Helped" },
    { value: "16+", label: "Disease Specialities" },
    { value: "2", label: "Clinic Locations in Jaipur" },
  ],
} as const;

/**
 * Builds a WhatsApp deep link with a pre-filled message, to the main
 * clinic number. Pass a condition name to personalise the message per
 * page/card.
 */
export function whatsappLink(message?: string): string {
  return whatsappLinkTo(siteConfig.phone.whatsappNumber, message);
}

/**
 * Same as whatsappLink but to an arbitrary number — used for the
 * Jagatpura branch, which has its own WhatsApp number distinct from the
 * main clinic line.
 */
export function whatsappLinkTo(whatsappNumber: string, message?: string): string {
  const defaultMessage =
    "Hello, I would like to book a consultation at Yadav Homeo Clinic.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}

export function telLink(): string {
  return `tel:${siteConfig.phone.e164}`;
}
