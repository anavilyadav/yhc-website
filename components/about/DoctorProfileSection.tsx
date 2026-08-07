import Image from "next/image";
import type { Doctor } from "@/lib/supabase/queries/doctors";
import { getInitials } from "@/lib/utils";

interface Props {
  doctor: Doctor;
  photoSide: "left" | "right";
  ctaHref: string;
  ctaLabel: string;
}

export function DoctorProfileSection({ doctor, photoSide, ctaHref, ctaLabel }: Props) {
  const hasCredentialBlock =
    doctor.college_name || doctor.registration_number || doctor.credential_name;

  return (
    <section
      className="bg-white px-6 py-16 sm:py-24"
      id={doctor.slug}
      aria-labelledby={`${doctor.slug}-heading`}
    >
      <div
        className={`mx-auto grid max-w-5xl gap-10 sm:grid-cols-[280px_1fr] sm:gap-14 ${
          photoSide === "right" ? "sm:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Photo */}
        <div className="mx-auto w-full max-w-[280px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-navy/10 bg-cream-bg">
            {doctor.photo_url ? (
              <Image
                src={doctor.photo_url}
                alt={doctor.photo_alt ?? doctor.full_name}
                fill
                sizes="280px"
                className="object-cover"
                priority={doctor.display_order === 1}
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center bg-navy/5 font-serif text-4xl text-navy/30"
                aria-label={`Photo of ${doctor.full_name} coming soon`}
              >
                {getInitials(doctor.full_name)}
              </div>
            )}
          </div>

          {hasCredentialBlock && (
            <dl className="mt-5 space-y-1.5 text-sm text-text-mid">
              {doctor.college_name && (
                <div>
                  <dt className="inline font-semibold text-navy">Education: </dt>
                  <dd className="inline">
                    {doctor.credential_name ?? "BHMS"}
                    {doctor.credential_year ? `, ${doctor.credential_year}` : ""} —{" "}
                    {doctor.college_name}
                  </dd>
                </div>
              )}
              {doctor.registration_number && (
                <div>
                  <dt className="inline font-semibold text-navy">Registration: </dt>
                  <dd className="inline">
                    {doctor.registration_number}
                    {doctor.registration_council ? ` (${doctor.registration_council})` : ""}
                  </dd>
                </div>
              )}
            </dl>
          )}
        </div>

        {/* Story */}
        <div>
          <h2 id={`${doctor.slug}-heading`} className="font-serif text-2xl text-navy sm:text-3xl">
            {doctor.full_name}
          </h2>
          <p className="mt-1 text-sm font-semibold text-amber-dark">{doctor.role_title}</p>
          {doctor.header_subline && (
            <p className="mt-0.5 text-sm text-text-mid">{doctor.header_subline}</p>
          )}

          <div className="mt-6 space-y-4">
            {doctor.bio_paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-text-mid">
                {paragraph}
              </p>
            ))}
          </div>

          {doctor.philosophy_quote && (
            <blockquote className="mt-8 rounded-lg border border-green/25 bg-green-tint px-6 py-5">
              <p className="font-serif text-lg italic leading-relaxed text-navy">
                &ldquo;{doctor.philosophy_quote}&rdquo;
              </p>
              <cite className="mt-3 block text-sm not-italic font-semibold text-green">
                — {doctor.full_name}
              </cite>
            </blockquote>
          )}

          {doctor.specializations.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Specialisations
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {doctor.specializations.map((spec) => (
                  <li
                    key={spec}
                    className="rounded-full border border-amber/35 bg-amber-tint px-3.5 py-1.5 text-sm text-navy"
                  >
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {doctor.consultation_points && doctor.consultation_points.length > 0 && (
            <div className="mt-10">
              <h3 className="font-serif text-xl text-navy">
                What a Consultation With {doctor.full_name.replace("Dr ", "Dr ")} Looks Like
              </h3>
              <ul className="mt-4 space-y-4">
                {doctor.consultation_points.map((point) => (
                  <li key={point.heading}>
                    <p className="font-semibold text-navy">{point.heading}</p>
                    <p className="mt-1 text-sm leading-relaxed text-text-mid">{point.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href={ctaHref}
            className="mt-10 inline-block rounded-lg bg-amber px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-amber-dark hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            {ctaLabel} →
          </a>
        </div>
      </div>
    </section>
  );
}
