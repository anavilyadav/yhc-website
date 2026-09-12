import { siteConfig } from "@/lib/site-config";
import styles from "@/app/contact/contact.module.css";
import { PhoneIcon, MailIcon, GlobeIcon } from "@/components/shared/icons";

export function QuickContactBar() {
  return (
    <div className={styles.quickBar}>
      <div className={`${styles.quickBarGrid} container`}>
        <div className={styles.quickItem}>
          <div className={styles.quickIcon} aria-hidden="true"><PhoneIcon className="mx-auto h-6 w-6" /></div>
          <div className={styles.quickLabel}>Call or WhatsApp</div>
          <div className={styles.quickValue}>{siteConfig.phone.display}</div>
          <div className={styles.quickSub}>{siteConfig.hours.weekday}</div>
        </div>
        {siteConfig.email && (
          <div className={styles.quickItem}>
            <div className={styles.quickIcon} aria-hidden="true"><MailIcon className="mx-auto h-6 w-6" /></div>
            <div className={styles.quickLabel}>Email Us</div>
            <div className={styles.quickValue}>{siteConfig.email}</div>
            <div className={styles.quickSub}>We reply within 24 hours</div>
          </div>
        )}
        <div className={styles.quickItem}>
          <div className={styles.quickIcon} aria-hidden="true"><GlobeIcon className="mx-auto h-6 w-6" /></div>
          <div className={styles.quickLabel}>Online Consultation</div>
          <div className={styles.quickValue}>Pan India &amp; International</div>
          <div className={styles.quickSub}>WhatsApp to start</div>
        </div>
      </div>
    </div>
  );
}
