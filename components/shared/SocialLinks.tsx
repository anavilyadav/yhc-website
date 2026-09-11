import type { ReactNode } from "react";
import type { SiteSettings } from "@/lib/types";

/**
 * Facebook/Instagram/YouTube icon row (2026-09-11 build spec, Section 4C)
 * — each icon renders only if its URL is set in the `settings` table.
 * Renders nothing at all if none are set, so it's safe to drop into the
 * header and footer unconditionally.
 */
export default function SocialLinks({
  settings,
  className = "",
  iconClassName = "h-5 w-5",
}: {
  settings: SiteSettings;
  className?: string;
  iconClassName?: string;
}) {
  const links: { name: string; url: string; icon: ReactNode }[] = [
    settings.facebookUrl
      ? { name: "Facebook", url: settings.facebookUrl, icon: <FacebookIcon className={iconClassName} /> }
      : null,
    settings.instagramUrl
      ? { name: "Instagram", url: settings.instagramUrl, icon: <InstagramIcon className={iconClassName} /> }
      : null,
    settings.youtubeUrl
      ? { name: "YouTube", url: settings.youtubeUrl, icon: <YouTubeIcon className={iconClassName} /> }
      : null,
  ].filter((link) => link !== null);

  if (links.length === 0) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Yadav Homeo Clinic on ${link.name}`}
          className="text-cream/60 transition-colors hover:text-amber-light"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 7.2s-.21-1.5-.86-2.16c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.12c-.42.05-1.34.05-2.16.92-.65.66-.86 2.16-.86 2.16S2.18 8.96 2.18 10.7v1.6c0 1.74.2 3.5.2 3.5s.21 1.5.86 2.16c.82.87 1.9.84 2.38.93 1.72.17 7.38.22 7.38.22s3.6 0 6.58-.12c.42-.05 1.34-.05 2.16-.92.65-.66.86-2.16.86-2.16s.2-1.76.2-3.5v-1.6c0-1.74-.2-3.5-.2-3.5ZM9.95 14.6V8.9l5.4 2.86-5.4 2.85Z" />
    </svg>
  );
}
