import type { Metadata } from "next";
import Link from "next/link";
import { PageVideo } from "@/components/shared/PageVideo";
import { getPageVideos } from "@/lib/data/videos";
import { siteConfig, whatsappLink } from "@/lib/site-config";

// Deliberately not linked from any nav, footer, or sitemap — reachable
// only via a successful Razorpay redirect. noindex since it's not a
// real content page. Matches the "soft gate" pattern from the sitemap
// master doc's Razorpay section.
export const metadata: Metadata = {
  title: { absolute: `Payment Received — ${siteConfig.name}` },
  robots: { index: false, follow: false },
};

export default async function BookingConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  const videos = await getPageVideos("booking-confirmed");

  return (
    <>
    <section className="bg-cream px-5 py-16 text-center md:py-24">
      <div className="mx-auto max-w-xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green text-3xl text-white">
          ✓
        </div>
        <h1 className="font-serif text-2xl text-navy md:text-3xl">Payment Received — Thank You</h1>
        {plan && (
          <p className="mt-3 text-base text-text-mid">
            Your payment for <strong className="text-navy">{plan}</strong> is confirmed.
          </p>
        )}

        <div className="mt-8 rounded-xl border border-border-amber bg-white p-6 text-left">
          <h2 className="font-serif text-lg text-navy">What Happens Next</h2>
          <ol className="mt-4 space-y-3 text-[15px] leading-relaxed text-text-mid">
            <li>
              <strong className="text-navy">1. WhatsApp us your details —</strong> send your full
              name, condition, and any medical reports or photographs to{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-dark hover:text-navy">
                +91-8949427254
              </a>{" "}
              if you haven&apos;t already.
            </li>
            <li>
              <strong className="text-navy">2. Case review —</strong> Dr Anavil or Dr T P Yadav
              reviews your complete case.
            </li>
            <li>
              <strong className="text-navy">3. Prescription —</strong> for online consultations,
              your personalised prescription is sent via WhatsApp within 24 to 48 hours. For
              in-clinic appointments, our team will confirm your slot shortly.
            </li>
          </ol>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink("Hello, I just completed my payment and wanted to share my details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
          >
            💬 WhatsApp Us Your Details
          </a>
          <Link
            href="/"
            className="w-full rounded-sm border-2 border-navy px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream sm:w-auto"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
    <PageVideo videos={videos} />
    </>
  );
}
