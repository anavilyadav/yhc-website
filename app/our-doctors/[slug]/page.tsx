import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDoctorBySlug } from "@/lib/supabase/queries/doctors";
import { DoctorProfileSection } from "@/components/about/DoctorProfileSection";
import PatientStoryCard from "@/components/disease-page/PatientStoryCard";
import { PageVideo } from "@/components/shared/PageVideo";
import { getPageVideos } from "@/lib/data/videos";
import { doctorProfileExtras } from "@/lib/content/doctor-profiles-content";
import { buildPhysicianSchemas } from "@/lib/schema";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const revalidate = 3600;

export async function generateStaticParams() {
  return [{ slug: siteConfig.doctors.founder.slug }, { slug: siteConfig.doctors.physician.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const extra = doctorProfileExtras[slug];
  if (!extra) return {};

  const pageUrl = `${siteConfig.url}/our-doctors/${slug}/`;

  return {
    title: { absolute: extra.seo.pageTitle },
    description: extra.seo.metaDescription,
    keywords: [extra.seo.focusKeyword, ...extra.seo.secondaryKeywords],
    alternates: { canonical: pageUrl },
    openGraph: {
      title: extra.seo.pageTitle,
      description: extra.seo.metaDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const extra = doctorProfileExtras[slug];
  if (!extra) notFound();

  const [doctor, videos] = await Promise.all([getDoctorBySlug(slug), getPageVideos(slug)]);
  if (!doctor) notFound();

  const [founderSchema, physicianSchema] = buildPhysicianSchemas();
  const schema = slug === siteConfig.doctors.founder.slug ? founderSchema : physicianSchema;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="Breadcrumb" className="bg-cream px-5 pt-6 text-xs text-text-mid">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="hover:text-amber-dark">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <Link href="/our-doctors" className="hover:text-amber-dark">
            Our Doctors
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-navy">{doctor.full_name}</span>
        </div>
      </nav>

      <DoctorProfileSection
        doctor={doctor}
        photoSide="left"
        ctaHref={
          extra.ctas[0].href ??
          whatsappLink(extra.ctas[0].whatsappMessage ?? `Hello, I would like to book a consultation with ${doctor.full_name}.`)
        }
        ctaLabel={extra.ctas[0].label.replace(/\s*→$/, "")}
      />

      <PageVideo videos={videos} />

      <PatientStoryCard story={extra.testimonial} />

      {extra.ctas.length > 1 && (
        <section className="bg-navy px-5 py-14 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {extra.ctas.slice(1).map((cta) =>
                cta.href ? (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="w-full rounded-sm bg-amber px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <a
                    key={cta.label}
                    href={whatsappLink(cta.whatsappMessage ?? `Hello, I would like to book a consultation with ${doctor.full_name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-sm border-2 border-amber-light px-7 py-3 text-center text-sm font-bold uppercase tracking-wide text-amber-light transition-colors hover:bg-amber-light hover:text-navy sm:w-auto"
                  >
                    {cta.label}
                  </a>
                )
              )}
            </div>
            <p className="mt-4 text-sm text-cream/60">WhatsApp: {siteConfig.phone.display}</p>
          </div>
        </section>
      )}
    </>
  );
}
