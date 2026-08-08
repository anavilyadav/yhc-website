"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/#conditions" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "Appointment", href: "/appointment" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy">
      {/*
        Clinic hours + click-to-call phone visible on every page — GIOS_P4
        GEO Layer 2 EXP-11 (contact info must be visible site-wide) and the
        sitemap doc's recommended "Option A" static bar, judged the better
        fit for the classical/premium positioning over a scrolling ticker.
      */}
      <div className="hidden items-center justify-between gap-4 border-b border-amber/20 bg-navy px-5 py-1.5 text-[11px] text-cream/60 md:flex">
        <span>
          {siteConfig.hours.weekday} · {siteConfig.hours.sunday}
        </span>
        <a
          href={telLink()}
          onClick={() => trackEvent("phone_click", { click_source: "header" })}
          className="font-semibold text-amber-light hover:text-amber"
        >
          📞 {siteConfig.phone.display}
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex shrink-0 flex-col items-start gap-1">
          {/*
            The logo's own wordmark is dark navy (near-identical to this
            header's background), so it needs a light backing to actually
            be visible — the logo artwork itself is untouched, just given a
            proper card to sit on instead of floating directly on navy.
          */}
          <span className="rounded-md bg-cream-bg px-2.5 py-1.5">
            <Image
              src="/logo-full.png"
              alt={siteConfig.name}
              width={600}
              height={529}
              priority
              className="h-11 w-auto md:h-12"
            />
          </span>
          <span className="pl-0.5 text-[10px] tracking-[0.2em] text-amber-light/80 uppercase">
            Jaipur · Since {siteConfig.foundingYear}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition-colors hover:text-amber-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { entry_point: "header" })}
          className="shrink-0 rounded-sm bg-amber px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}
