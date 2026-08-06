-- YHC website — Stage 1 Supabase schema
-- Covers content the doctor edits directly from the admin panel:
-- disease category cards (homepage + treatment pages) and testimonials.
-- Run this once in the Supabase SQL editor (or via `supabase db push`).

-- ============================================================
-- DISEASES  (homepage "Conditions We Treat" cards + disease pages)
-- ============================================================
create table if not exists public.diseases (
  slug text primary key,
  title text not null,
  description text not null,
  is_specialty boolean not null default false,
  is_published boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.diseases enable row level security;

-- Anyone (anon key, used by the website) can read published diseases only.
create policy "Public can read published diseases"
  on public.diseases for select
  using (is_published = true);

-- Writes are only allowed via the service_role key (admin panel / server actions),
-- which bypasses RLS by design — no additional write policy needed for anon.

-- ============================================================
-- TESTIMONIALS  (homepage + patient stories page)
-- ============================================================
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  patient_name text not null,
  age integer,
  city text not null,
  condition text not null,
  quote text not null,
  treatment_duration text,
  is_featured boolean not null default false,
  is_published boolean not null default true,
  display_order integer not null default 0,
  consent_on_file boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.testimonials enable row level security;

create policy "Public can read published testimonials"
  on public.testimonials for select
  using (is_published = true);

-- ============================================================
-- updated_at auto-touch trigger
-- ============================================================
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger diseases_set_updated_at
  before update on public.diseases
  for each row execute function public.set_updated_at();

create trigger testimonials_set_updated_at
  before update on public.testimonials
  for each row execute function public.set_updated_at();

-- ============================================================
-- SEED DATA — mirrors lib/data/diseases.ts and lib/data/testimonials.ts
-- fallback constants. Source: STEP1_Homepage_Content.docx
-- ============================================================
insert into public.diseases (slug, title, description, is_specialty, display_order) values
  ('skin-diseases', 'Skin Diseases', 'Vitiligo, Psoriasis, Eczema, Urticaria and all chronic skin conditions that haven''t responded to conventional treatment. Our most recognised speciality.', true, 1),
  ('autoimmune-diseases', 'Autoimmune Diseases', 'Rheumatoid Arthritis, Lupus, Thyroid disorders, Ankylosing Spondylitis and all conditions where the body''s immune system turns against itself.', false, 2),
  ('cancer', 'Cancer Support', 'Homeopathy as a supportive therapy during and after cancer treatment — to improve immunity, reduce side effects of chemo/radiation, and strengthen recovery.', false, 3),
  ('renal-diseases', 'Kidney & Renal Diseases', 'High creatinine, CKD, kidney failure, nephrotic syndrome — renal conditions with proven homeopathic management. We have helped many patients avoid dialysis.', true, 4),
  ('genetic-diseases', 'Genetic & Rare Diseases', 'Down syndrome, Thalassemia, Haemophilia and inherited conditions — gentle, constitutional homeopathic support for patients and families.', false, 5),
  ('autism', 'Autism & Child Development', 'One of India''s most dedicated homeopathic practices for autism spectrum disorder, ADHD, speech delays and developmental challenges. 5,000+ children treated.', true, 6),
  ('nervous-system-disease', 'Nervous System Disorders', 'Cerebral Palsy, Epilepsy, Migraine, Parkinson''s and neurological conditions managed with constitutional homeopathic care.', false, 7),
  ('childrens-health', 'Children''s Health', 'Recurring infections, tonsillitis, bed-wetting, growth issues and all paediatric conditions — safe, gentle, effective. Children love our sweet homeopathic pills.', false, 8),
  ('womens-health', 'Women''s Health', 'PCOD, fibroids, irregular periods, leucorrhoea, menopause and all gynaecological conditions — treated with sensitivity and deep constitutional care.', false, 9),
  ('mens-health', 'Men''s Health', 'Infertility, prostate issues, low energy, sexual health concerns — handled with complete privacy and professional dignity.', false, 10),
  ('respiratory-diseases', 'Respiratory Diseases', 'Asthma, Bronchitis, Allergic Rhinitis, Sinusitis and chronic respiratory conditions managed without lifelong steroid dependence.', false, 11),
  ('digestive-diseases', 'Digestive Diseases', 'IBS, Crohn''s, Colitis, Acidity, Piles and all chronic digestive disorders — healed from the root, not managed with antacids.', false, 12),
  ('hormonal-diseases', 'Hormonal & Endocrine', 'Thyroid, PCOD, Diabetes management, Adrenal issues and all hormonal imbalances — treated at the root cause, not just the blood report numbers.', false, 13),
  ('mental-health', 'Mental Health', 'Anxiety, Depression, OCD, Insomnia — managed safely with homeopathy. No side effects. No dependency. No dulling of the mind.', false, 14)
on conflict (slug) do nothing;

insert into public.testimonials (patient_name, age, city, condition, quote, treatment_duration, is_featured, display_order, consent_on_file) values
  ('Sunita Verma', 31, 'Delhi', 'Vitiligo', 'I had vitiligo spreading on my face and hands for 6 years. Three dermatologists. Two other homeopaths. Nothing stopped the spread. Within 3 months of starting treatment with Dr Yadav, new patches stopped appearing. By the 7th month I could see pigment dots forming inside the old patches. It''s been 14 months and my face patches are 60% recovered. I still cannot believe it.', '14 months', true, 1, true),
  ('Ajay Sharma', 42, 'Jaipur', 'Kidney Disease', 'My father''s creatinine was 6.8 in February. The nephrologist said dialysis was the next step. We were desperate. My cousin suggested Dr Yadav. We started homeopathic treatment in March. By September — just 6 months later — creatinine came down to 3.1. He is still not on dialysis. We share his blood reports every 6 weeks. We thank God and Dr Yadav every single day.', '6 months', true, 2, true),
  ('Priya Sharma', null, 'Jaipur', 'Autism', 'Our son was diagnosed with severe autism at age 2. He was non-verbal, had 5-6 meltdowns a day, couldn''t sleep more than 3 hours at night. After 8 months of Dr Yadav''s treatment, he began sleeping through the night — that alone changed our family''s life. By 12 months he said his first word. He is now 7 and attending school with support. This clinic gave us our son back.', '12 months', true, 3, true),
  ('Vikram Singh', 38, 'Kota', 'Psoriasis', 'Psoriasis covered my arms, legs and scalp for 11 years. I was on methotrexate and steroids for 4 years with constant side effects. I came to Yadav Homeo Clinic as a last option. After 10 months of constitutional treatment, my skin is 75% clear — without any steroids. The improvement has been steady and real. I only wish I had come here first.', '10 months', true, 4, true)
on conflict do nothing;
