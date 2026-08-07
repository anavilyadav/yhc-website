-- STEP 3 — Appointment & Contact pages
-- Tables the doctor can edit from the Supabase Table Editor (or a future
-- admin panel) without needing a redeploy. Pages consuming these use
-- Next.js ISR, so edits go live within the revalidate window (60s, see
-- app/appointment/page.tsx and app/contact/page.tsx).

create extension if not exists "pgcrypto";

-- ─────────────────────────────────────────────────────────────
-- Clinic locations (Contact page)
-- ─────────────────────────────────────────────────────────────
create table if not exists clinic_locations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug in ('main', 'jagatpura')),
  name text not null,
  address_line text,
  city text not null default 'Jaipur',
  state text not null default 'Rajasthan',
  pin_code text,
  phone text not null,
  whatsapp text not null,
  landmark text,
  map_embed_url text,
  timings_weekday text not null default '',
  timings_sunday text not null default '',
  updated_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Pricing plans (Appointment page fee cards)
-- ─────────────────────────────────────────────────────────────
create table if not exists pricing_plans (
  id uuid primary key default gen_random_uuid(),
  code text not null unique check (
    code in ('in_clinic_first', 'in_clinic_followup', 'online_first', 'online_followup')
  ),
  title text not null,
  mode text not null check (mode in ('in_clinic', 'online')),
  price_inr integer, -- null = "fee to be confirmed", shown gracefully in UI
  inclusions text[] not null default '{}',
  updated_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- FAQs (reused across pages via the `page` column)
-- ─────────────────────────────────────────────────────────────
create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  page text not null default 'appointment',
  question text not null,
  answer text not null,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Contact form submissions
-- ─────────────────────────────────────────────────────────────
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  city_country text not null,
  consultation_type text not null check (
    consultation_type in ('In-Clinic — Jaipur', 'Online — India', 'Online — International')
  ),
  condition text not null,
  heard_from text,
  message text,
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────────────────────────
-- Row Level Security
-- ─────────────────────────────────────────────────────────────
alter table clinic_locations enable row level security;
alter table pricing_plans enable row level security;
alter table faqs enable row level security;
alter table contact_submissions enable row level security;

create policy "Public can read clinic locations"
  on clinic_locations for select using (true);

create policy "Public can read pricing plans"
  on pricing_plans for select using (true);

create policy "Public can read faqs"
  on faqs for select using (true);

-- No public select policy on contact_submissions — reads happen only via
-- the service-role key from app/api/contact/route.ts (server-side).
create policy "Anyone can submit the contact form"
  on contact_submissions for insert with check (true);

-- ─────────────────────────────────────────────────────────────
-- Seed: known-confirmed values only (see lib/data/*.ts for rationale)
-- ─────────────────────────────────────────────────────────────
insert into clinic_locations (slug, name, phone, whatsapp, timings_weekday, timings_sunday)
values (
  'main',
  'Yadav Homeo Clinic — Main Branch',
  '+91-8949427254',
  '918949427254',
  'Mon–Sat: Morning 9:00 AM–1:30 PM · Evening 5:00 PM–8:30 PM',
  'Sunday: 10:00 AM–1:00 PM (by prior appointment only)'
)
on conflict (slug) do nothing;

insert into clinic_locations (slug, name, phone, whatsapp)
values (
  'jagatpura',
  'Yadav Homeo Clinic — Jagatpura',
  '+91-8949427254',
  '918949427254'
)
on conflict (slug) do nothing;

insert into pricing_plans (code, title, mode, price_inr, inclusions) values
(
  'in_clinic_first', 'First Consultation — In Clinic', 'in_clinic', 3500,
  array['45 to 60 minutes with the doctor', 'Full case history and analysis', 'Constitutional remedy prescription', 'Detailed guidance on diet, lifestyle and what to expect']
),
(
  'in_clinic_followup', 'Follow-Up Consultation — In Clinic', 'in_clinic', 2500,
  array['Review of progress since last visit', 'Prescription adjustment as needed', 'Report review if applicable', 'Guidance for the next 4 to 6 weeks']
),
(
  'online_first', 'First Consultation — Online', 'online', null,
  array['Detailed review of your intake form and medical records', 'Full constitutional analysis', 'Personalised prescription sent within 24 to 48 hours', 'Diet and lifestyle instructions', 'Available to patients across India and internationally']
),
(
  'online_followup', 'Follow-Up Consultation — Online', 'online', null,
  array['Progress review based on your update', 'Prescription modification as needed', 'Report analysis', 'Guidance for the next follow-up period']
)
on conflict (code) do nothing;
