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
      {clinic.mapEmbedUrl && (
        <div className={styles.mapWrap}>
          <iframe
            src={clinic.mapEmbedUrl}
            title={`Map to ${clinic.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
      <div className={styles.clinicBody}>
        <h3>{clinic.name}</h3>
        {fullAddress && (
          <div className={styles.clinicRow}>
            <strong>Address:</strong>
            <span>{fullAddress}</span>
          </div>
        )}
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
        {clinic.timingsWeekday && (
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
