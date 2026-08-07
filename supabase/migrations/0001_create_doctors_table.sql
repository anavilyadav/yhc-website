-- ============================================================================
-- YHC — doctors table
-- Backs: /about/ (Dr T P Yadav + Dr Anavil Yadav profile sections),
--        /our-doctors/ (individual doctor pages, when built),
--        Physician JSON-LD on both.
-- Per project Hard Rules: doctor bios are content the doctor edits later,
-- so this lives in Supabase (admin-panel editable) instead of hardcoded JSX.
-- ============================================================================

create table if not exists public.doctors (
  id                     uuid primary key default gen_random_uuid(),
  slug                   text unique not null,               -- 'dr-tp-yadav' | 'dr-anavil-yadav'
  display_order          int  not null default 0,

  -- Header block
  full_name              text not null,
  role_title             text not null,                       -- e.g. "Founder & Chief Homeopathic Physician | BHMS"
  header_subline         text,                                 -- e.g. "35 Years of Clinical Practice | Yadav Homeo Clinic, Jaipur"

  -- Story
  bio_paragraphs         jsonb not null default '[]'::jsonb,   -- ordered array of paragraph strings
  short_bio              text,                                 -- homepage card / sidebar version

  -- Clinical
  specializations        jsonb not null default '[]'::jsonb,   -- array of strings, rendered as tags/cards
  consultation_points     jsonb,                                -- nullable: array of {heading, body} — Anavil-style "what a consult looks like"
  philosophy_quote       text,                                 -- nullable

  -- Credentials — left null until the doctor supplies the real value.
  -- UI + JSON-LD must treat these as optional and simply omit the field
  -- when null. Do NOT fill with placeholder text.
  college_name           text,
  credential_name        text default 'BHMS',
  credential_year        text,                                  -- e.g. '2016'
  registration_number    text,
  registration_council   text default 'Rajasthan Homeopathic Council / Central Council of Homeopathy, India',

  -- Media
  photo_url              text,
  photo_alt              text,

  -- Social (Dr Anavil's personal brand — sameAs in schema)
  social_instagram       text,
  social_linkedin        text,
  social_youtube         text,

  -- Publishing
  is_published            boolean not null default true,
  updated_at              timestamptz not null default now(),
  created_at              timestamptz not null default now()
);

create index if not exists doctors_slug_idx on public.doctors (slug);
create index if not exists doctors_published_order_idx on public.doctors (is_published, display_order);

-- Keep updated_at fresh on every admin edit
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists doctors_set_updated_at on public.doctors;
create trigger doctors_set_updated_at
before update on public.doctors
for each row execute function public.set_updated_at();

-- RLS: public can read published doctors, only service role / authenticated
-- admin can write. Adjust the admin policy to match your actual admin auth
-- setup (Supabase Auth role, custom claim, etc.) before going live.
alter table public.doctors enable row level security;

create policy "Public can read published doctors"
  on public.doctors for select
  using (is_published = true);

create policy "Service role full access"
  on public.doctors for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
