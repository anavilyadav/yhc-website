import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Hero from "@/components/homepage/Hero";
import StatsBar from "@/components/homepage/StatsBar";
import WhatYouGet from "@/components/homepage/WhatYouGet";
import { AssessmentTeaser } from "@/components/homepage/AssessmentTeaser";
import AboutTeaser from "@/components/homepage/AboutTeaser";
import { AutismFeature } from "@/components/homepage/AutismFeature";
import ConditionsGrid from "@/components/homepage/ConditionsGrid";
import HowWeWork from "@/components/homepage/HowWeWork";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Testimonials from "@/components/homepage/Testimonials";
import OnlineConsultation from "@/components/homepage/OnlineConsultation";
import FinalCTA from "@/components/homepage/FinalCTA";
import { PageVideo } from "@/components/shared/PageVideo";
import { PhotoGallery } from "@/components/shared/PhotoGallery";
import { QuickCheck } from "@/components/shared/QuickCheck";
import { getDiseases } from "@/lib/data/diseases";
import { getTestimonials } from "@/lib/data/testimonials";
import { getPageVideos } from "@/lib/data/videos";
import { getGalleryPhotos } from "@/lib/data/gallery-photos";
import {
  buildClinicSchema,
  buildPhysicianSchemas,
  buildWebsiteSchema,
  buildSpeakableSchema,
} from "@/lib/schema";

// ISR: re-fetch Supabase-backed content (diseases, testimonials) at most once
// per hour, so admin-panel edits go live without a redeploy while the page
// still serves as a fast, cached static response the rest of the time.
export const revalidate = 3600;

// The homepage never had its own canonical before — it silently inherited
// nothing from the root layout, so Google saw no canonical tag at all here.
// Title/description/openGraph are already correct via the root layout's
// own metadata, so only the missing canonical needs adding.
export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
};

export default async function HomePage() {
  const [diseases, testimonials, videos, photos] = await Promise.all([
    getDiseases(),
    getTestimonials(),
    getPageVideos("home"),
    getGalleryPhotos("home"),
  ]);

  const clinicSchema = buildClinicSchema();
  const websiteSchema = buildWebsiteSchema();
  const speakableSchema = buildSpeakableSchema();
  const [founderSchema, physicianSchema] = buildPhysicianSchemas();

  return (
    <>
      {/*
        Plain <script> tags, not next/script's <Script> component — Script
        defers to client-side injection (afterInteractive by default), so it
        never appears in the server-rendered HTML crawlers fetch. Matches the
        pattern used on disease pages (app/[slug]/page.tsx) — fixing the gap
        flagged in that file's comment rather than leaving it homepage-only.
      */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      <Hero />
      <StatsBar />
      <WhatYouGet />
      <AssessmentTeaser />
      <PageVideo videos={videos} />
      <PhotoGallery photos={photos} />
      <AboutTeaser />
      <AutismFeature />
      <ConditionsGrid diseases={diseases} />
      <QuickCheck />
      <HowWeWork />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <OnlineConsultation />
      <FinalCTA />
    </>
  );
}
