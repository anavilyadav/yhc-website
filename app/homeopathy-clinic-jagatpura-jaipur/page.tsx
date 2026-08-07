import type { Metadata } from "next";
import { getClinicLocations } from "@/lib/data/contact";
import { ClinicLocationCard } from "@/components/contact/ClinicLocationCard";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { jagatpuraLocationSeo, jagatpuraHero } from "@/lib/content/location-content";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: jagatpuraLocationSeo.pageTitle },
  description: jagatpuraLocationSeo.metaDescription,
  keywords: [jagatpuraLocationSeo.focusKeyword, ...jagatpuraLocationSeo.secondaryKeywords],
  alternates: { canonical: `${siteConfig.url}/homeopathy-clinic-jagatpura-jaipur/` },
  openGraph: {
    title: jagatpuraLocationSeo.pageTitle,
    description: jagatpuraLocationSeo.metaDescription,
    url: `${siteConfig.url}/homeopathy-clinic-jagatpura-jaipur/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default async function JagatpuraLocationPage() {
  const clinics = await getClinicLocations();
  const jagatpuraClinic = clinics.find((c) => c.slug === "jagatpura");

  return (
    <>
      <section className="bg-navy px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl leading-snug text-cream md:text-4xl md:leading-tight">
            {jagatpuraHero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/80 md:text-base">
            {jagatpuraHero.intro}
          </p>
        </div>
      </section>

      {jagatpuraClinic && (
        <section className="bg-cream-bg px-5 py-14">
          <div className="mx-auto max-w-md">
            <ClinicLocationCard clinic={jagatpuraClinic} />
          </div>
        </section>
      )}

      <section className="bg-navy px-5 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hello, I would like to book a consultation at the Jagatpura branch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-sm bg-amber px-8 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
            >
              Book at Jagatpura Branch →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
