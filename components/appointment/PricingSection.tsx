import type { PricingPlan } from "@/lib/types";
import type { Doctor } from "@/lib/supabase/queries/doctors";
import { isRazorpayConfigured } from "@/lib/razorpay";
import { RazorpayCheckoutButton } from "./RazorpayCheckoutButton";
import { whatsappLink } from "@/lib/site-config";
import styles from "@/app/appointment/appointment.module.css";

function formatCategory(code: string) {
  return code.startsWith("new_patient") ? "New Patient" : "Follow-Up";
}

export function PricingSection({ plans, doctors = [] }: { plans: PricingPlan[]; doctors?: Doctor[] }) {
  const razorpayReady = isRazorpayConfigured();
  const registered = doctors.filter((d) => d.registration_number);

  return (
    <section className={styles.section} id="fees">
      <div className="container">
        <div className={styles.sectionHeading}>
          <h2>Your Investment in Lasting Health — Transparent and Fair</h2>
          <p>The same investment whether you consult in-clinic or online.</p>
        </div>
        <div className={styles.pricingGrid}>
          {plans.map((plan) => (
            <div className={styles.priceCard} key={plan.id}>
              {plan.badge && <div className={styles.priceBadge}>{plan.badge}</div>}
              <div className={styles.priceCardMode}>{formatCategory(plan.code)}</div>
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
        {registered.length > 0 && (
          <p className={styles.trustLine}>
            Registered doctors —{" "}
            {registered
              .map((d) => `${d.full_name} (Reg. No. ${d.registration_number})`)
              .join(" · ")}
            . Verify anytime.
          </p>
        )}
      </div>
    </section>
  );
}
