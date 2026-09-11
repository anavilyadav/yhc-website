"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import ExitIntentPopup from "@/components/site/ExitIntentPopup";
import type { SiteSettings } from "@/lib/types";

/**
 * Wraps the public site's Header/Footer/sticky-bar/popups around normal
 * pages, but renders bare children for /admin/* — the admin panel has its
 * own nav (app/admin/layout.tsx) and shouldn't show the public marketing
 * header, footer, or the WhatsApp/exit-intent popups aimed at patients.
 */
export default function SiteChrome({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings: SiteSettings;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Header settings={settings} />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer settings={settings} />
      <MobileStickyBar />
      <FloatingWhatsApp />
      <ExitIntentPopup />
    </>
  );
}
