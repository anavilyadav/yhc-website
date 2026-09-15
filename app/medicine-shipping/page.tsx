import type { Metadata } from "next";
import { CourierPaymentForm } from "@/components/medicine-shipping/CourierPaymentForm";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/shared/icons";

// Deliberately not in main nav — reached via a direct link shared with an
// existing online patient (WhatsApp, FAQ, booking-confirmed) when a
// specific month's parcel is ready to post. Consultation fees are the
// same online or in-clinic; this page is only for the separate, optional
// courier/shipping cost that applies when the clinic itself posts
// medicine to an online patient (see lib/courier.ts).
export const metadata: Metadata = {
  title: { absolute: `Pay for Medicine Courier — ${siteConfig.name}` },
  robots: { index: false, follow: false },
};

export default function MedicineShippingPage() {
  return (
    <section className="bg-cream-bg px-5 py-16 md:py-20">
      <div className="mx-auto max-w-lg">
        <h1 className="font-serif text-2xl text-navy md:text-3xl">Pay for Medicine Courier</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-text-mid">
          This is only for shipping — your consultation fee is already the same whether you
          consult online or in-clinic, and is paid separately. Use this page whenever we&apos;re
          ready to post your next parcel of medicine.
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-text-light">
          In Jaipur and want it faster? You can arrange your own delivery via Uber, Porter or
          Swiggy Genie and pay them directly — no courier charge from us in that case. WhatsApp
          us and we&apos;ll have the parcel ready for pickup.
        </p>

        <div className="mt-8">
          <CourierPaymentForm />
        </div>

        <p className="mt-6 text-center text-[12px] text-text-light">
          Courier payments are non-refundable once made — please pick the size that matches your
          parcel before paying.
        </p>

        <p className="mt-3 text-center text-[13px] text-text-mid">
          Not sure which size to pick?{" "}
          <a
            href={whatsappLink("Hello, I need to arrange medicine courier for my ongoing treatment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-amber-dark hover:text-navy"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" /> Ask us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
