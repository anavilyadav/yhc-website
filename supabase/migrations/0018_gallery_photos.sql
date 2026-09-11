-- Photo gallery (2026-09-11 build spec, Section 6) — same shared,
-- exact-page-slug pattern as page_videos (0005_page_videos.sql): a photo
-- can be added to ANY page (disease pages, homepage, doctor bios,
-- appointment, locations, blog posts...) by pasting a row here, no code
-- change, no redeploy. Distinct from the inline `media: {type:"photo"}`
-- break inside a disease page's own content sections (PhotoEmbed) — this
-- is a page-level photo strip/grid, the photo counterpart to PageVideo.
--
-- No seed rows on purpose — same rule as page_videos/videos: no real
-- clinic photos exist yet in this table, and this project never ships
-- placeholder/fake content. The gallery section simply does not render
-- on any page until real rows exist for it.

create table if not exists gallery_photos (
  id uuid primary key default gen_random_uuid(),
  -- Matches the page's own slug/identifier, e.g. 'skin-diseases',
  -- 'vitiligo-treatment-jaipur', 'home', 'about', 'appointment' — same
  -- convention as page_videos.page_slug.
  page_association text not null,
  image_url text not null,
  -- Shown as visible text under the photo and used as its alt text.
  -- Search engines and AI tools cannot "see" the photo, only read this —
  -- always fill this in with a real, specific description.
  caption text not null,
  display_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists gallery_photos_page_association_idx on gallery_photos (page_association, display_order);

alter table gallery_photos enable row level security;

create policy "Public can read gallery photos"
  on gallery_photos for select using (true);

comment on table gallery_photos is
  'One row per photo, shown in the photo gallery on the page named by page_association. Delete a row to remove a photo; edit image_url/caption to swap or update one; set is_active to false to hide one without deleting it.';
comment on column gallery_photos.page_association is
  'Which page this photo appears on. Disease pages use their URL slug (e.g. "vitiligo-treatment-jaipur"); other pages use a fixed name such as "home", "about", "appointment" — same convention as page_videos.page_slug.';
comment on column gallery_photos.caption is
  'A short, specific written description of the photo — required so it still carries SEO/GEO/accessibility value (used as the image alt text) even though search engines and AI tools cannot see the photo itself.';
