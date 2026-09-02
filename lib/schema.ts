import { siteConfig } from "@/lib/site-config";

/**
 * JSON-LD builders for the homepage <head>.
 * Content and structure match GIOS_P2_SEO_Schema_WordPress.docx, Sections 4 & 5.
 *
 * Address and geo coordinates come from siteConfig.address (confirmed
 * directly by Dr Anavil, chat, 2026-08-29). Social links and aggregate
 * rating are still business details only the clinic owner can supply —
 * those read from environment variables and are omitted until set,
 * rather than shipped as fake placeholder data (a Google Schema policy
 * violation).
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
    logo: `${siteConfig.url}/logo-full.png`,
    image: `${siteConfig.url}/logo-full.png`,
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
    // Main (Bajaj Nagar) branch only — confirmed directly by Dr Anavil
    // (chat, 2026-08-29). Strictly appointment-only, closed Sundays; the
    // Jagatpura branch has its own separate schema, see buildJagatpuraClinicSchema().
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "20:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.latitude,
      longitude: siteConfig.address.longitude,
    },
  };

  if (siteConfig.email) schema.email = siteConfig.email;

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

const jagatpuraClinicId = `${siteConfig.url}/homeopathy-clinic-jagatpura-jaipur/#clinic`;

/**
 * JSON-LD for the Jagatpura branch — a distinct MedicalClinic location
 * linked to the main clinic via parentOrganization, per the multi-location
 * pattern in GIOS_P2_SEO_Schema_WordPress.docx. Address, geo and hours
 * confirmed directly by Dr Anavil (chat, 2026-08-29): open Sundays only,
 * strictly by appointment.
 */
export function buildJagatpuraClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": jagatpuraClinicId,
    name: `${siteConfig.name} — Jagatpura`,
    description:
      "Jagatpura branch of Yadav Homeo Clinic — classical homeopathy for chronic disease, open Sundays. Founded by Dr T P Yadav, now led by Dr T P Yadav and Dr Anavil Yadav (BHMS).",
    url: `${siteConfig.url}/homeopathy-clinic-jagatpura-jaipur/`,
    parentOrganization: { "@id": clinicId },
    logo: `${siteConfig.url}/logo-full.png`,
    image: `${siteConfig.url}/logo-full.png`,
    telephone: "+91-9057070705",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "14:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-7, Ashish Vihar, Mahal Road, Jagatpura",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302017",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.82939387669687",
      longitude: "75.84176887494046",
    },
  };
}

/**
 * Tells voice assistants (Google Assistant, etc.) which homepage sections
 * are best suited for text-to-speech readout. Per GIOS_P4_GEO_AI_Search.docx
 * GEO Layer 5 — the referenced CSS classes are applied directly on the
 * matching homepage sections (Hero, AboutTeaser, WhyChooseUs).
 */
export function buildSpeakableSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${siteConfig.name} — Jaipur Homeopathy`,
    url: `${siteConfig.url}/`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".clinic-intro", ".hero-text", ".why-choose-us"],
    },
  };
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

/**
 * JSON-LD builders for disease/treatment pages (e.g. /skin-diseases/).
 * Structure matches GIOS_P2_SEO_Schema_WordPress.docx, Section 6 master
 * template, adapted to this site's actual URL structure (pages live at
 * the site root, e.g. /skin-diseases/, rather than under a /treatments/
 * prefix — matching the links already shipped in ConditionsGrid and
 * Footer, since those are live and not to be changed for this).
 */
export function buildMedicalWebPageSchema(page: {
  slug: string;
  pageTitle: string;
  metaDescription: string;
  aboutCondition: { name: string; alternateNames: string[]; description: string };
  breadcrumbParent?: { label: string; href: string };
}) {
  const pageUrl = `${siteConfig.url}/${page.slug}/`;
  const parent = page.breadcrumbParent ?? { label: "Conditions We Treat", href: "/#conditions" };

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.pageTitle,
    url: pageUrl,
    description: page.metaDescription,
    about: {
      "@type": "MedicalCondition",
      name: page.aboutCondition.name,
      alternateName: page.aboutCondition.alternateNames,
      description: page.aboutCondition.description,
      possibleTreatment: {
        "@type": "MedicalTherapy",
        name: "Classical Homeopathic Treatment",
        description: "Constitutional homeopathic treatment at Yadav Homeo Clinic, Jaipur",
      },
    },
    author: { "@id": founderId },
    reviewedBy: { "@id": founderId },
    publisher: { "@id": clinicId },
    inLanguage: "en-IN",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: parent.label,
          item: `${siteConfig.url}${parent.href}`,
        },
        { "@type": "ListItem", position: 3, name: page.aboutCondition.name, item: pageUrl },
      ],
    },
  };
}

export function buildFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * JSON-LD builder for blog posts (e.g. /blog/[slug]/). Structure matches
 * GIOS_P2_SEO_Schema_WordPress.docx, Section 7's BlogPosting template.
 */
export function buildBlogPostingSchema(post: {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  secondaryKeywords: string[];
  publishedDate: string;
}) {
  const postUrl = `${siteConfig.url}/blog/${post.slug}/`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: postUrl,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Person",
      "@id": physicianId,
      name: siteConfig.doctors.physician.name,
      jobTitle: "Homeopathic Physician, BHMS",
      url: `${siteConfig.url}/our-doctors/${siteConfig.doctors.physician.slug}/`,
    },
    publisher: {
      "@type": "Organization",
      "@id": clinicId,
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo-full.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    articleSection: post.category,
    keywords: post.secondaryKeywords.join(", "),
    inLanguage: "en-IN",
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
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
