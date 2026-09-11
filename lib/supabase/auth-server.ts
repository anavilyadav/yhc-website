import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Cookie-aware Supabase client for the admin panel's Server Components and
 * Server Actions — knows who is logged in (unlike lib/supabase/server.ts's
 * clients, which never persist a session). Used only under app/admin/.
 */
export async function createAuthClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null;

  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Called from a Server Component render, not a Server Action —
          // middleware already refreshes the session on every request, so
          // this is safe to ignore.
        }
      },
    },
  });
}
