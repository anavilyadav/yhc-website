import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { whatsappLinks } from "@/lib/whatsapp";
import { getAppointmentFaqs, getPricingPlans } from "@/lib/data/appointment";
import { getPageVideos } from "@/lib/data/videos";
import { getDoctors } from "@/lib/supabase/queries/doctors";
import { PageVideo } from "@/components/shared/PageVideo";
import { FreeHealthCheck } from "@/components/shared/FreeHealthCheck";
import { ConsultationOptions } from "@/components/appointment/ConsultationOptions";
import { OnlineProcessSteps } from "@/components/appointment/OnlineProcessSteps";
import { PricingSection } from "@/components/appointment/PricingSection";
import { PreparationChecklist } from "@/components/appointment/PreparationChecklist";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { JsonLd } from "@/components/shared/JsonLd";
import styles from "./appointment.module.css";

// Content is Supabase-backed (pricing, FAQs) — ISR keeps the page static-fast
// while picking up edits the doctor makes in Supabase within 60 seconds.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Book Homeopathy Consultation in Jaipur | Online & In-Clinic",
  description:
    "Book your consultation at Yadav Homeo Clinic — in-clinic at Jaipur or online from anywhere in India & abroad. Call +91-8949427254. Same-week appointments available.",
  alternates: {
    canonical: "/appointment",
  },
  openGraph: {
    title: "Book Homeopathy Consultation in Jaipur | Yadav Homeo Clinic",
    description:
      "In-clinic at Jaipur or online from anywhere in India & abroad. Call +91-8949427254.",
    url: `${siteConfig.url}/appointment`,
  },
};

export default async function AppointmentPage() {
  const [pricingPlans, faqs, doctors, videos] = await Promise.all([
    getPricingPlans(),
    getAppointmentFaqs(),
    getDoctors(),
    getPageVideos("appointment"),
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <section className={styles.hero}>
        <div className="container">
          <h1>Your Healing Begins With One Conversation</h1>
          <p className={styles.heroSub}>
            Whether you are sitting in Jaipur or anywhere in the world —
            booking a consultation at Yadav Homeo Clinic is simple. Choose
            the option that suits you best and our team will take care of
            the rest.
          </p>
          <div className={styles.heroButtons}>
            <a href="#choose-consultation" className={`${styles.heroBtn} ${styles.heroBtnPrimary}`}>
              📍 Book In-Clinic Appointment — Jaipur
            </a>
            <a
              href={whatsappLinks.onlineConsultation}
              className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}
            >
              💻 Start Online Consultation — Pan India &amp; International
            </a>
          </div>
        </div>
      </section>

      <PageVideo videos={videos} />

      <ConsultationOptions />

      <div className="bg-white px-5 pb-12">
        <FreeHealthCheck />
      </div>

      <OnlineProcessSteps />
      <PricingSection plans={pricingPlans} doctors={doctors} />
      <PreparationChecklist />

      <section className={styles.section} id="faq">
        <div className="container">
          <div className={styles.sectionHeading}>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
