import type { Metadata } from "next";
import Link from "next/link";
import { getClinicLocations } from "@/lib/data/contact";
import { ClinicLocationCard } from "@/components/contact/ClinicLocationCard";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { jaipurLocationSeo, jaipurHero, whyChooseUsJaipur, conditionsTreatedLinks } from "@/lib/content/location-content";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: jaipurLocationSeo.pageTitle },
  description: jaipurLocationSeo.metaDescription,
  keywords: [jaipurLocationSeo.focusKeyword, ...jaipurLocationSeo.secondaryKeywords],
  alternates: { canonical: `${siteConfig.url}/homeopathy-doctor-jaipur/` },
  openGraph: {
    title: jaipurLocationSeo.pageTitle,
    description: jaipurLocationSeo.metaDescription,
    url: `${siteConfig.url}/homeopathy-doctor-jaipur/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default async function JaipurLocationPage() {
  const clinics = await getClinicLocations();
  const mainClinic = clinics.find((c) => c.slug === "main") ?? clinics[0];

  return (
    <>
      <section className="bg-navy px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl leading-snug text-cream md:text-4xl md:leading-tight">
            {jaipurHero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/80 md:text-base">
            {jaipurHero.subheadline}
          </p>
        </div>
      </section>

      {mainClinic && (
        <section className="bg-cream-bg px-5 py-14">
          <div className="mx-auto max-w-md">
            <ClinicLocationCard clinic={mainClinic} />
          </div>
        </section>
      )}

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">
            Why Choose Yadav Homeo Clinic in Jaipur
          </h2>
          <ul className="mt-6 space-y-3">
            {whyChooseUsJaipur.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-text-mid">
                <span aria-hidden className="mt-1 text-green">
                  ✔
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-xl text-navy md:text-2xl">Conditions Treated</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {conditionsTreatedLinks.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="rounded-full border border-border-amber bg-white px-4 py-2 text-sm text-navy hover:border-amber hover:text-amber-dark"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hello, I would like to book a consultation at Yadav Homeo Clinic, Jaipur.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-sm bg-amber px-8 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
            >
              Book Your Consultation →
            </a>
            <a
              href={`tel:${siteConfig.phone.e164}`}
              className="w-full rounded-sm border-2 border-amber-light px-8 py-3 text-center text-sm font-bold uppercase tracking-wide text-amber-light transition-colors hover:bg-amber-light hover:text-navy sm:w-auto"
            >
              📞 Call Us: {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
