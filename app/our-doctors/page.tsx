import type { Metadata } from "next";
import { getDoctors } from "@/lib/supabase/queries/doctors";
import { DoctorCard } from "@/components/our-doctors/DoctorCard";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "Our Doctors | Dr T P Yadav & Dr Anavil Yadav | Yadav Homeo Clinic Jaipur" },
  description:
    "Meet the doctors of Yadav Homeo Clinic — Dr T P Yadav (35+ years, founder) and Dr Anavil Yadav (BHMS). Classical homeopathy specialists in Jaipur.",
  keywords: ["homeopathy doctor Jaipur"],
  alternates: { canonical: `${siteConfig.url}/our-doctors/` },
  openGraph: {
    title: "Our Doctors | Yadav Homeo Clinic",
    description:
      "Meet Dr T P Yadav and Dr Anavil Yadav — two generations of classical homeopathy in Jaipur.",
    url: `${siteConfig.url}/our-doctors/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default async function OurDoctorsPage() {
  const doctors = await getDoctors();

  return (
    <>
      <section className="bg-navy px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl leading-snug text-cream md:text-4xl md:leading-tight">
            Two Generations. One Commitment. Classical Homeopathy Done Right.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/80 md:text-base">
            Yadav Homeo Clinic has been built by two doctors who share one belief: that every
            patient deserves a prescription matched to them as an individual — not to their
            disease label. Dr T P Yadav, who founded the clinic in {siteConfig.foundingYear}, and
            Dr Anavil Yadav, who carries that practice into its next chapter — both practise
            strictly in the classical tradition.
          </p>
        </div>
      </section>

      <section className="bg-cream-bg px-5 py-14 md:py-16">
        {doctors.length > 0 ? (
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        ) : (
          <p className="mx-auto max-w-2xl text-center text-sm text-text-mid">
            Doctor profiles are being updated. Please WhatsApp us at {siteConfig.phone.display} for
            details.
          </p>
        )}
      </section>
    </>
  );
}
