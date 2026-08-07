"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import styles from "@/app/contact/contact.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim() || null,
      cityCountry: String(formData.get("cityCountry") ?? "").trim(),
      consultationType: String(formData.get("consultationType") ?? ""),
      condition: String(formData.get("condition") ?? "").trim(),
      heardFrom: String(formData.get("heardFrom") ?? "") || null,
      message: String(formData.get("message") ?? "").trim() || null,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className={`${styles.formMessage} ${styles.formMessageSuccess}`} role="status">
        Thank you for reaching out to {siteConfig.name}. We have
        received your message and our team will contact you within 24
        hours. If you need a faster response, please WhatsApp us directly
        at {siteConfig.phone.display}. We look forward to speaking with you.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="fullName">Full Name*</label>
        <input id="fullName" name="fullName" type="text" required autoComplete="name" />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone Number*</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="cityCountry">City / Country*</label>
        <input id="cityCountry" name="cityCountry" type="text" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="consultationType">Consultation Type*</label>
        <select id="consultationType" name="consultationType" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option value="In-Clinic — Jaipur">In-Clinic — Jaipur</option>
          <option value="Online — India">Online — India</option>
          <option value="Online — International">Online — International</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="condition">Condition / Disease*</label>
        <input id="condition" name="condition" type="text" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="heardFrom">How did you hear about us?</label>
        <select id="heardFrom" name="heardFrom" defaultValue="">
          <option value="">Prefer not to say</option>
          <option value="Google Search">Google Search</option>
          <option value="JustDial">JustDial</option>
          <option value="Reference">Reference</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message / Any specific questions</label>
        <textarea id="message" name="message" />
      </div>

      {status === "error" && errorMessage && (
        <div className={`${styles.formMessage} ${styles.formMessageError}`} role="alert">
          {errorMessage}
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send My Enquiry →"}
      </button>
    </form>
  );
}
