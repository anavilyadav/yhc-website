import Script from "next/script";
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
import { buildClinicSchema, buildPhysicianSchemas, buildWebsiteSchema } from "@/lib/schema";

// ISR: re-fetch Supabase-backed content (diseases, testimonials) at most once
// per hour, so admin-panel edits go live without a redeploy while the page
// still serves as a fast, cached static response the rest of the time.
export const revalidate = 3600;

export default async function HomePage() {
  const [diseases, testimonials] = await Promise.all([getDiseases(), getTestimonials()]);

  const clinicSchema = buildClinicSchema();
  const websiteSchema = buildWebsiteSchema();
  const [founderSchema, physicianSchema] = buildPhysicianSchemas();

  return (
    <>
      <Script
        id="schema-clinic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-founder"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <Script
        id="schema-physician"
        type="application/ld+json"
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
