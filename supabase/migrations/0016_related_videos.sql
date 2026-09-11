-- Related Videos Gallery (2026-09-11 build spec, Section 4B) — one shared,
-- tag-scoped video pool. Unlike page_videos (0005_page_videos.sql, which
-- matches a video to one exact page_slug), a row here is matched into the
-- gallery on ANY page whose condition tag cluster overlaps its
-- condition_tags — a category page (e.g. skin-diseases) shows every video
-- tagged anywhere in its condition cluster (vitiligo, psoriasis, eczema,
-- ...), while a specific sub-page (e.g. vitiligo-treatment-jaipur) shows
-- only videos tagged with its own single condition tag. See
-- lib/data/condition-video-tags.ts for the cluster/tag definitions.
--
-- Column is named youtube_id (not youtube_url, despite the build spec's
-- wording) to match this project's existing convention on page_videos —
-- the raw YouTube video ID only, e.g. "dQw4w9WgXcQ" from
-- youtube.com/watch?v=dQw4w9WgXcQ or youtu.be/dQw4w9WgXcQ.
--
-- No seed rows on purpose — same rule as page_videos: no real videos
-- exist yet, and this project never ships placeholder/fake content. The
-- gallery section simply does not render on any page until real rows
-- exist for it.

create table if not exists videos (
  id uuid primary key default gen_random_uuid(),
  youtube_id text not null,
  title text not null,
  condition_tags text[] not null default '{}',
  display_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists videos_condition_tags_idx on videos using gin (condition_tags);
create index if not exists videos_display_order_idx on videos (display_order);

alter table videos enable row level security;

create policy "Public can read videos"
  on videos for select using (true);

comment on table videos is
  'Tag-scoped video pool for the Related Videos Gallery shown on disease/condition pages. Delete a row to remove a video; edit youtube_id/title/condition_tags to swap or update one; set is_active to false to hide one without deleting it.';
comment on column videos.youtube_id is
  'The YouTube video ID only (not the full URL) — the part after v= or youtu.be/.';
comment on column videos.condition_tags is
  'Lowercase, hyphenated condition tags (e.g. "vitiligo", "skin") used to match this video into the gallery on relevant pages — see lib/data/condition-video-tags.ts for the exact tag vocabulary used across the site.';
