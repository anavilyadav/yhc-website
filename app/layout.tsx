import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import ExitIntentPopup from "@/components/site/ExitIntentPopup";
import GoogleAnalytics from "@/components/site/GoogleAnalytics";
import { siteConfig } from "@/lib/site-config";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
        <FloatingWhatsApp />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
