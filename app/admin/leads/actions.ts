"use server";

import { revalidatePath } from "next/cache";
import { createAuthClient } from "@/lib/supabase/auth-server";

export async function deleteContactSubmission(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  const id = String(formData.get("id") ?? "");
  await supabase.from("contact_submissions").delete().eq("id", id);

  revalidatePath("/admin/leads");
}

export async function deleteAssessmentSubmission(formData: FormData) {
  const supabase = await createAuthClient();
  if (!supabase) return;

  const id = String(formData.get("id") ?? "");
  await supabase.from("assessment_submissions").delete().eq("id", id);

  revalidatePath("/admin/leads");
}
