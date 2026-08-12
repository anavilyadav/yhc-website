import type { PricingPlan } from "@/lib/types";
import { isRazorpayConfigured } from "@/lib/razorpay";
import { RazorpayCheckoutButton } from "./RazorpayCheckoutButton";
import { whatsappLink } from "@/lib/site-config";
import styles from "@/app/appointment/appointment.module.css";

function formatMode(mode: PricingPlan["mode"]) {
  return mode === "in_clinic" ? "In Clinic" : "Online";
}

export function PricingSection({ plans }: { plans: PricingPlan[] }) {
  const razorpayReady = isRazorpayConfigured();

  return (
    <section className={styles.section} id="fees">
      <div className="container">
        <div className={styles.sectionHeading}>
          <h2>Consultation Fees — Transparent and Fair</h2>
        </div>
        <div className={styles.pricingGrid}>
          {plans.map((plan) => (
            <div className={styles.priceCard} key={plan.id}>
              {plan.badge && <div className={styles.priceBadge}>{plan.badge}</div>}
              <div className={styles.priceCardMode}>{formatMode(plan.mode)}</div>
              <h3>{plan.title}</h3>
              {plan.priceInr !== null ? (
                <div className={styles.priceAmount}>
                  {plan.originalPriceInr && plan.originalPriceInr > plan.priceInr && (
                    <span className={styles.priceWas}>
                      ₹{plan.originalPriceInr.toLocaleString("en-IN")}
                    </span>
                  )}
                  ₹{plan.priceInr.toLocaleString("en-IN")}
                </div>
              ) : (
                <div className={styles.priceAmountPending}>
                  Fee to be confirmed — WhatsApp us and we&apos;ll tell you upfront.
                </div>
              )}
              <ul className={styles.priceIncludes}>
                {plan.inclusions.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {plan.priceInr !== null && razorpayReady && (
                <RazorpayCheckoutButton plan={plan} />
              )}
              {plan.priceInr !== null && !razorpayReady && (
                <a
                  href={whatsappLink(`Hello, I'd like to book "${plan.title}" (₹${plan.priceInr.toLocaleString("en-IN")}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardCta}
                >
                  Book on WhatsApp →
                </a>
              )}
            </div>
          ))}
        </div>
        <div className={styles.medicineNote}>
          <p>
            💊 <strong>Note on Medicine Cost:</strong> Homeopathic medicines
            are extremely affordable — typically ₹50 to ₹300 per medicine
            depending on the potency and bottle size. Medicines are NOT
            included in the consultation fee and are purchased separately
            from any homeopathy pharmacy.
          </p>
        </div>
      </div>
    </section>
  );
}
