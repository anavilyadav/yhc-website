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
  personalPhone: {
    display: "+91-8003231288",
    e164: "+918003231288",
  },
  email: process.env.NEXT_PUBLIC_CLINIC_EMAIL || "", // fill in real clinic email
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
    { value: "14+", label: "Disease Specialities" },
    { value: "2", label: "Clinic Locations in Jaipur" },
  ],
} as const;

/**
 * Builds a WhatsApp deep link with a pre-filled message.
 * Pass a condition name to personalise the message per page/card.
 */
export function whatsappLink(message?: string): string {
  const defaultMessage =
    "Hello, I would like to book a consultation at Yadav Homeo Clinic.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${siteConfig.phone.whatsappNumber}?text=${text}`;
}

export function telLink(): string {
  return `tel:${siteConfig.phone.e164}`;
}
