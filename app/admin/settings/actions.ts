"use server";

import { revalidatePath } from "next/cache";
import { createAuthClient } from "@/lib/supabase/auth-server";

function orNull(value: FormDataEntryValue | null): string | null {
  const str = String(value ?? "").trim();
  return str.length > 0 ? str : null;
}

export async function updateSettings(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  await supabase
    .from("settings")
    .update({
      facebook_url: orNull(formData.get("facebook_url")),
      instagram_url: orNull(formData.get("instagram_url")),
      youtube_url: orNull(formData.get("youtube_url")),
      updated_at: new Date().toISOString(),
    })
    .eq("id", 1);

  revalidatePath("/admin/settings");
  revalidatePath("/", "layout");
}
