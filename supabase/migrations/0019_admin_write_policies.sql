-- Admin panel (app/admin/) write access — the videos, settings, and
-- gallery_photos tables so far only have a public SELECT policy. Any
-- authenticated Supabase Auth user (the admin panel is gated behind
-- login in middleware.ts) can now also insert/update/delete rows here.

create policy "Authenticated can insert videos"
  on videos for insert to authenticated with check (true);
create policy "Authenticated can update videos"
  on videos for update to authenticated using (true) with check (true);
create policy "Authenticated can delete videos"
  on videos for delete to authenticated using (true);

create policy "Authenticated can insert gallery photos"
  on gallery_photos for insert to authenticated with check (true);
create policy "Authenticated can update gallery photos"
  on gallery_photos for update to authenticated using (true) with check (true);
create policy "Authenticated can delete gallery photos"
  on gallery_photos for delete to authenticated using (true);

-- settings is a singleton row (id = 1) — no insert/delete policy needed,
-- the row always exists from migration 0017.
create policy "Authenticated can update settings"
  on settings for update to authenticated using (true) with check (true);
