"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { getInitials } from "@/lib/utils";
import type { Doctor } from "@/lib/supabase/queries/doctors";
import type { DiseasePageHero } from "@/lib/types";

export default function DiseaseHero({
  hero,
  conditionName,
  doctor = null,
  breadcrumbParent = { label: "Conditions We Treat", href: "/#conditions" },
}: {
  hero: DiseasePageHero;
  conditionName: string;
  doctor?: Doctor | null;
  breadcrumbParent?: { label: string; href: string };
}) {
  const doctorName = doctor?.full_name ?? siteConfig.doctors.physician.name;
  const doctorPhoto = doctor?.photo_url ?? null;

  return (
    <section className="bg-cream px-5 py-14 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-text-mid">
          <Link href="/" className="hover:text-amber-dark">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <Link href={breadcrumbParent.href} className="hover:text-amber-dark">
            {breadcrumbParent.label}
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-navy">{conditionName}</span>
        </nav>

        {/*
          Doctor thumbnail above the fold — GIOS_P5 Zone 1 spec ("small
          circular photo of Dr. Anavil with name and qualification").
          Falls back to initials (never a stock photo) until a real photo
          exists in Supabase, same graceful pattern as AuthorBox. The
          "Read Reviews on Google" link goes to the real, verifiable GBP
          profile rather than a fabricated star rating — there is no
          live-embedded review count on this site yet (that needs an
          Elfsight-style widget connected to the GBP account, not done),
          so a real number should never be invented here.
        */}
        <div className="mb-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy/10 font-serif text-sm text-navy/50">
            {doctorPhoto ? (
              <Image src={doctorPhoto} alt={doctorName} fill sizes="44px" className="object-cover" />
            ) : (
              getInitials(doctorName)
            )}
          </div>
          <p className="text-sm font-semibold text-navy">
            {doctorName} <span className="font-normal text-text-mid">· BHMS</span>
          </p>
          {siteConfig.social.googleBusinessProfile && (
            <>
              <span className="hidden text-text-light sm:inline">·</span>
              <a
                href={siteConfig.social.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-amber-dark underline underline-offset-2 hover:text-navy"
              >
                Read Patient Reviews on Google
              </a>
            </>
          )}
        </div>

        <h1 className="font-serif text-2xl leading-snug text-navy md:text-4xl md:leading-tight">
          {hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-text-mid md:text-base">
          {hero.subheadline}
        </p>

        {hero.trustLine && (
          <p className="mt-6 text-sm font-medium text-text-mid">
            {hero.trustLine.split("|").map((item, i, arr) => (
              <span key={item}>
                ✔ {item.trim()}
                {i < arr.length - 1 && <>&nbsp;&nbsp;</>}
              </span>
            ))}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row print:hidden">
          <Link
            href="/appointment"
            onClick={() => trackEvent("book_click", { entry_point: "disease_hero", condition: conditionName })}
            className="w-full rounded-sm bg-amber px-8 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
          >
            Book Your Consultation →
          </Link>
          <a
            href={whatsappLink(`Hello, I would like to book a consultation for ${conditionName}.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { entry_point: "disease_hero", condition: conditionName })}
            className="w-full rounded-sm border-2 border-navy px-8 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream sm:w-auto"
          >
            WhatsApp Us
          </a>
        </div>
        <p className="mt-3 text-xs text-text-light print:hidden">
          Not in Jaipur?{" "}
          <Link href="/online-consultation" className="font-semibold text-amber-dark hover:text-navy">
            Start an online consultation →
          </Link>
        </p>
      </div>
    </section>
  );
}
