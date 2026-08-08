import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="bg-navy px-5 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-2xl text-cream md:text-4xl">
          Your Recovery Starts With One Conversation
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-cream/70">
          <p>
            Thousands of patients who were told their condition was permanent — vitiligo that
            could never repigment, kidneys that would need dialysis, children who would never
            speak — found their answer at Yadav Homeo Clinic. We do not promise miracles. We
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
            className="w-full rounded-sm border-2 border-amber-light px-7 py-3 text-sm font-bold uppercase tracking-wide text-amber-light transition-colors hover:bg-amber-light hover:text-navy sm:w-auto"
          >
            Start Online Consultation
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-sm bg-green px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            💬 WhatsApp Us Now
          </a>
        </div>

        <p className="mt-8 text-sm text-cream/60">
          📞{" "}
          <a href={telLink()} className="hover:text-amber-light">
            {siteConfig.phone.display}
          </a>{" "}
          &nbsp;|&nbsp; 📍 Jaipur, Rajasthan &nbsp;|&nbsp; 🌐 yadavhomeoclinic.com
        </p>
      </div>
    </section>
  );
}
