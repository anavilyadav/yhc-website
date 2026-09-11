import { createAuthClient } from "@/lib/supabase/auth-server";
import { createVideo, updateVideo, deleteVideo } from "./actions";

interface VideoRow {
  id: string;
  youtube_id: string;
  title: string;
  condition_tags: string[];
  display_order: number;
  is_active: boolean;
}

async function getAllVideos(): Promise<VideoRow[]> {
  const supabase = await createAuthClient();
  if (!supabase) return [];

  const { data } = await supabase
    .from("videos")
    .select("id, youtube_id, title, condition_tags, display_order, is_active")
    .order("display_order");

  return data ?? [];
}

export default async function AdminVideosPage() {
  const videos = await getAllVideos();

  return (
    <div>
      <h1 className="font-serif text-2xl text-navy">Related Videos</h1>
      <p className="mt-1 text-sm text-text-mid">
        Appears in the Related Videos Gallery on disease pages. A category page (e.g. Skin Diseases) shows any
        video whose tags overlap its condition cluster; a specific sub-page (e.g. Vitiligo) shows only videos
        tagged with that exact condition. Paste a full YouTube URL or just the video ID.
      </p>

      <form action={createVideo} className="mt-8 rounded-xl border border-navy/10 bg-white p-5 shadow-sm">
        <h2 className="font-serif text-lg text-navy">Add a Video</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-navy">YouTube URL or ID</label>
            <input
              name="youtube_url"
              required
              placeholder="https://youtu.be/dQw4w9WgXcQ"
              className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy">Title</label>
            <input
              name="title"
              required
              className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy">Condition Tags (comma-separated)</label>
            <input
              name="condition_tags"
              required
              placeholder="vitiligo, skin"
              className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy">Display Order</label>
            <input
              name="display_order"
              type="number"
              defaultValue={0}
              className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 rounded-sm bg-amber px-4 py-2 text-sm font-bold uppercase tracking-wide text-navy hover:opacity-90"
        >
          Add Video
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {videos.length === 0 && <p className="text-sm text-text-mid">No videos yet.</p>}
        {videos.map((video) => (
          <form
            key={video.id}
            action={updateVideo}
            className="rounded-xl border border-navy/10 bg-white p-5 shadow-sm"
          >
            <input type="hidden" name="id" value={video.id} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-text-mid">
                  YouTube URL or ID
                </label>
                <input
                  name="youtube_url"
                  defaultValue={video.youtube_id}
                  className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-1.5 text-sm focus:border-amber focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-text-mid">Title</label>
                <input
                  name="title"
                  defaultValue={video.title}
                  className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-1.5 text-sm focus:border-amber focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-text-mid">
                  Condition Tags
                </label>
                <input
                  name="condition_tags"
                  defaultValue={video.condition_tags.join(", ")}
                  className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-1.5 text-sm focus:border-amber focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-text-mid">
                  Display Order
                </label>
                <input
                  name="display_order"
                  type="number"
                  defaultValue={video.display_order}
                  className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-1.5 text-sm focus:border-amber focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-navy">
                <input type="checkbox" name="is_active" defaultChecked={video.is_active} />
                Active (visible on the site)
              </label>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="rounded-sm bg-navy px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-cream hover:opacity-90"
                >
                  Save
                </button>
                <button
                  type="submit"
                  formAction={deleteVideo}
                  className="rounded-sm border border-red-300 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}
