import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { RelatedVideo } from "@/lib/types";

/**
 * No fallback seed here on purpose — same rule as getPageVideos: no real
 * videos exist yet, so an unconfigured or empty table simply means the
 * gallery doesn't render anywhere, never a fake/placeholder video.
 *
 * `tags` is the caller's own condition tag cluster (a category page) or
 * single condition tag (a specific sub-page) — see
 * lib/data/condition-video-tags.ts. Matching is "any tag overlaps",
 * so a category page's broader cluster naturally pulls in every video
 * tagged with any of its sub-conditions, while a sub-page passing just
 * its own single tag only pulls videos tagged with that exact condition.
 */
export async function getRelatedVideos(tags: string[]): Promise<RelatedVideo[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase || tags.length === 0) return [];

  const { data, error } = await supabase
    .from("videos")
    .select("id, youtube_id, title, condition_tags, display_order")
    .eq("is_active", true)
    .overlaps("condition_tags", tags)
    .order("display_order", { ascending: true });

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id,
    youtubeId: row.youtube_id,
    title: row.title,
    conditionTags: row.condition_tags,
    displayOrder: row.display_order,
  }));
}
