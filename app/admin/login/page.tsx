import type { Metadata } from "next";
import { signIn } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Admin Login | Yadav Homeo Clinic",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream-bg px-5 py-16">
      <form action={signIn} className="w-full max-w-sm rounded-xl border border-navy/10 bg-white p-8 shadow-sm">
        <h1 className="font-serif text-xl text-navy">Admin Login</h1>
        <p className="mt-1 text-sm text-text-mid">Yadav Homeo Clinic content admin</p>

        {error && (
          <p className="mt-4 rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <label className="mt-6 block text-sm font-semibold text-navy" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
        />

        <label className="mt-4 block text-sm font-semibold text-navy" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-sm bg-amber px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
