"use server";

import { revalidatePath } from "next/cache";
import { createAuthClient } from "@/lib/supabase/auth-server";

export async function createPhoto(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  await supabase.from("gallery_photos").insert({
    page_association: String(formData.get("page_association") ?? "").trim(),
    image_url: String(formData.get("image_url") ?? "").trim(),
    caption: String(formData.get("caption") ?? "").trim(),
    display_order: Number(formData.get("display_order") ?? 0),
  });

  revalidatePath("/admin/photos");
}

export async function updatePhoto(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  const id = String(formData.get("id") ?? "");

  await supabase
    .from("gallery_photos")
    .update({
      page_association: String(formData.get("page_association") ?? "").trim(),
      image_url: String(formData.get("image_url") ?? "").trim(),
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
