-- Storage bucket for direct photo uploads from the admin panel
-- (/admin/photos) — until now, adding a photo required the image to
-- already be hosted somewhere else (Supabase Storage via the dashboard,
-- Google Drive, etc.) and pasting its URL. This bucket lets Dr Anavil
-- upload a photo file directly from his computer/phone instead.

insert into storage.buckets (id, name, public)
values ('gallery-photos', 'gallery-photos', true)
on conflict (id) do nothing;

-- Public read (photos are shown on public pages), authenticated write
-- (only logged-in admin users can upload/manage) — same authenticated-
-- write pattern as the gallery_photos table itself (migration 0019).

create policy "Public can read gallery photo files"
  on storage.objects for select
  using (bucket_id = 'gallery-photos');

create policy "Authenticated can upload gallery photo files"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'gallery-photos');

create policy "Authenticated can update gallery photo files"
  on storage.objects for update to authenticated
  using (bucket_id = 'gallery-photos');

create policy "Authenticated can delete gallery photo files"
  on storage.objects for delete to authenticated
  using (bucket_id = 'gallery-photos');
