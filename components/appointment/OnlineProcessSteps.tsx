import { siteConfig } from "@/lib/site-config";
import styles from "@/app/appointment/appointment.module.css";

const STEPS = [
  {
    title: "Fill Our Detailed Consultation Form",
    body: "Complete our online patient intake form. This covers your current complaints, full medical history, past treatments tried, family medical history, dietary habits, sleep patterns and emotional health. Please be as detailed as you can — the more we know, the more accurately we can prescribe for you.",
  },
  {
    title: "Share Your Medical Records With Us",
    body: `WhatsApp or email all relevant documents to us — blood reports, scan reports, photographs (for skin conditions), previous prescriptions, specialist letters, and any investigations done. Send to WhatsApp: ${siteConfig.phone.display}`,
  },
  {
    title: "Pay the Consultation Fee",
    body: siteConfig.upiId
      ? `Pay via UPI (${siteConfig.upiId}) or bank transfer. After payment, send us the screenshot with your full name.`
      : "Pay via UPI or bank transfer — WhatsApp us and we'll share our current UPI ID and bank details directly. After payment, send us the screenshot with your full name.",
  },
  {
    title: "Dr Anavil / Dr T P Yadav Reviews Your Complete Case",
    body: "Once we have received your complete information and payment confirmation, the doctor begins a thorough analysis of your case. Every case receives the same attention and depth — regardless of how simple or complex it appears.",
  },
  {
    title: "Your Personalised Prescription — Within 24 to 48 Hours",
    body: "You will receive your detailed prescription via WhatsApp or email. This includes: the medicine name and potency, dosage schedule, dietary instructions and restrictions specific to your condition, and clear guidance on what to expect and what to watch for.",
  },
  {
    title: "Source Your Medicines and Start Treatment",
    body: "Homeopathic medicines are available at any homeopathy pharmacy in your city or town. They can also be ordered online. We will guide you on exactly how to source them if needed. Medicines can typically be obtained within 24 hours of receiving your prescription.",
  },
];

export function OnlineProcessSteps() {
  return (
    <section className={styles.section} id="online-process">
      <div className="container">
        <div className={styles.sectionHeading}>
          <h2>How Online Consultation Works — Step by Step</h2>
          <p>
            Our online process is simple, private, and designed to give you
            the same depth of care as a personal visit. Here is exactly what
            happens from start to finish.
          </p>
        </div>
        <div className={styles.stepsList}>
          {STEPS.map((step, index) => (
            <div className={styles.step} key={step.title}>
              <div className={styles.stepNum}>{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        <div className={styles.followUpNote}>
          <p>
            <strong>Follow-up process:</strong> Follow-up consultations
            happen every 4 to 6 weeks. Send us your progress update — how
            you are feeling, any changes in symptoms, and updated reports if
            available. We review and adjust your prescription based on your
            response. You are never left without guidance between
            consultations.
          </p>
        </div>
      </div>
    </section>
  );
}
