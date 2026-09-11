"use server";

import { redirect } from "next/navigation";
import { createAuthClient } from "@/lib/supabase/auth-server";

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const supabase = await createAuthClient();
  if (!supabase) redirect("/admin/login?error=Supabase is not configured.");

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect(`/admin/login?error=${encodeURIComponent(error.message)}`);

  redirect("/admin");
}

export async function signOut() {
  const supabase = await createAuthClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/admin/login");
}
