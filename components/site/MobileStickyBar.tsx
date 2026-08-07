"use client";

import { telLink, whatsappLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden">
      <a
        href={telLink()}
        onClick={() => trackEvent("phone_click", { click_source: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-3 text-sm font-bold text-amber-light"
      >
        📞 Call Now
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { entry_point: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 bg-green py-3 text-sm font-bold text-white"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
