"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import GoogleAnalytics from "@/components/site/GoogleAnalytics";

type Consent = "pending" | "accepted" | "declined";

const STORAGE_KEY = "yhc_cookie_consent";

/**
 * Techeve audit (17 Sept 2026): GA4 should ship with a consent notice
 * given the DPDP Act 2023 and the site's health-related content — GA4
 * scripts (and the tracking cookies they set) now only load after the
 * visitor actively accepts, not by default. Choice is remembered in
 * localStorage; a private-browsing/blocked-storage visitor just sees the
 * banner again next visit rather than the site breaking.
 *
 * Hidden on /admin — that's Dr Anavil's own internal tool, not a patient
 * visitor, so no consent banner (and, by extension, no GA4) there.
 */
export default function CookieConsentGate() {
  const pathname = usePathname();
  const [{ consent, hydrated }, setState] = useState<{ consent: Consent; hydrated: boolean }>({
    consent: "pending",
    hydrated: false,
  });

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Storage unavailable — banner will show every visit, but nothing breaks.
    }
    // One-time read of a client-only value (localStorage) to sync it into
    // state after mount — localStorage can't be read during SSR/the
    // server-rendered pass, so this can't be computed during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({
      consent: stored === "accepted" || stored === "declined" ? stored : "pending",
      hydrated: true,
    });
  }, []);

  function decide(value: "accepted" | "declined") {
    setState({ consent: value, hydrated: true });
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Nothing to persist; the in-memory choice still applies for this visit.
    }
  }

  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics />}

      {hydrated && consent === "pending" && !isAdmin && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-amber/30 bg-navy px-5 py-4 text-cream shadow-[0_-4px_16px_rgba(0,0,0,0.25)] print:hidden">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] leading-relaxed text-cream/85">
              We use cookies to understand how visitors use this site and improve your experience. No
              personal health information is ever tracked.{" "}
              <Link href="/privacy-policy" className="underline hover:text-amber-light">
                Read our Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2.5">
              <button
                type="button"
                onClick={() => decide("declined")}
                className="rounded-sm border border-cream/30 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cream/80 transition-colors hover:border-cream/60 hover:text-cream"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="rounded-sm bg-amber px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy transition-colors hover:bg-amber-dark"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
