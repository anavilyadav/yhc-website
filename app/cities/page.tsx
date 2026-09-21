import type { Metadata } from "next";
import Link from "next/link";
import { CITIES, type CityRegion } from "@/lib/data/cities";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/shared/icons";

const pageUrl = `${siteConfig.url}/cities`;

export const metadata: Metadata = {
  title: { absolute: `Homeopathy Consultation Across India | ${siteConfig.name}` },
  description:
    "Yadav Homeo Clinic offers online homeopathy consultation to patients across India, with medicine couriered to your city — Jaipur, Delhi, Mumbai and more.",
  alternates: { canonical: pageUrl },
};

const REGION_ORDER: CityRegion[] = [
  "Rajasthan",
  "Delhi NCR",
  "North India",
  "West India",
  "Central India",
  "East & Northeast India",
  "South India",
];

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

      {/*
        Techeve audit (17 Sept 2026) flagged all 157 city pages as a
        near-identical-template "doorway page" risk. Per Dr Anavil's
        decision (2026-09-19): major cities keep a full, prominently
        linked, indexable page; every other city still has a working
        page (reachable from here), it's just listed by name rather than
        given the same card treatment, and excluded from the sitemap.
      */}
      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">Major Cities We Serve</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {CITIES.filter((c) => c.isMajor).map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="rounded-lg border border-border-amber bg-cream-bg px-4 py-3.5 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="block font-serif text-[15px] font-bold text-navy">{city.name}</span>
                <span className="block text-[12px] text-text-mid">{city.state}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {REGION_ORDER.map((region) => {
        const cities = CITIES.filter((c) => c.region === region && !c.isMajor);
        if (cities.length === 0) return null;
        return (
          <section key={region} className="bg-cream-bg px-5 py-8 first-of-type:pt-4">
            <div className="mx-auto max-w-4xl">
              <h3 className="text-xs font-bold uppercase tracking-wide text-amber-dark">
                {region} — Also Serving
              </h3>
              <div className="mt-3 flex flex-wrap gap-x-1 gap-y-1.5 text-[13.5px] text-text-mid">
                {cities.map((city, i) => (
                  <span key={city.slug}>
                    <Link href={`/cities/${city.slug}`} className="hover:text-amber-dark hover:underline">
                      {city.name}
                    </Link>
                    {i < cities.length - 1 && <span className="text-text-light">,</span>}
                  </span>
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
