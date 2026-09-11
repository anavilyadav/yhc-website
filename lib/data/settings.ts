import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { SiteSettings } from "@/lib/types";

const EMPTY_SETTINGS: SiteSettings = {
  facebookUrl: null,
  instagramUrl: null,
  youtubeUrl: null,
};

/**
 * Falls back to all-null (never a fabricated/placeholder link) when
 * Supabase is unreachable or the singleton row is missing — the caller
 * (SocialLinks) already renders nothing for a null field, so this is safe.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return EMPTY_SETTINGS;

  const { data, error } = await supabase
    .from("settings")
    .select("facebook_url, instagram_url, youtube_url")
    .eq("id", 1)
    .maybeSingle();

  if (error || !data) return EMPTY_SETTINGS;

  return {
    facebookUrl: data.facebook_url,
    instagramUrl: data.instagram_url,
    youtubeUrl: data.youtube_url,
  };
}
