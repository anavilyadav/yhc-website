import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

/**
 * Server-side read client (Server Components, ISR-revalidated fetches).
 * Uses the anon key — safe for public reads under RLS policies.
 * Returns null when env vars aren't configured so callers can fall back
 * gracefully instead of crashing the build (see lib/data/*.ts, lib/supabase/queries/*.ts).
 */
export function createClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}

export const getSupabaseServerClient = createClient;

/**
 * Privileged server-only client for writes (e.g. contact form submissions)
 * from Route Handlers. Requires SUPABASE_SERVICE_ROLE_KEY — never import
 * this from a Client Component.
 */
export function getSupabaseServiceClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) return null;
  return createSupabaseClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });
}
