import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { GalleryPhoto } from "@/lib/types";

/**
 * No fallback seed here on purpose — same rule as getPageVideos: no real
 * clinic photos exist yet, so an unconfigured or empty table simply means
 * no gallery renders on any page, never a placeholder/fake photo.
 */
export async function getGalleryPhotos(pageAssociation: string): Promise<GalleryPhoto[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("gallery_photos")
    .select("id, page_association, image_url, caption, display_order")
    .eq("page_association", pageAssociation)
    .eq("is_active", true)
    .order("display_order");

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id,
    pageAssociation: row.page_association,
    imageUrl: row.image_url,
    caption: row.caption,
    displayOrder: row.display_order,
  }));
}
