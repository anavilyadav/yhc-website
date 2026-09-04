import type { Metadata } from "next";
import { getDoctors } from "@/lib/supabase/queries/doctors";
import { aboutSeo } from "@/lib/content/about-static-content";
import { PageHero } from "@/components/about/PageHero";
import { OurStory } from "@/components/about/OurStory";
import { DoctorProfileSection } from "@/components/about/DoctorProfileSection";
import { ClinicTimeline } from "@/components/about/ClinicTimeline";
import { MissionVisionValues } from "@/components/about/MissionVisionValues";
import { WhyUsGrid } from "@/components/about/WhyUsGrid";
import { AboutCta } from "@/components/about/AboutCta";
import { PhysicianSchema } from "@/components/schema/PhysicianSchema";
import { PageVideo } from "@/components/shared/PageVideo";
import { getPageVideos } from "@/lib/data/videos";
import { siteConfig } from "@/lib/site-config";

// Doctor bios live in Supabase and the doctor edits them via the admin
// panel — ISR revalidates this page hourly so those edits go live without
// a redeploy, while visitors still get a static-fast page.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: aboutSeo.title },
  description: aboutSeo.description,
  alternates: { canonical: `${siteConfig.url}/about/` },
  openGraph: {
    title: aboutSeo.title,
    description: aboutSeo.description,
    url: `${siteConfig.url}/about/`,
    type: "website",
  },
};

export default async function AboutPage() {
  const [doctors, videos] = await Promise.all([getDoctors(), getPageVideos("about")]);
  const drTpYadav = doctors.find((d) => d.slug === siteConfig.doctors.founder.slug);
  const drAnavil = doctors.find((d) => d.slug === siteConfig.doctors.physician.slug);

  return (
    <main>
      <PageHero />
      <OurStory />
      <PageVideo videos={videos} />

      {/*
        variant="teaser" shows only the first bio paragraph and links out
        to the dedicated /our-doctors/[slug] page for the rest — the full
        bio, philosophy quote, specialisations and consultation points.
        Previously both pages rendered the exact same doctor record in
        full, which is duplicate content across two URLs.
      */}
      {drTpYadav && (
        <DoctorProfileSection
          doctor={drTpYadav}
          photoSide="left"
          variant="teaser"
          ctaHref={`/our-doctors/${drTpYadav.slug}`}
          ctaLabel={`Read ${drTpYadav.full_name}'s Full Profile`}
        />
      )}

      {drAnavil && (
        <DoctorProfileSection
          doctor={drAnavil}
          photoSide="right"
          variant="teaser"
          ctaHref={`/our-doctors/${drAnavil.slug}`}
          ctaLabel={`Read ${drAnavil.full_name}'s Full Profile`}
        />
      )}

      <ClinicTimeline />
      <MissionVisionValues />
      <WhyUsGrid />
      <AboutCta />

      {drTpYadav && <PhysicianSchema doctor={drTpYadav} />}
      {drAnavil && <PhysicianSchema doctor={drAnavil} />}
    </main>
  );
}
