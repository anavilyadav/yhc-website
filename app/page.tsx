import Hero from "@/components/homepage/Hero";
import StatsBar from "@/components/homepage/StatsBar";
import AboutTeaser from "@/components/homepage/AboutTeaser";
import ConditionsGrid from "@/components/homepage/ConditionsGrid";
import HowWeWork from "@/components/homepage/HowWeWork";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Testimonials from "@/components/homepage/Testimonials";
import OnlineConsultation from "@/components/homepage/OnlineConsultation";
import FinalCTA from "@/components/homepage/FinalCTA";
import { getDiseases } from "@/lib/data/diseases";
import { getTestimonials } from "@/lib/data/testimonials";
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

export default async function HomePage() {
  const [diseases, testimonials] = await Promise.all([getDiseases(), getTestimonials()]);

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
      <AboutTeaser />
      <ConditionsGrid diseases={diseases} />
      <HowWeWork />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <OnlineConsultation />
      <FinalCTA />
    </>
  );
}
