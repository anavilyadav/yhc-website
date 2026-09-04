import type { ReactNode } from "react";
import Link from "next/link";
import { whatsappLinks } from "@/lib/whatsapp";

/**
 * "Your Worries, Answered" — Trust & Sales Playbook ch.9. Every patient
 * carries the same handful of silent doubts before booking; answering
 * them right on the page (honestly, using facts already true elsewhere
 * on the site) removes hesitation instead of making them go searching
 * or leave without asking. Deliberately generic/universal rather than
 * per-condition, so it renders on every disease page with no per-page
 * content to keep in sync.
 */
const WORRIES: { worry: string; answer: ReactNode }[] = [
  {
    worry: "Will this actually help my case?",
    answer: (
      <>
        Every case is different — see the FAQs and (where available) the expected timeline
        further down this page. Still unsure?{" "}
        <a
          href={whatsappLinks.freeHealthCheck}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-amber-dark hover:underline"
        >
          Get a free 5-minute WhatsApp health check →
        </a>
      </>
    ),
  },
  {
    worry: "Is it too expensive?",
    answer: (
      <>
        Real, published pricing — no hidden costs.{" "}
        <Link href="/appointment#fees" className="font-semibold text-amber-dark hover:underline">
          See exact fees →
        </Link>
      </>
    ),
  },
  {
    worry: "Do I have to stop my other medicines?",
    answer:
      "No — never stop any medicine without your regular doctor's advice. Homeopathic treatment works alongside it.",
  },
  {
    worry: "I'm not in Jaipur — can this still help me?",
    answer: (
      <>
        Yes. Online consultation works the same way as in-clinic, at the same price.{" "}
        <Link href="/online-consultation" className="font-semibold text-amber-dark hover:underline">
          See how online consultation works →
        </Link>
      </>
    ),
  },
];

export default function WorriesTable() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-xl text-navy md:text-2xl">Your Worries, Answered</h2>

        {/*
          Below md, a table wide enough to hold a real answer needs
          horizontal scrolling inside its own box — easy to miss on a
          phone, and this content exists specifically to remove
          friction, not add it. Stacked cards read top-to-bottom with a
          normal vertical scroll instead; the table returns at md+
          where both columns fit without scrolling.
        */}
        <div className="mt-6 space-y-3 md:hidden">
          {WORRIES.map((row) => (
            <div key={row.worry} className="rounded-sm border border-border-amber bg-cream-bg p-4">
              <p className="font-bold text-navy">{row.worry}</p>
              <p className="mt-1.5 text-sm text-text-mid">{row.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 hidden overflow-x-auto rounded-sm border border-border-amber md:block">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy text-cream">
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide">
                  What you might be wondering
                </th>
                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide">
                  The honest answer
                </th>
              </tr>
            </thead>
            <tbody>
              {WORRIES.map((row, i) => (
                <tr key={row.worry} className={i % 2 === 1 ? "bg-cream-bg" : "bg-white"}>
                  <td className="px-4 py-3 align-top font-bold text-navy">{row.worry}</td>
                  <td className="px-4 py-3 align-top text-text-mid">{row.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
