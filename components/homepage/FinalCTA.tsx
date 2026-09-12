import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon, PhoneIcon, MapPinIcon, GlobeIcon } from "@/components/shared/icons";

export default function FinalCTA() {
  return (
    <section className="border-t-2 border-amber bg-amber-tint px-5 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-2xl text-navy md:text-4xl">
          Your Recovery Starts With One Conversation
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-text-mid">
          <p>
            Thousands of patients who were told their condition was permanent — vitiligo that
            could never repigment, kidney function that would only decline, children who would
            never speak — found support at Yadav Homeo Clinic. We do not promise miracles. We
            promise our best — and our best has transformed thousands of lives.
          </p>
          <p>Take the first step today. Call us, WhatsApp us, or book online. We respond to every enquiry personally.</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={whatsappLink("Hello, I'd like to book an in-clinic appointment at Yadav Homeo Clinic, Jaipur.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
          >
            Book In-Clinic Appointment
          </a>
          <a
            href={whatsappLink("I'd like to start an online consultation with Yadav Homeo Clinic.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-sm border-2 border-navy px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream sm:w-auto"
          >
            Start Online Consultation
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-sm border-2 border-navy bg-transparent px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-cream sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us Now
          </a>
        </div>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-sm text-text-mid">
          <a href={telLink()} className="inline-flex items-center gap-1.5 hover:text-amber-dark">
            <PhoneIcon className="h-3.5 w-3.5" /> {siteConfig.phone.display}
          </a>
          <span aria-hidden>|</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5" /> Jaipur, Rajasthan
          </span>
          <span aria-hidden>|</span>
          <span className="inline-flex items-center gap-1.5">
            <GlobeIcon className="h-3.5 w-3.5" /> yadavhomeoclinic.com
          </span>
        </p>
      </div>
    </section>
  );
}
