import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/lib/supabase/queries/doctors";
import { getInitials } from "@/lib/utils";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6 text-center">
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-navy/10 bg-cream-bg">
        {doctor.photo_url ? (
          <Image src={doctor.photo_url} alt={doctor.photo_alt ?? doctor.full_name} fill sizes="112px" className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-serif text-2xl text-navy/30">
            {getInitials(doctor.full_name)}
          </div>
        )}
      </div>

      <h2 className="mt-4 font-serif text-xl text-navy">{doctor.full_name}</h2>
      <p className="mt-1 text-sm font-semibold text-amber-dark">{doctor.role_title}</p>

      {doctor.short_bio && (
        <p className="mt-4 text-sm leading-relaxed text-text-mid">{doctor.short_bio}</p>
      )}

      {/* mt-auto pins this to the same baseline across cards regardless of
          how long each doctor's bio text runs — otherwise a shorter bio
          leaves its button sitting noticeably higher than its neighbour's. */}
      <Link
        href={`/our-doctors/${doctor.slug}`}
        className="mt-6 inline-block self-center rounded-lg bg-amber px-6 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-cream sm:mt-auto"
      >
        View {doctor.full_name}&rsquo;s Full Profile →
      </Link>
    </div>
  );
}
