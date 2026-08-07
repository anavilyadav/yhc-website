// Source: dr-anavil-step10-remaining-pages-2026-07-12.docx, Pages 6-8.
// "[clinic email]" placeholders are resolved at render time from
// siteConfig.email (falls back to "email to be confirmed" — never
// invented) rather than baked into this static text.

export interface LegalSection {
  heading: string;
  /** Each item is either a paragraph (string) or a bullet list (string[]), rendered in order given. */
  body: (string | string[])[];
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy — Yadav Homeo Clinic",
  lastUpdated: "August 7, 2026",
  sections: [
    {
      heading: "1. Who We Are",
      body: [
        'Yadav Homeo Clinic ("the Clinic," "we," "us") is a classical homeopathic medical practice located in Jaipur, Rajasthan, India. We are operated by Dr T P Yadav and Dr Anavil Yadav. We can be reached at +91-8949427254 and [clinic email].',
      ],
    },
    {
      heading: "2. What Information We Collect",
      body: [
        "We collect the following personal information when you contact us, book a consultation, or receive treatment:",
        [
          "Name, age, and gender — required for medical treatment",
          "Phone number and WhatsApp number — required for communication and consultation delivery",
          "Email address — optional, used for digital prescription or report sharing only",
          "City and residential address — used for location-appropriate care and medicine delivery",
          "Full medical history, current health conditions, and current medications — essential for homeopathic case-taking and prescription",
          "Photographs of health conditions (e.g. skin conditions) — collected with explicit consent only, used for clinical assessment and treatment tracking",
          "Payment confirmation screenshots — stored temporarily, deleted after recording in our patient management system",
        ],
        "We do not collect credit or debit card numbers. We do not store banking credentials.",
      ],
    },
    {
      heading: "3. How We Use Your Information",
      body: [
        "Your information is used only for:",
        [
          "Providing homeopathic medical consultation and treatment",
          "Communicating with you about your treatment, follow-up, and prescriptions",
          "Delivering medicines to your address where requested",
          "Sending treatment-related WhatsApp messages (not promotional unless you have explicitly opted in)",
          "Maintaining our clinical records as required by medical practice standards",
        ],
        "We do not sell, rent, or share your personal information with any third party for marketing purposes.",
      ],
    },
    {
      heading: "4. How We Store Your Information",
      body: [
        "Patient records are stored in our secure practice management system (Google Sheets, subject to Google's Privacy Policy). WhatsApp conversations are stored within WhatsApp Business (subject to Meta's Privacy Policy). Photographs and reports shared with us are stored in Google Drive with access restricted to treating doctors only.",
      ],
    },
    {
      heading: "5. Your Rights Under DPDPA 2023",
      body: [
        "Under the Digital Personal Data Protection Act 2023, you have the right to:",
        [
          "Request a copy of the personal data we hold about you — we will respond within 72 hours",
          "Request correction of any inaccurate personal data — we will correct within 24 hours",
          "Request deletion of your personal data — we will delete within 30 days, subject to legal retention requirements for medical records",
          "Withdraw consent for data processing — note that withdrawal may affect our ability to provide treatment",
        ],
        "To exercise any of these rights, contact us at: +91-8949427254 or [clinic email]",
      ],
    },
    {
      heading: "6. Data Retention",
      body: [
        "Medical records are retained for a minimum of 7 years from the last consultation date, as required by Indian medical practice standards. After this period, records may be securely deleted upon request.",
      ],
    },
    {
      heading: "7. Cookies",
      body: [
        "Our website (yadavhomeoclinic.com) may use basic cookies for website analytics (Google Analytics). These cookies do not collect personal health information. You may disable cookies in your browser settings without affecting your ability to use our website.",
      ],
    },
    {
      heading: "8. Changes to This Policy",
      body: [
        'We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page will always reflect the most recent version.',
      ],
    },
    {
      heading: "9. Contact",
      body: ["For any privacy-related queries: Yadav Homeo Clinic, Jaipur | +91-8949427254 | [clinic email]"],
    },
  ],
};

export const termsOfUse: LegalPageContent = {
  title: "Terms of Use — Yadav Homeo Clinic",
  lastUpdated: "August 7, 2026",
  sections: [
    {
      heading: "1. Acceptance",
      body: [
        "By using the website yadavhomeoclinic.com or contacting Yadav Homeo Clinic for consultation, you agree to these Terms of Use. If you do not agree, please discontinue use of this website.",
      ],
    },
    {
      heading: "2. Nature of Information",
      body: [
        "The information on this website is provided for general educational purposes only. It is written by qualified homeopathic physicians (BHMS) and reflects their clinical experience. It does not constitute personalised medical advice and cannot substitute for a professional medical consultation.",
      ],
    },
    {
      heading: "3. No Guarantee of Results",
      body: [
        "Patient stories, testimonials, and clinical outcome descriptions on this website represent individual experiences. They do not guarantee similar results for any other patient. Homeopathic treatment outcomes depend on individual constitution, disease duration, compliance, and many factors unique to each patient.",
      ],
    },
    {
      heading: "4. External Content",
      body: [
        "This website may link to external websites for additional information. Yadav Homeo Clinic is not responsible for the content, accuracy, or privacy practices of any external websites.",
      ],
    },
    {
      heading: "5. Intellectual Property",
      body: [
        "All content on yadavhomeoclinic.com — text, images, layouts, and design — is the property of Yadav Homeo Clinic and may not be reproduced, distributed or used without written permission.",
      ],
    },
    {
      heading: "6. Changes to Terms",
      body: [
        'We reserve the right to update these Terms of Use at any time. The "Last Updated" date above will reflect the most recent version. Continued use of the website after changes constitutes acceptance.',
      ],
    },
    {
      heading: "7. Governing Law",
      body: [
        "These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts of Jaipur, Rajasthan.",
      ],
    },
    {
      heading: "8. Contact",
      body: ["Questions about these terms: +91-8949427254 | [clinic email]"],
    },
  ],
};

export const medicalDisclaimerPage: LegalPageContent = {
  title: "Medical Disclaimer — Yadav Homeo Clinic",
  lastUpdated: "August 7, 2026",
  sections: [
    {
      heading: "Overview",
      body: [
        "The information provided on this website (yadavhomeoclinic.com) and through our consultation services is written and reviewed by Dr T P Yadav (BHMS, Founder) and Dr Anavil Yadav (BHMS, 2016) for general educational purposes.",
      ],
    },
    {
      heading: "Important",
      body: [
        "This information does not constitute personalised medical advice and should not be used to self-diagnose or self-treat any health condition. Always consult a qualified healthcare professional before starting, stopping, or changing any treatment.",
        "Homeopathic treatment described on this website is provided under qualified medical supervision in accordance with the principles of classical homeopathy and the Telemedicine Practice Guidelines 2020 (where applicable to online consultations).",
      ],
    },
    {
      heading: "Individual Outcomes Vary",
      body: [
        "Treatment outcomes described in patient stories and clinical content represent individual patient experiences under specific treatment protocols. They are not guarantees of results for any other patient.",
      ],
    },
    {
      heading: "Emergency Disclaimer",
      body: [
        "Homeopathic treatment is not appropriate for medical emergencies. If you are experiencing a medical emergency, please contact emergency services immediately.",
      ],
    },
    {
      heading: "Drug Interactions",
      body: [
        "Patients are advised to inform their consulting physician of all current medications before beginning homeopathic treatment. Do not stop any prescribed medication without medical supervision.",
      ],
    },
    {
      heading: "Scope of Practice",
      body: [
        "Dr T P Yadav and Dr Anavil Yadav are registered homeopathic practitioners (BHMS). They do not practice allopathic medicine and do not prescribe allopathic drugs.",
      ],
    },
    {
      heading: "Regulatory Compliance",
      body: [
        "This clinic operates in accordance with the Drugs and Magic Remedies (Objectionable Advertisements) Act 1954, Consumer Protection Act 2019, Telemedicine Practice Guidelines 2020, and the Digital Personal Data Protection Act 2023.",
      ],
    },
  ],
};
