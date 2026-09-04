import Link from "next/link";
import type { Testimonial } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl text-navy md:text-3xl">
            Real Patients. Real Recoveries. Real Stories.
          </h2>
          <p className="mt-3 text-[15px] text-text-mid">
            Every testimonial on this page is a real patient from our clinic. Names and details
            used with full consent.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-sm border border-border-amber border-l-4 border-l-amber bg-cream-bg p-6"
            >
              <p className="font-serif text-[15px] italic leading-relaxed text-text-mid">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm">
                <span className="font-bold text-navy">
                  — {t.patient_name}
                  {t.age ? `, ${t.age}` : ""}, {t.city}
                </span>
                <span className="ml-2 text-green">
                  {t.condition}
                  {t.treatment_duration ? ` · ${t.treatment_duration}` : ""}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          <Link
            href="/patient-stories"
            className="text-sm font-bold text-amber-dark hover:text-navy"
          >
            Read More Stories →
          </Link>
          {siteConfig.social.googleBusinessProfile && (
            <a
              href={siteConfig.social.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-amber-dark hover:text-navy"
            >
              Read Our Reviews on Google →
            </a>
          )}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-text-light">
          Testimonials represent individual patient experiences. Results are not typical and
          cannot be guaranteed. Homeopathic treatment outcomes vary based on individual
          constitution, disease duration, compliance with treatment, and other factors.
        </p>
      </div>
    </section>
  );
}
