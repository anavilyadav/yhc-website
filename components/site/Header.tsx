"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const primaryLinks = [
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/#conditions" },
  { label: "Our Doctors", href: "/our-doctors" },
];

const locationLinks = [
  { label: "Main Branch — Bajaj Nagar", href: "/homeopathy-doctor-jaipur" },
  { label: "Jagatpura Branch", href: "/homeopathy-clinic-jagatpura-jaipur" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "FAQ", href: "/faq" },
  { label: "Homeopathy FAQ (50 Q&A)", href: "/homeopathy-faq" },
  { label: "Online Consultation", href: "/online-consultation" },
];

const trailingLinks = [
  { label: "Appointment", href: "/appointment" },
  { label: "Contact", href: "/contact" },
];

// Everything above, flattened, for the mobile panel — same destinations
// as the desktop bar, just grouped as a single scrollable list instead
// of hover dropdowns (which don't work well with touch).
const mobileGroups = [
  { heading: "Explore", links: [...primaryLinks, ...trailingLinks] },
  { heading: "Locations", links: locationLinks },
  { heading: "Resources", links: resourceLinks },
];

function NavDropdown({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm text-cream/70 transition-colors hover:text-amber-light"
      >
        {label}
        <span aria-hidden className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-3 min-w-[220px] rounded-sm border border-amber/20 bg-navy py-2 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-cream/70 hover:bg-black/20 hover:text-amber-light"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu on navigation. Adjusted during render (React's
  // recommended pattern for state derived from a changing prop) rather
  // than in an effect, so it can't cause an extra render-then-fix flash.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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

        <nav className="hidden items-center gap-6 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition-colors hover:text-amber-light"
            >
              {link.label}
            </Link>
          ))}
          <NavDropdown label="Locations" links={locationLinks} />
          <NavDropdown label="Resources" links={resourceLinks} />
          {trailingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition-colors hover:text-amber-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { entry_point: "header" })}
            className="hidden shrink-0 rounded-sm bg-amber px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:block"
          >
            Book Consultation
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-sm border border-amber/30 lg:hidden"
          >
            <span
              aria-hidden
              className={`block h-0.5 w-5 bg-cream transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              aria-hidden
              className={`block h-0.5 w-5 bg-cream transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              aria-hidden
              className={`block h-0.5 w-5 bg-cream transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-amber/20 bg-navy lg:hidden">
          <nav className="mx-auto max-w-6xl px-5 py-6">
            {mobileGroups.map((group) => (
              <div key={group.heading} className="mb-6">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-light/80">
                  {group.heading}
                </h3>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-sm px-2 py-2.5 text-[15px] text-cream/85 hover:bg-black/20 hover:text-amber-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-2 flex flex-col gap-3 border-t border-amber/20 pt-5">
              <span className="text-xs text-cream/60">
                {siteConfig.hours.weekday}
                <br />
                {siteConfig.hours.sunday}
              </span>
              <a
                href={telLink()}
                onClick={() => trackEvent("phone_click", { click_source: "mobile_menu" })}
                className="font-semibold text-amber-light"
              >
                📞 {siteConfig.phone.display}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { entry_point: "mobile_menu" })}
                className="rounded-sm bg-amber px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy"
              >
                Book Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
