"use server";

import { revalidatePath } from "next/cache";
import { createAuthClient } from "@/lib/supabase/auth-server";
import { extractYoutubeId } from "@/lib/youtube";

function parseTags(raw: string): string[] {
  return raw
    .split(",")
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean);
}

export async function createVideo(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  await supabase.from("videos").insert({
    youtube_id: extractYoutubeId(String(formData.get("youtube_url") ?? "")),
    title: String(formData.get("title") ?? ""),
    condition_tags: parseTags(String(formData.get("condition_tags") ?? "")),
    display_order: Number(formData.get("display_order") ?? 0),
  });

  revalidatePath("/admin/videos");
}

export async function updateVideo(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  const id = String(formData.get("id") ?? "");

  await supabase
    .from("videos")
    .update({
      youtube_id: extractYoutubeId(String(formData.get("youtube_url") ?? "")),
      title: String(formData.get("title") ?? ""),
      condition_tags: parseTags(String(formData.get("condition_tags") ?? "")),
      display_order: Number(formData.get("display_order") ?? 0),
      is_active: formData.get("is_active") === "on",
    })
    .eq("id", id);

  revalidatePath("/admin/videos");
}

export async function deleteVideo(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  const id = String(formData.get("id") ?? "");
  await supabase.from("videos").delete().eq("id", id);

  revalidatePath("/admin/videos");
}
