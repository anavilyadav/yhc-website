import Link from "next/link";
import { whatsappLink } from "@/lib/site-config";

const steps = [
  {
    n: 1,
    text: "Fill our detailed online consultation form — tell us everything about your condition and health history.",
  },
  {
    n: 2,
    text: "WhatsApp or email your medical reports, photographs and previous prescriptions to us.",
  },
  {
    n: 3,
    text: "Pay the consultation fee online via UPI or bank transfer. Send the payment screenshot.",
  },
  {
    n: 4,
    text: "Receive your personalised prescription within 24 to 48 hours. We are available for any clarification questions throughout your treatment.",
  },
];

export default function OnlineConsultation() {
  return (
    <section className="bg-amber-tint px-5 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-2xl text-navy md:text-3xl">
          Not in Jaipur? We Come to You — Online
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-text-mid">
          Patients from Delhi, Mumbai, Bangalore, Hyderabad and 15+ countries receive the same
          quality of care as our in-clinic patients — through our detailed online consultation
          process.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n}>
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy font-bold text-amber-light">
                {step.n}
              </div>
              <p className="text-[14px] leading-relaxed text-navy">{step.text}</p>
            </div>
          ))}
        </div>

        <a
          href={whatsappLink("I'd like to start an online consultation with Yadav Homeo Clinic.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-sm bg-navy px-8 py-3 text-sm font-bold uppercase tracking-wide text-amber-light transition-opacity hover:opacity-90"
        >
          Start Your Online Consultation →
        </a>

        <p className="mt-4 text-[14px] italic text-text-mid">
          Patients from India, UAE, UK, USA, Canada, Australia — all treated online with the same
          precision and care as in-clinic visits.
        </p>

        <p className="mt-4">
          <Link href="/online-consultation" className="text-sm font-bold text-navy hover:text-amber-dark">
            Learn more about our online consultation process →
          </Link>
        </p>
      </div>
    </section>
  );
}
