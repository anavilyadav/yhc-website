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
