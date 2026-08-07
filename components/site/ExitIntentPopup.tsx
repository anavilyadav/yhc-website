"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site-config";

const SESSION_KEY = "yhc_exit_intent_shown";

/**
 * GIOS_P5_Patient_Conversion_OS.docx Part 2, Zone 7 "Exit Intent CTA":
 * fires once when the cursor moves toward the browser chrome (desktop) —
 * shown at most once per browser tab session, dismissible, never blocks
 * the page.
 */
export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY > 0) return;
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      document.removeEventListener("mouseleave", handleMouseLeave);
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] hidden items-center justify-center bg-navy/60 px-5 md:flex"
    >
      <div className="relative max-w-md rounded-sm bg-white p-7 shadow-xl">
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute right-3 top-3 text-lg text-text-light hover:text-navy"
        >
          ✕
        </button>
        <h2 className="font-serif text-xl text-navy">Wait — before you leave.</h2>
        <p className="mt-3 text-sm leading-relaxed text-text-mid">
          If you&apos;re unsure whether homeopathy can help your condition, WhatsApp us your
          condition and we&apos;ll reply honestly — no obligation.
        </p>
        <a
          href={whatsappLink("Hello, I was on your website and have a question about my condition.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setVisible(false)}
          className="mt-5 block rounded-sm bg-amber px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
        >
          💬 Ask Us on WhatsApp
        </a>
      </div>
    </div>
  );
}
