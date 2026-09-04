import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { PageVideo } from "@/lib/types";

/**
 * No fallback seed here on purpose — unlike diseases/pricing/testimonials,
 * there is no confirmed real video yet. Showing a placeholder video would
 * be fabricated content, so an unconfigured or empty table simply means
 * no videos render on any page, never a fake one.
 */
export async function getPageVideos(pageSlug: string): Promise<PageVideo[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("page_videos")
    .select("id, page_slug, youtube_id, title, caption, sort_order, is_active")
    .eq("page_slug", pageSlug)
    .eq("is_active", true)
    .order("sort_order");

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id,
    pageSlug: row.page_slug,
    youtubeId: row.youtube_id,
    title: row.title,
    caption: row.caption,
    sortOrder: row.sort_order,
  }));
}
