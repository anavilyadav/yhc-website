import { siteConfig, telLink } from "@/lib/site-config";
import { whatsappLinks } from "@/lib/whatsapp";
import styles from "@/app/appointment/appointment.module.css";

export function ConsultationOptions() {
  return (
    <section className={styles.section} id="choose-consultation">
      <div className="container">
        <div className={styles.sectionHeading}>
          <h2>Choose Your Consultation Type</h2>
        </div>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <h3>Visit Us at the Clinic — Jaipur</h3>
            <p>
              Come in person to either of our two Jaipur clinics. Our team
              will confirm your appointment slot, ensure the doctor is
              available for you, and make your visit smooth and comfortable
              from start to finish.
            </p>
            <ul className={styles.tickList}>
              <li>First-time patients with complex or long-standing conditions</li>
              <li>Children — especially autism, developmental delay or genetic cases</li>
              <li>
                Patients who want to show physical symptoms — skin, swelling,
                rashes, joint deformity
              </li>
              <li>Patients who prefer a face-to-face conversation with the doctor</li>
              <li>Local Jaipur patients or those who can travel</li>
            </ul>
            <a href={telLink()} className={styles.cardCta}>
              Call to Book Your Slot → {siteConfig.phone.display}
            </a>
            <p className={styles.cardSecondary}>
              Or WhatsApp us at {siteConfig.phone.display} with your name, condition,
              and preferred date and time.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Consult Online — From Anywhere in India or Abroad</h3>
            <p>
              Our online consultation service has been running since 2018 —
              and it is just as thorough and personalised as an in-clinic
              visit. Patients from Delhi, Mumbai, Bangalore, Hyderabad, and
              from over 15 countries consult with us online every week.
              Distance is not a barrier to healing.
            </p>
            <ul className={styles.tickList}>
              <li>Patients who are not in Jaipur</li>
              <li>NRI patients — UAE, UK, USA, Canada, Australia and beyond</li>
              <li>Patients with mobility issues or chronic illness making travel difficult</li>
              <li>Follow-up consultations for existing patients</li>
              <li>Busy professionals who need flexible appointment timing</li>
            </ul>
            <a href="#online-process" className={styles.cardCta}>
              Fill Online Consultation Form →
            </a>
            <p className={styles.cardSecondary}>
              Or WhatsApp your name, condition and city to {siteConfig.phone.display}{" "}
              and we will guide you through the process.{" "}
              <a href={whatsappLinks.onlineConsultation}>Start on WhatsApp</a>
            </p>
            <p className={styles.cardSecondary}>
              Online consultations at Yadav Homeo Clinic are conducted in
              accordance with the Telemedicine Practice Guidelines 2020
              (NMC/MCI).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
