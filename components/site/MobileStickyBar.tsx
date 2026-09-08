"use client";

import Link from "next/link";
import { telLink, whatsappLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden print:hidden">
      <a
        href={telLink()}
        onClick={() => trackEvent("phone_click", { click_source: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-1 bg-navy py-3 text-xs font-bold text-amber-light"
      >
        📞 Call
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { entry_point: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-1 bg-green py-3 text-xs font-bold text-white"
      >
        💬 WhatsApp
      </a>
      <Link
        href="/appointment"
        onClick={() => trackEvent("book_click", { entry_point: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-1 bg-amber py-3 text-xs font-bold text-navy"
      >
        📅 Book & Pay
      </Link>
    </div>
  );
}
