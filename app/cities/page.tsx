import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/data/cities";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/shared/icons";

const pageUrl = `${siteConfig.url}/cities/`;

export const metadata: Metadata = {
  title: { absolute: `Homeopathy Consultation Across India — Cities We Serve | ${siteConfig.name}` },
  description:
    "Yadav Homeo Clinic offers online homeopathy consultation to patients across India, with medicine couriered to your city — Jaipur, Delhi, Mumbai, Bangalore and many more.",
  alternates: { canonical: pageUrl },
};

const REGION_ORDER = ["Rajasthan", "Metro", "Other"] as const;
const REGION_LABEL: Record<(typeof REGION_ORDER)[number], string> = {
  Rajasthan: "Rajasthan",
  Metro: "Metro Cities",
  Other: "Other Major Cities",
};

export default function CitiesHubPage() {
  return (
    <>
      <section className="bg-navy px-5 py-14 text-cream md:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber">
            Serving Patients Across India
          </p>
          <h1 className="mt-3 font-serif text-2xl md:text-4xl">
            Homeopathy Consultation Across India
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/80">
            Dr Anavil Yadav and Dr T P Yadav offer complete online consultations from Jaipur —
            medicine couriered to your city, wherever you are in India.
          </p>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-14">
        <div className="mx-auto max-w-4xl rounded-lg border border-border-amber bg-white p-5 text-center shadow-sm sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-bold text-navy">Jaipur — In-Person Clinic</p>
            <p className="text-[13px] text-text-mid">Bajaj Nagar &amp; Jagatpura branches</p>
          </div>
          <div className="mt-3 sm:mt-0 sm:text-right">
            <p className="text-sm font-bold text-navy">All Other Cities — Online + Courier</p>
            <p className="text-[13px] text-text-mid">Full video consultation, medicine couriered</p>
          </div>
        </div>
      </section>

      {REGION_ORDER.map((region) => {
        const cities = CITIES.filter((c) => c.region === region);
        if (cities.length === 0) return null;
        return (
          <section key={region} className="bg-white px-5 py-10 first-of-type:pt-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-serif text-lg text-navy">{REGION_LABEL[region]}</h2>
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/cities/${city.slug}`}
                    className="rounded-sm px-2 py-1.5 text-sm text-text-mid transition-colors hover:bg-cream-bg hover:text-amber-dark"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-cream-bg px-5 py-14 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">Your City Not Listed?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-mid">
            We serve patients from every state in India and 15+ countries. WhatsApp us — your
            city doesn&apos;t need to be listed here for us to help.
          </p>
          <a
            href={whatsappLink("Hello, I'd like an online consultation — my city isn't listed on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
