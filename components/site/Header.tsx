import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site-config";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/#conditions" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-lg text-cream">{siteConfig.name}</span>
          <span className="text-[10px] tracking-[0.2em] text-amber-light/80 uppercase">
            Classical Homeopathy · Est. {siteConfig.foundingYear}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition-colors hover:text-amber-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-sm bg-amber px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}
