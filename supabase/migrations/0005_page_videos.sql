-- Video content plan (Trust & Sales Playbook, ch.8/11) — one shared table
-- so a video can be added to ANY page (disease pages, homepage, doctor
-- bios, appointment, locations, blog posts...) by pasting a row here,
-- the same way pricing/FAQs are already edited — no code change, no
-- redeploy. Dr Anavil records on his own phone, uploads to YouTube
-- (so views count on the channel), and pastes the video's ID + a short
-- caption. No seed rows: no real videos exist yet, and this project
-- never ships placeholder/fake content — the site simply shows nothing
-- for a page until a real row exists for it.

create table if not exists page_videos (
  id uuid primary key default gen_random_uuid(),
  -- Matches the page's own slug/identifier, e.g. 'skin-diseases',
  -- 'vitiligo-treatment-jaipur', 'home', 'about', 'appointment'.
  page_slug text not null,
  -- The part after "v=" or "youtu.be/" in a normal YouTube URL —
  -- e.g. https://youtu.be/dQw4w9WgXcQ -> youtube_id = 'dQw4w9WgXcQ'.
  youtube_id text not null,
  title text not null,
  -- Shown as visible text next to the video. This is what search
  -- engines and AI tools actually read, since they cannot watch the
  -- video itself — always fill this in with a real, specific summary.
  caption text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

create index if not exists page_videos_page_slug_idx on page_videos (page_slug, sort_order);

alter table page_videos enable row level security;

create policy "Public can read page videos"
  on page_videos for select using (true);

comment on table page_videos is
  'One row per video, shown on the page named by page_slug. Delete a row to remove a video; edit youtube_id/title/caption to swap or update one; set is_active to false to hide one without deleting it.';
comment on column page_videos.page_slug is
  'Which page this video appears on. Disease pages use their URL slug (e.g. "vitiligo-treatment-jaipur"); other pages use a fixed name such as "home", "about", "appointment".';
comment on column page_videos.youtube_id is
  'The YouTube video ID only (not the full URL) — the part after v= or youtu.be/.';
comment on column page_videos.caption is
  'A short, specific written summary of what the video covers — required so the video still carries SEO/GEO value even though search engines and AI tools cannot watch it.';
