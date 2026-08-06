import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Public, read-only Supabase client.
 * Uses the anon key — safe to expose to the browser. Row Level Security
 * policies on the `diseases` and `testimonials` tables restrict this key
 * to SELECT-only on published rows (see supabase/schema.sql).
 *
 * Returns null when env vars are not configured yet (e.g. first local run
 * before Supabase project is connected) so callers can fall back gracefully
 * instead of crashing the build.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
