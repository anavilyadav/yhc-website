import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/site/SiteChrome";
import GoogleAnalytics from "@/components/site/GoogleAnalytics";
import { siteConfig } from "@/lib/site-config";
import { getSiteSettings } from "@/lib/data/settings";
import { getClinicLocations } from "@/lib/data/contact";

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    // Techeve audit (17 Sept 2026): was 65 chars with "| 35+ Years"
    // appended; trimmed to the 53-char version the audit itself proposed.
    default: "Best Homeopathy Doctor in Jaipur | Yadav Homeo Clinic",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Yadav Homeo Clinic, Jaipur: classical homeopathy for chronic, genetic and autoimmune conditions since 1991. 1 lakh+ patients. Book your consultation.",
  // meta keywords removed (Techeve audit, item #21) — Google has ignored
  // this tag since 2009, and it was identical on every page anyway.
  openGraph: {
    title: "Best Homeopathy Doctor in Jaipur | Yadav Homeo Clinic",
    description:
      "Jaipur's most trusted homeopathy clinic for chronic, genetic & autoimmune diseases. 35+ years. 1 lakh+ patients treated.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [settings, clinics] = await Promise.all([getSiteSettings(), getClinicLocations()]);

  return (
    <html lang="en" className={`h-full ${lora.variable} ${workSans.variable}`}>
      <body className="flex min-h-full flex-col antialiased">
        <GoogleAnalytics />
        <SiteChrome settings={settings} clinics={clinics}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
