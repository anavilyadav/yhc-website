import type { Metadata } from "next";
import { LegalPageBody } from "@/components/legal/LegalPageBody";
import { privacyPolicy } from "@/lib/content/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: privacyPolicy.title },
  description:
    "How Yadav Homeo Clinic collects, uses, and protects your personal data, in accordance with the Digital Personal Data Protection Act 2023.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy/` },
};

export default function PrivacyPolicyPage() {
  return <LegalPageBody content={privacyPolicy} />;
}
