import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { whatsappLinks } from "@/lib/whatsapp";
import { getClinicLocations } from "@/lib/data/contact";
import { QuickContactBar } from "@/components/contact/QuickContactBar";
import { ClinicLocationCard } from "@/components/contact/ClinicLocationCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/shared/JsonLd";
import styles from "./contact.module.css";

// Clinic details are Supabase-backed so the doctor can update address,
// timings, or the map embed without a redeploy.
export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "Contact Yadav Homeo Clinic | Jaipur Homeopathy | +91-8949427254" },
  description:
    "Contact Yadav Homeo Clinic in Jaipur. Two clinic locations — main branch & Jagatpura. Call or WhatsApp: +91-8949427254. Online consultations worldwide. We respond to every enquiry.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Yadav Homeo Clinic | Jaipur Homeopathy",
    description:
      "Two clinic locations in Jaipur, plus online consultations worldwide. Call or WhatsApp +91-8949427254.",
    url: `${siteConfig.url}/contact`,
  },
};

export default async function ContactPage() {
  const clinics = await getClinicLocations();

  const clinicSchemas = clinics.map((clinic) => ({
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: clinic.name,
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.addressLine ?? undefined,
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      postalCode: clinic.pinCode ?? undefined,
      addressCountry: "IN",
    },
    url: `${siteConfig.url}/contact`,
  }));

  return (
    <>
      {clinicSchemas.map((schema) => (
        <JsonLd data={schema} key={schema.name} />
      ))}

      <section className={styles.hero}>
        <div className="container">
          <h1>We Are Here. Let&apos;s Talk About Your Health.</h1>
          <p className={styles.heroSub}>
            Whether you have a question, want to book an appointment, want
            to know if homeopathy can help your condition, or simply want to
            understand the process — reach out. Every enquiry is answered
            personally by our team.
          </p>
        </div>
      </section>

      <QuickContactBar />

      <section className={styles.section} id="locations">
        <div className="container">
          <div className={styles.sectionHeading}>
            <h2>Clinic Locations</h2>
          </div>
          <div className={styles.clinicGrid}>
            {clinics.map((clinic) => (
              <ClinicLocationCard clinic={clinic} key={clinic.id} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="online">
        <div className="container">
          <div className={styles.onlineBox}>
            <h2>Not in Jaipur? Reach Us Online</h2>
            <p>
              Our online consultation service reaches patients across every
              state in India and from countries including the UAE, United
              Kingdom, United States, Canada, and Australia. If you cannot
              visit us in Jaipur, do not let distance stop you from getting
              the treatment you need.
            </p>
            <ol className={styles.onlineSteps}>
              <li>
                <strong>Step 1:</strong> WhatsApp your name, city, and a
                brief description of your condition to {siteConfig.phone.display}
              </li>
              <li>
                <strong>Step 2:</strong> Our team will respond within a few
                hours with details of the online consultation process, fees,
                and how to send your reports.
              </li>
              <li>
                <strong>Step 3:</strong> Fill the consultation form, pay the
                fee, and your prescription reaches you within 24 to 48
                hours.
              </li>
            </ol>
            <a href={whatsappLinks.onlineConsultation} className={styles.whatsappCta}>
              WhatsApp Us to Begin →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="contact-form">
        <div className="container">
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2>Send Us a Message — We Reply Within 24 Hours</h2>
              <p>
                Prefer writing it out? Fill the form and our team will get
                back to you personally, usually the same day.
              </p>
              <ul className={styles.trustStats}>
                {siteConfig.stats.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong> {stat.label}
                  </li>
                ))}
              </ul>
              <div className={styles.socialRow} aria-label="Follow us">
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Facebook"
                  >
                    f
                  </a>
                )}
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Instagram"
                  >
                    ig
                  </a>
                )}
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="YouTube"
                  >
                    yt
                  </a>
                )}
                {siteConfig.social.googleBusinessProfile && (
                  <a
                    href={siteConfig.social.googleBusinessProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label="Google Reviews"
                  >
                    G
                  </a>
                )}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
