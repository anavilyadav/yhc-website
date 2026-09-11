import { createAuthClient } from "@/lib/supabase/auth-server";
import { updateSettings } from "./actions";

async function getSettingsRow() {
  const supabase = await createAuthClient();
  if (!supabase) return { facebook_url: "", instagram_url: "", youtube_url: "" };

  const { data } = await supabase
    .from("settings")
    .select("facebook_url, instagram_url, youtube_url")
    .eq("id", 1)
    .maybeSingle();

  return {
    facebook_url: data?.facebook_url ?? "",
    instagram_url: data?.instagram_url ?? "",
    youtube_url: data?.youtube_url ?? "",
  };
}

export default async function AdminSettingsPage() {
  const settings = await getSettingsRow();

  return (
    <div>
      <h1 className="font-serif text-2xl text-navy">Social Links</h1>
      <p className="mt-1 text-sm text-text-mid">
        Shown as icons in the site header and footer. Leave a field blank to hide that icon everywhere.
      </p>

      <form action={updateSettings} className="mt-8 max-w-lg rounded-xl border border-navy/10 bg-white p-5 shadow-sm">
        <label className="block text-sm font-semibold text-navy">Facebook URL</label>
        <input
          name="facebook_url"
          type="url"
          defaultValue={settings.facebook_url}
          placeholder="https://facebook.com/yourpage"
          className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
        />

        <label className="mt-4 block text-sm font-semibold text-navy">Instagram URL</label>
        <input
          name="instagram_url"
          type="url"
          defaultValue={settings.instagram_url}
          placeholder="https://instagram.com/yourpage"
          className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
        />

        <label className="mt-4 block text-sm font-semibold text-navy">YouTube URL</label>
        <input
          name="youtube_url"
          type="url"
          defaultValue={settings.youtube_url}
          placeholder="https://youtube.com/@yourchannel"
          className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
        />

        <button
          type="submit"
          className="mt-6 rounded-sm bg-amber px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy hover:opacity-90"
        >
          Save
        </button>
      </form>
    </div>
  );
}
