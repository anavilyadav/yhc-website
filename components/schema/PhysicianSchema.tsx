import type { Doctor } from "@/lib/supabase/queries/doctors";
import { siteConfig } from "@/lib/site-config";

const CLINIC_ID = `${siteConfig.url}/#clinic`;

interface Props {
  doctor: Doctor;
}

/**
 * Renders one Physician JSON-LD block, matching the structure specified in
 * GIOS_P2_SEO_Schema_WordPress.docx (Section 5A/5B), adapted to the
 * Next.js /our-doctors/[slug] route. Optional fields (alumniOf,
 * registration/hasCredential, sameAs) are only emitted when the
 * corresponding Supabase column is filled in — never with placeholder text.
 */
export function PhysicianSchema({ doctor }: Props) {
  const url = `${siteConfig.url}/our-doctors/${doctor.slug}/`;

  const sameAs = [doctor.social_instagram, doctor.social_linkedin, doctor.social_youtube].filter(
    (v): v is string => Boolean(v)
  );

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${url}#doctor`,
    name: doctor.full_name,
    description: doctor.short_bio ?? undefined,
    image: doctor.photo_url ?? undefined,
    url,
    jobTitle: doctor.role_title,
    worksFor: { "@id": CLINIC_ID },
    medicalSpecialty: doctor.specializations,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    telephone: siteConfig.phone.e164,
  };

  if (doctor.college_name) {
    schema.alumniOf = {
      "@type": "EducationalOrganization",
      name: doctor.college_name,
    };
  }

  if (doctor.credential_name) {
    schema.hasCredential = {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: doctor.credential_name,
      ...(doctor.credential_year ? { dateCreated: doctor.credential_year } : {}),
      recognizedBy: { "@type": "Organization", name: "Central Council of Homeopathy, India" },
    };
  }

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  // Strip any undefined values before serialising
  const clean = JSON.parse(JSON.stringify(schema));

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(clean) }}
    />
  );
}
