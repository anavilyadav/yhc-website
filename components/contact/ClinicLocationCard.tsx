import type { ClinicLocation } from "@/lib/types";
import { whatsappLinkTo } from "@/lib/site-config";
import styles from "@/app/contact/contact.module.css";

export function ClinicLocationCard({ clinic }: { clinic: ClinicLocation }) {
  const fullAddress = clinic.addressLine
    ? `${clinic.addressLine}, ${clinic.city}, ${clinic.state}${
        clinic.pinCode ? ` — ${clinic.pinCode}` : ""
      }`
    : null;

  const whatsappHref = whatsappLinkTo(
    clinic.whatsapp,
    `Hello, I would like to enquire about a consultation at ${clinic.name}.`
  );

  return (
    <div className={styles.clinicCard}>
      <div className={styles.mapWrap}>
        {clinic.mapEmbedUrl ? (
          <iframe
            src={clinic.mapEmbedUrl}
            title={`Map to ${clinic.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <p className={styles.mapPending}>
            Map for this location will be added once the clinic confirms the
            exact pin (Google Maps → Share → Embed a map).
          </p>
        )}
      </div>
      <div className={styles.clinicBody}>
        <h3>{clinic.name}</h3>
        <div className={styles.clinicRow}>
          <strong>Address:</strong>
          <span className={fullAddress ? undefined : styles.pendingText}>
            {fullAddress ?? "To be confirmed"}
          </span>
        </div>
        {clinic.landmark && (
          <div className={styles.clinicRow}>
            <strong>Landmark:</strong> <span>{clinic.landmark}</span>
          </div>
        )}
        <div className={styles.clinicRow}>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${clinic.phone}`}>{clinic.phone}</a>
        </div>
        <div className={styles.clinicRow}>
          <strong>WhatsApp:</strong>{" "}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            {clinic.phone}
          </a>
        </div>
        {clinic.timingsWeekday ? (
          <>
            <div className={styles.clinicRow}>
              <strong>Timings:</strong> <span>{clinic.timingsWeekday}</span>
            </div>
            {clinic.timingsSunday && (
              <div className={styles.clinicRow}>
                <span />
                <span>{clinic.timingsSunday}</span>
              </div>
            )}
          </>
        ) : (
          <div className={styles.clinicRow}>
            <strong>Timings:</strong>{" "}
            <span className={styles.pendingText}>To be confirmed</span>
          </div>
        )}
        {clinic.directionsUrl && (
          <div className={styles.clinicRow}>
            <a href={clinic.directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
