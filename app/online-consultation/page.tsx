import type { Metadata } from "next";
import ContentSections from "@/components/disease-page/ContentSections";
import FAQAccordion from "@/components/disease-page/FAQAccordion";
import DisclaimerBanner from "@/components/disease-page/DisclaimerBanner";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { ProcessSteps } from "@/components/online-consultation/ProcessSteps";
import { TestimonialCards } from "@/components/online-consultation/TestimonialCards";
import { PageVideo } from "@/components/shared/PageVideo";
import { PhotoGallery } from "@/components/shared/PhotoGallery";
import { getDoctorBySlug } from "@/lib/supabase/queries/doctors";
import { getPageVideos } from "@/lib/data/videos";
import { getGalleryPhotos } from "@/lib/data/gallery-photos";
import { buildFAQPageSchema } from "@/lib/schema";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { CheckIcon, WhatsAppIcon } from "@/components/shared/icons";
import SectionJumpNav from "@/components/disease-page/SectionJumpNav";
import { slugify } from "@/lib/utils";
import {
  onlineConsultationSeo,
  onlineConsultationHero,
  honestAnswerSection,
  processSteps,
  suitabilitySection,
  onlinePatientTestimonials,
  telemedicineComplianceStatement,
  onlineConsultationFaqs,
  onlineConsultationFinalCta,
  onlineConsultationDisclaimer,
} from "@/lib/content/online-consultation-content";

export const metadata: Metadata = {
  title: { absolute: onlineConsultationSeo.pageTitle },
  description: onlineConsultationSeo.metaDescription,
  keywords: [onlineConsultationSeo.focusKeyword, ...onlineConsultationSeo.secondaryKeywords],
  alternates: { canonical: `${siteConfig.url}/online-consultation/` },
  openGraph: {
    title: onlineConsultationSeo.pageTitle,
    description: onlineConsultationSeo.metaDescription,
    url: `${siteConfig.url}/online-consultation/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

const whatsappCta = whatsappLink("Hello, I would like to book an online consultation at Yadav Homeo Clinic.");

export default async function OnlineConsultationPage() {
  const [doctor, videos, photos] = await Promise.all([
    getDoctorBySlug(siteConfig.doctors.physician.slug),
    getPageVideos("online-consultation"),
    getGalleryPhotos("online-consultation"),
  ]);
  const faqPageSchema = buildFAQPageSchema(onlineConsultationFaqs);
  const jumpNavItems = [
    { id: slugify(honestAnswerSection.heading), label: "Does It Work?" },
    { id: "process", label: "The Process" },
    { id: slugify(suitabilitySection.heading), label: "Is It For You?" },
    { id: "patient-experiences", label: "Patient Experiences" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <section className="bg-navy px-5 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl leading-snug text-cream md:text-4xl md:leading-tight">
            {onlineConsultationHero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/80 md:text-base">
            {onlineConsultationHero.subheadline}
          </p>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm font-medium text-cream/70">
            {onlineConsultationHero.trustLine.split("|").map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 shrink-0 text-amber-light" /> {item.trim()}
              </span>
            ))}
          </p>
          <a
            href={whatsappCta}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm bg-amber px-8 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
          >
            Start Your Online Consultation →
          </a>
        </div>
      </section>

      <div className="bg-white px-5 pt-10">
        <div className="mx-auto max-w-3xl">
          <AuthorBox doctor={doctor} lastReviewed={new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} />
        </div>
      </div>

      <SectionJumpNav items={jumpNavItems} />

      <PageVideo videos={videos} />
      <PhotoGallery photos={photos} />

      <div className="bg-white pb-6">
        <ContentSections sections={[honestAnswerSection]} />
      </div>

      <ProcessSteps steps={processSteps} />

      <div className="bg-white">
        <ContentSections sections={[suitabilitySection]} />
      </div>

      <section className="bg-amber-tint px-5 py-8">
        <div className="mx-auto max-w-3xl rounded-lg border border-border-amber bg-white p-5 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-navy">
            Telemedicine Compliance
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-text-mid">
            {telemedicineComplianceStatement}
          </p>
        </div>
      </section>

      <TestimonialCards testimonials={onlinePatientTestimonials} />

      <FAQAccordion faqs={onlineConsultationFaqs} />

      <DisclaimerBanner text={onlineConsultationDisclaimer} />

      <section className="bg-navy px-5 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-xl leading-snug text-cream md:text-3xl">
            {onlineConsultationFinalCta}
          </h2>
          <div className="mt-7 flex justify-center">
            <a
              href={whatsappCta}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm bg-amber px-8 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
