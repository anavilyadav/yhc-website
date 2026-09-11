import { createAuthClient } from "@/lib/supabase/auth-server";
import { createPhoto, updatePhoto, deletePhoto } from "./actions";
import { CATEGORY_VIDEO_TAG_CLUSTERS, SUB_PAGE_VIDEO_TAG } from "@/lib/data/condition-video-tags";
import { siteConfig } from "@/lib/site-config";

interface PhotoRow {
  id: string;
  page_association: string;
  image_url: string;
  caption: string;
  display_order: number;
  is_active: boolean;
}

const KNOWN_PAGE_ASSOCIATIONS = [
  "home",
  "about",
  "appointment",
  "contact",
  "faq",
  "homeopathy-faq",
  "online-consultation",
  "patient-stories",
  "booking-confirmed",
  siteConfig.doctors.founder.slug,
  siteConfig.doctors.physician.slug,
  ...Object.keys(CATEGORY_VIDEO_TAG_CLUSTERS),
  ...Object.keys(SUB_PAGE_VIDEO_TAG),
];

async function getAllPhotos(): Promise<PhotoRow[]> {
  const supabase = await createAuthClient();
  if (!supabase) return [];

  const { data } = await supabase
    .from("gallery_photos")
    .select("id, page_association, image_url, caption, display_order, is_active")
    .order("page_association")
    .order("display_order");

  return data ?? [];
}

export default async function AdminPhotosPage() {
  const photos = await getAllPhotos();

  return (
    <div>
      <h1 className="font-serif text-2xl text-navy">Photo Gallery</h1>
      <p className="mt-1 text-sm text-text-mid">
        Appears as a photo grid on the page named by &quot;Page&quot; below — use a disease page&apos;s URL slug
        (e.g. <code className="text-xs">skin-diseases</code>, <code className="text-xs">vitiligo-treatment-jaipur</code>)
        or a fixed name like <code className="text-xs">home</code>, <code className="text-xs">about</code>. The
        image must already be hosted somewhere (e.g. uploaded to Supabase Storage) — paste its URL below.
      </p>

      <datalist id="page-associations">
        {KNOWN_PAGE_ASSOCIATIONS.map((slug) => (
          <option key={slug} value={slug} />
        ))}
      </datalist>

      <form action={createPhoto} className="mt-8 rounded-xl border border-navy/10 bg-white p-5 shadow-sm">
        <h2 className="font-serif text-lg text-navy">Add a Photo</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-navy">Page</label>
            <input
              name="page_association"
              required
              list="page-associations"
              placeholder="home"
              className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy">Image URL</label>
            <input
              name="image_url"
              type="url"
              required
              placeholder="https://..."
              className="mt-1.5 w-full rounded-sm border border-navy/20 px-3 py-2 text-sm focus:border-amber focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-navy">Caption</label>
            <input
              name="caption"
              required
              placeholder="A short, specific description of the photo"
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
          Add Photo
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {photos.length === 0 && <p className="text-sm text-text-mid">No photos yet.</p>}
        {photos.map((photo) => (
          <form
            key={photo.id}
            action={updatePhoto}
            className="flex flex-col gap-4 rounded-xl border border-navy/10 bg-white p-5 shadow-sm sm:flex-row"
          >
            <input type="hidden" name="id" value={photo.id} />
            {/* eslint-disable-next-line @next/next/no-img-element -- admin preview of an arbitrary pasted URL */}
            <img
              src={photo.image_url}
              alt={photo.caption}
              className="h-24 w-24 shrink-0 rounded-lg border border-navy/10 object-cover"
            />
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-text-mid">Page</label>
                  <input
                    name="page_association"
                    defaultValue={photo.page_association}
                    list="page-associations"
                    className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-1.5 text-sm focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-text-mid">
                    Image URL
                  </label>
                  <input
                    name="image_url"
                    defaultValue={photo.image_url}
                    className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-1.5 text-sm focus:border-amber focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-text-mid">
                    Caption
                  </label>
                  <input
                    name="caption"
                    defaultValue={photo.caption}
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
                    defaultValue={photo.display_order}
                    className="mt-1 w-full rounded-sm border border-navy/20 px-3 py-1.5 text-sm focus:border-amber focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-navy">
                  <input type="checkbox" name="is_active" defaultChecked={photo.is_active} />
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
                    formAction={deletePhoto}
                    className="rounded-sm border border-red-300 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}
