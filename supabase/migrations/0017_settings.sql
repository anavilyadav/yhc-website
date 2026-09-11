-- Site-wide settings singleton (2026-09-11 build spec, Section 4C) — one
-- row, editable from the admin panel with no redeploy, same "content
-- changes never need a code change" rule as pricing/testimonials/videos.
-- Starts with facebook_url/instagram_url/youtube_url per the spec;
-- extensible for future site-wide settings without a schema rework.
--
-- siteConfig.social.googleBusinessProfile stays in lib/site-config.ts —
-- it's already a real, confirmed, working value, and the spec's settings
-- table is specifically scoped to the three social platforms below.

create table if not exists settings (
  id integer primary key default 1,
  facebook_url text,
  instagram_url text,
  youtube_url text,
  updated_at timestamptz not null default now(),
  constraint settings_singleton check (id = 1)
);

insert into settings (id) values (1) on conflict (id) do nothing;

alter table settings enable row level security;

create policy "Public can read settings"
  on settings for select using (true);

comment on table settings is
  'Single-row site-wide settings, editable without a redeploy. Update the one row (id = 1) — never insert a second row.';
comment on column settings.facebook_url is
  'Full URL to the clinic''s Facebook page. Null hides the Facebook icon everywhere it would otherwise appear (header, footer).';
comment on column settings.instagram_url is
  'Full URL to the clinic''s Instagram profile. Null hides the Instagram icon everywhere it would otherwise appear.';
comment on column settings.youtube_url is
  'Full URL to the clinic''s YouTube channel. Null hides the YouTube icon everywhere it would otherwise appear.';
