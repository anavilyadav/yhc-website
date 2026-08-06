import { siteConfig } from "@/lib/site-config";

/**
 * JSON-LD builders for the homepage <head>.
 * Content and structure match GIOS_P2_SEO_Schema_WordPress.docx, Sections 4 & 5.
 *
 * A few fields (address, geo coordinates, social links, aggregate rating)
 * are business details only the clinic owner can supply accurately.
 * These read from environment variables — set them in .env.local (see
 * .env.example) or Vercel project settings. Until set, those optional
 * fields are simply omitted from the schema rather than shipped as fake
 * placeholder data, which would be a Google Schema policy violation.
 */

const clinicId = `${siteConfig.url}/#clinic`;
const founderId = `${siteConfig.url}/our-doctors/${siteConfig.doctors.founder.slug}/#doctor`;
const physicianId = `${siteConfig.url}/our-doctors/${siteConfig.doctors.physician.slug}/#doctor`;

function socialLinks(): string[] {
  const links = [
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    process.env.NEXT_PUBLIC_GBP_URL,
  ].filter((v): v is string => Boolean(v));
  return links;
}

export function buildClinicSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": clinicId,
    name: siteConfig.name,
    alternateName: ["Yadav Homeopathy Clinic", "YHC Jaipur"],
    description:
      "Jaipur's most trusted classical homeopathy clinic since 1991. Specialising in vitiligo, autism, kidney disease, autoimmune conditions and all chronic diseases. Founded by Dr T P Yadav. Now led by Dr T P Yadav and Dr Anavil Yadav (BHMS). 1 lakh+ patients treated.",
    url: siteConfig.url,
    telephone: siteConfig.phone.e164,
    foundingDate: String(siteConfig.foundingYear),
    medicalSpecialty: [
      "Homeopathy",
      "Classical Homeopathy",
      "Chronic Disease Management",
      "Paediatric Homeopathy",
      "Autoimmune Disease Treatment",
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    doctor: [{ "@id": founderId }, { "@id": physicianId }],
  };

  if (siteConfig.email) schema.email = siteConfig.email;

  const addressLine = process.env.NEXT_PUBLIC_CLINIC_ADDRESS;
  const pinCode = process.env.NEXT_PUBLIC_CLINIC_PINCODE;
  if (addressLine) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: addressLine,
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      ...(pinCode ? { postalCode: pinCode } : {}),
      addressCountry: "IN",
    };
  }

  const lat = process.env.NEXT_PUBLIC_CLINIC_LAT;
  const lng = process.env.NEXT_PUBLIC_CLINIC_LNG;
  if (lat && lng) {
    schema.geo = { "@type": "GeoCoordinates", latitude: lat, longitude: lng };
  }

  const links = socialLinks();
  if (links.length > 0) schema.sameAs = links;

  const ratingValue = process.env.NEXT_PUBLIC_GOOGLE_RATING;
  const reviewCount = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT;
  if (ratingValue && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: "5",
    };
  }

  return schema;
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildPhysicianSchemas() {
  const founder = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": founderId,
    name: siteConfig.doctors.founder.name,
    description:
      "Founder and Chief Homeopathic Physician at Yadav Homeo Clinic, Jaipur. 35+ years of classical homeopathic practice. Specialist in vitiligo, autism, kidney disease, autoimmune conditions and genetic diseases.",
    url: `${siteConfig.url}/our-doctors/${siteConfig.doctors.founder.slug}/`,
    jobTitle: siteConfig.doctors.founder.title,
    worksFor: { "@id": clinicId },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "BHMS",
      recognizedBy: { "@type": "Organization", name: "Central Council of Homeopathy, India" },
    },
    medicalSpecialty: [
      "Homeopathy",
      "Vitiligo Treatment",
      "Autism",
      "Kidney Disease",
      "Autoimmune Diseases",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    telephone: siteConfig.phone.e164,
  };

  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": physicianId,
    name: siteConfig.doctors.physician.name,
    givenName: "Anavil",
    familyName: "Yadav",
    description:
      "Homeopathic physician (BHMS 2016) at Yadav Homeo Clinic, Jaipur. Second-generation classical homeopath. Son of Dr T P Yadav (35+ years experience). Specialist in chronic skin diseases, autoimmune conditions, autism and online homeopathy consultations pan-India and internationally.",
    url: `${siteConfig.url}/our-doctors/${siteConfig.doctors.physician.slug}/`,
    jobTitle: siteConfig.doctors.physician.title,
    worksFor: { "@id": clinicId },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "BHMS",
      dateCreated: "2016",
      recognizedBy: { "@type": "Organization", name: "Central Council of Homeopathy, India" },
    },
    knowsAbout: [
      "Classical Homeopathy",
      "Vitiligo Treatment",
      "Chronic Kidney Disease",
      "Autism Spectrum Disorder",
      "Autoimmune Disease",
      "PCOD Treatment",
      "Online Homeopathy Consultation",
    ],
    telephone: siteConfig.phone.e164,
  };

  return [founder, physician];
}
