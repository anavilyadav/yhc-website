"use server";

import { revalidatePath } from "next/cache";
import { createAuthClient } from "@/lib/supabase/auth-server";
import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * Uploads a chosen file to the gallery-photos Storage bucket and returns
 * its public URL, or null if no file was chosen — lets the admin either
 * upload a photo directly or paste a URL of one already hosted
 * elsewhere, without forcing one or the other.
 */
async function uploadPhotoFile(supabase: SupabaseClient, file: File): Promise<string | null> {
  if (!file || file.size === 0) return null;

  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("gallery-photos").upload(path, file, {
    contentType: file.type || undefined,
  });
  if (error) return null;

  const { data } = supabase.storage.from("gallery-photos").getPublicUrl(path);
  return data.publicUrl;
}

export async function createPhoto(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  const file = formData.get("image_file");
  const uploadedUrl = file instanceof File ? await uploadPhotoFile(supabase, file) : null;
  const pastedUrl = String(formData.get("image_url") ?? "").trim();

  await supabase.from("gallery_photos").insert({
    page_association: String(formData.get("page_association") ?? "").trim(),
    image_url: uploadedUrl ?? pastedUrl,
    caption: String(formData.get("caption") ?? "").trim(),
    display_order: Number(formData.get("display_order") ?? 0),
  });

  revalidatePath("/admin/photos");
}

export async function updatePhoto(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  const id = String(formData.get("id") ?? "");
  const file = formData.get("image_file");
  const uploadedUrl = file instanceof File ? await uploadPhotoFile(supabase, file) : null;
  const pastedUrl = String(formData.get("image_url") ?? "").trim();

  await supabase
    .from("gallery_photos")
    .update({
      page_association: String(formData.get("page_association") ?? "").trim(),
      // A newly uploaded file takes priority; otherwise keep whatever is
      // in the URL field (pre-filled with the current image's URL).
      image_url: uploadedUrl ?? pastedUrl,
      caption: String(formData.get("caption") ?? "").trim(),
      display_order: Number(formData.get("display_order") ?? 0),
      is_active: formData.get("is_active") === "on",
    })
    .eq("id", id);

  revalidatePath("/admin/photos");
}

export async function deletePhoto(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  const id = String(formData.get("id") ?? "");
  await supabase.from("gallery_photos").delete().eq("id", id);

  revalidatePath("/admin/photos");
}
