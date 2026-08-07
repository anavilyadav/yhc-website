import Image from "next/image";
import type { Doctor } from "@/lib/supabase/queries/doctors";
import { siteConfig } from "@/lib/site-config";
import { getInitials } from "@/lib/utils";

/**
 * Mandatory on every blog post and disease page per GIOS_P7_Governance_
 * Compliance.docx Section 10 (Author Verification & E-E-A-T): photo +
 * name + qualification + registration number + years of practice +
 * "Last reviewed" date. Registration number is omitted gracefully when
 * not yet confirmed in Supabase, rather than showing placeholder text.
 */
export function AuthorBox({ doctor, lastReviewed }: { doctor: Doctor | null; lastReviewed: string }) {
  const name = doctor?.full_name ?? siteConfig.doctors.physician.name;
  const roleTitle = doctor?.role_title ?? "Homeopathic Physician";
  const credential = doctor?.credential_name ?? "BHMS";
  const credentialYear = doctor?.credential_year;
  const registrationNumber = doctor?.registration_number;
  const registrationCouncil = doctor?.registration_council;
  const photoUrl = doctor?.photo_url ?? null;
  const initials = getInitials(name);

  return (
    <div className="mt-10 flex items-start gap-4 rounded-xl border border-navy/10 bg-cream-bg p-5">
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy/10 font-serif text-lg text-navy/50">
        {photoUrl ? (
          <Image src={photoUrl} alt={doctor?.photo_alt ?? name} fill sizes="56px" className="object-cover" />
        ) : (
          initials
        )}
      </div>
      <div>
        <p className="text-sm font-bold text-navy">Written by {name}</p>
        <p className="text-xs leading-relaxed text-text-mid">
          {roleTitle} · {credential}
          {credentialYear ? ` (${credentialYear})` : ""}
          {registrationNumber && ` · ${registrationCouncil ?? "Reg. No."} ${registrationNumber}`}
        </p>
        <p className="mt-1 text-[11px] text-text-light">Last reviewed: {lastReviewed}</p>
      </div>
    </div>
  );
}
