import type { Metadata } from "next";
import { LegalPageBody } from "@/components/legal/LegalPageBody";
import { termsOfUse } from "@/lib/content/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: termsOfUse.title },
  description: "Terms of use for the Yadav Homeo Clinic website and consultation services.",
  alternates: { canonical: `${siteConfig.url}/terms-of-use/` },
};

export default function TermsOfUsePage() {
  return <LegalPageBody content={termsOfUse} />;
}
