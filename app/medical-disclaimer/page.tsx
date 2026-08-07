import type { Metadata } from "next";
import { LegalPageBody } from "@/components/legal/LegalPageBody";
import { medicalDisclaimerPage } from "@/lib/content/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: medicalDisclaimerPage.title },
  description:
    "The medical disclaimer covering all content and consultation services on the Yadav Homeo Clinic website.",
  alternates: { canonical: `${siteConfig.url}/medical-disclaimer/` },
};

export default function MedicalDisclaimerPage() {
  return <LegalPageBody content={medicalDisclaimerPage} />;
}
