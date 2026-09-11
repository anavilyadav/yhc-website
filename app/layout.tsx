import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/site/SiteChrome";
import GoogleAnalytics from "@/components/site/GoogleAnalytics";
import { siteConfig } from "@/lib/site-config";
import { getSiteSettings } from "@/lib/data/settings";

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Best Homeopathy Doctor in Jaipur | Yadav Homeo Clinic | 30+ Years",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Yadav Homeo Clinic — Jaipur's most trusted homeopathy clinic for chronic, genetic & autoimmune diseases. 30+ years. 1 lakh+ patients. Book your consultation today.",
  keywords: [
    "homeopathy doctor in Jaipur",
    "best homeopathy clinic Jaipur",
    "homeopathy for vitiligo Jaipur",
    "homeopathy for autism Jaipur",
    "classical homeopath Rajasthan",
  ],
  openGraph: {
    title: "Best Homeopathy Doctor in Jaipur | Yadav Homeo Clinic",
    description:
      "Jaipur's most trusted homeopathy clinic for chronic, genetic & autoimmune diseases. 30+ years. 1 lakh+ patients treated.",
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
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`h-full ${lora.variable} ${workSans.variable}`}>
      <body className="flex min-h-full flex-col antialiased">
        <GoogleAnalytics />
        <SiteChrome settings={settings}>{children}</SiteChrome>
      </body>
    </html>
  );
}
