import Link from "next/link";
import type { Metadata } from "next";
import { createAuthClient } from "@/lib/supabase/auth-server";
import { signOut } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Admin | Yadav Homeo Clinic",
  robots: { index: false, follow: false },
};

const navLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Related Videos", href: "/admin/videos" },
  { label: "Photo Gallery", href: "/admin/photos" },
  { label: "Social Links", href: "/admin/settings" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createAuthClient();
  const {
    data: { user },
  } = supabase ? await supabase.auth.getUser() : { data: { user: null } };

  // Unauthenticated visitors only ever reach the login page here —
  // middleware.ts already redirects any other /admin/* request to
  // /admin/login before this layout runs. No nav chrome on that page.
  if (!user) return <div className="min-h-screen bg-cream-bg">{children}</div>;

  return (
    <div className="min-h-screen bg-cream-bg">
      <header className="border-b border-navy/10 bg-navy">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <nav className="flex flex-wrap items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/70 transition-colors hover:text-amber-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-cream/50 sm:inline">{user.email}</span>
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-sm border border-amber/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-cream/80 hover:text-amber-light"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>
    </div>
  );
}
