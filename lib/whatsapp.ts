import { whatsappLink } from "./site-config";

export const whatsappLinks = {
  generalEnquiry: whatsappLink(
    "Hello, I would like to enquire about a consultation at Yadav Homeo Clinic."
  ),
  bookInClinic: whatsappLink(
    "Hello, I would like to book an in-clinic appointment at Yadav Homeo Clinic. My name is [Name] and my preferred date/time is [Date/Time]."
  ),
  onlineConsultation: whatsappLink(
    "Hello, I am interested in an online consultation at Yadav Homeo Clinic. My name is [Name] and I am from [City]."
  ),
  // A distinct, zero-pressure first step for visitors who aren't ready to
  // book yet — Trust & Sales Playbook ch.9. Deliberately different wording
  // from the booking messages above, so the team can tell at a glance
  // that this contact came in "just asking", not ready to pay.
  freeHealthCheck: whatsappLink(
    "Hello, I'd like a free 5-minute health check before deciding. My condition is [Condition] and I am from [City]."
  ),
};

/**
 * "What best describes what's bringing you here?" — PDM report ch.3.3: a
 * short, honest self-assessment, built on our existing WhatsApp flow
 * instead of a new form or a diagnostic quiz. Each option just routes an
 * undecided visitor into a pre-filled WhatsApp message categorised by
 * concern — never a symptom score or a diagnostic claim.
 */
export const quizOptions = [
  {
    label: "A skin, autoimmune or visible condition",
    message: whatsappLink(
      "Hello, I'm exploring treatment for a skin or autoimmune condition. Can you help me understand if homeopathy could help my case?"
    ),
  },
  {
    label: "A chronic disease (kidney, hormonal, digestive, heart)",
    message: whatsappLink(
      "Hello, I'm exploring treatment for a chronic condition. Can you help me understand if homeopathy could help my case?"
    ),
  },
  {
    label: "My child's health or development",
    message: whatsappLink(
      "Hello, I'd like to ask about homeopathic treatment for my child. Can you help me understand if it could help?"
    ),
  },
  {
    label: "Something else / not sure yet",
    message: whatsappLink(
      "Hello, I'm not fully sure yet, but I'd like to ask if homeopathy could help my situation."
    ),
  },
];
