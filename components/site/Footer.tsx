import Link from "next/link";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "All Treatments", href: "/#conditions" },
  { label: "Online Consultation", href: "/online-consultation" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Book Appointment", href: "/appointment" },
];

const treatmentLinks = [
  { label: "Skin & Vitiligo", href: "/skin-diseases" },
  { label: "Autism & Child Development", href: "/autism" },
  { label: "Kidney & Renal Diseases", href: "/renal-diseases" },
  { label: "Autoimmune Diseases", href: "/autoimmune-diseases" },
  { label: "Nervous System Disorders", href: "/nervous-system-disease" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-navy px-5 py-12 text-cream">
      <div className="mx-auto max-w-6xl">
        <div className="mb-2 font-serif text-xl">{siteConfig.name}</div>
        <p className="mb-8 font-serif text-sm italic text-amber-light">
          Centre for chronic &amp; complex diseases · Est. {siteConfig.foundingYear} · Jaipur, Rajasthan
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-amber-light">
              Explore
            </h3>
            <ul className="space-y-2">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-amber-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-amber-light">
              Conditions
            </h3>
            <ul className="space-y-2">
              {treatmentLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-amber-light">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#conditions" className="text-sm font-bold text-amber-light">
                  All 14+ Categories →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-amber-light">
              Locations
            </h3>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>
                <Link href="/homeopathy-doctor-jaipur" className="hover:text-amber-light">
                  Main Branch, Jaipur
                </Link>
              </li>
              <li>
                <Link href="/homeopathy-clinic-jagatpura-jaipur" className="hover:text-amber-light">
                  Jagatpura Branch, Jaipur
                </Link>
              </li>
              <li>
                <a href={telLink()} className="hover:text-amber-light">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-light"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-amber-light">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-cream/60 hover:text-amber-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-amber/20" />

        <div className="rounded-sm bg-black/20 p-4">
          <p className="text-[11px] leading-relaxed text-cream/50">
            Medical Disclaimer: Information on this website is for educational purposes only.
            Treatment outcomes vary between individuals. Homeopathic treatment at Yadav Homeo
            Clinic is provided under qualified medical supervision in accordance with the Drug
            &amp; Magic Remedies Act 1954 and Telemedicine Practice Guidelines 2020.
          </p>
        </div>

        <hr className="my-8 border-amber/20" />

        <div className="flex flex-col items-start justify-between gap-2 text-[11px] text-cream/40 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}, Jaipur. All rights reserved.
          </span>
          <span>Rajasthan · Since {siteConfig.foundingYear}</span>
        </div>
      </div>
    </footer>
  );
}
