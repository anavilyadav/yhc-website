import Image from "next/image";
import type { Doctor } from "@/lib/supabase/queries/doctors";
import { siteConfig } from "@/lib/site-config";

/**
 * Mandatory on every blog post and disease page per GIOS_P7_Governance_
 * Compliance.docx Section 10 (Author Verification & E-E-A-T): photo +
 * name + qualification + registration number + years of practice +
 * "Last reviewed" date. Registration number is omitted gracefully when
 * not yet confirmed in Supabase, rather than showing placeholder text.
 */
export function AuthorBox({
  doctor,
  lastReviewed,
  reviewedBy,
}: {
  doctor: Doctor | null;
  lastReviewed: string;
  /** e.g. "Dr T P Yadav, BHMS, MD — Founder, 35+ years of clinical practice." Omitted when not applicable (e.g. Dr T P Yadav's own pages). */
  reviewedBy?: string;
}) {
  const name = doctor?.full_name ?? siteConfig.doctors.physician.name;
  const roleTitle = doctor?.role_title ?? "Homeopathic Physician";
  const credential = doctor?.credential_name ?? "BHMS";
  const credentialYear = doctor?.credential_year;
  const registrationNumber = doctor?.registration_number;
  const registrationCouncil = doctor?.registration_council;
  const photoUrl = doctor?.photo_url ?? null;

  return (
    <div className="mt-10 flex items-start gap-4 rounded-xl border border-navy/10 bg-cream-bg p-5">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-navy/10">
        {photoUrl ? (
          <Image src={photoUrl} alt={doctor?.photo_alt ?? name} fill sizes="56px" className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-navy/10 to-amber/10" />
        )}
      </div>
      <div>
        <p className="text-[15px] font-bold text-navy">Written by {name}</p>
        <p className="text-sm leading-relaxed text-text-mid">
          {roleTitle} · {credential}
          {credentialYear ? ` (${credentialYear})` : ""}
          {registrationNumber && ` · ${registrationCouncil ?? "Reg. No."} ${registrationNumber}`}
        </p>
        <p className="mt-1 text-[12px] text-text-light">Last reviewed: {lastReviewed}</p>
        {reviewedBy && (
          <p className="mt-0.5 text-[12px] text-text-light">Medically reviewed by {reviewedBy}</p>
        )}
      </div>
    </div>
  );
}
