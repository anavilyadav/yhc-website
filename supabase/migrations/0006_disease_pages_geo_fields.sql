-- Adds columns that lib/types.ts's DiseasePageContent has had for a while
-- (comparisonTable) or gained this session (commonTriggers, commonSymptoms,
-- soundFamiliar), but which schema.sql's original disease_pages table and
-- its generator (scripts/gen-disease-pages-sql.ts) never picked up. All
-- nullable/defaulted since not every page has every field (e.g. cancer has
-- no commonTriggers by design).

alter table public.disease_pages
  add column if not exists comparison_table jsonb,
  add column if not exists common_triggers jsonb,
  add column if not exists common_symptoms jsonb,
  add column if not exists sound_familiar jsonb;
