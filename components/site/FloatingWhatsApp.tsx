"use client";

import { whatsappLink } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/shared/icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { entry_point: "floating" })}
      className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-lg transition-transform hover:scale-105 md:flex print:hidden"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
