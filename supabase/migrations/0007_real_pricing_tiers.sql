-- ─────────────────────────────────────────────────────────────
-- Replaces the original 4 placeholder pricing_plans rows (0002) with the
-- real, currently-displayed 6-tier package pricing (see FALLBACK_PRICING
-- in lib/data/appointment.ts, which this must always match). The old
-- rows are deactivated rather than deleted, preserving history.
-- ─────────────────────────────────────────────────────────────

update pricing_plans set is_active = false
where code in ('in_clinic_first', 'in_clinic_followup', 'online_first', 'online_followup');

insert into pricing_plans (code, title, mode, price_inr, inclusions, is_active, sort_order, badge) values
(
  'new_patient_3m', 'New Patient — 3 Months', 'in_clinic', 7500,
  array['Includes one-time registration', 'First consultation + 2 follow-ups', '3 months of medicine included', 'Same price online or in-clinic'],
  true, 1, 'Most Chosen'
),
(
  'new_patient_2m', 'New Patient — 2 Months', 'in_clinic', 5000,
  array['Includes one-time registration', 'First consultation + 1 follow-up', '2 months of medicine included', 'Same price online or in-clinic'],
  true, 2, null
),
(
  'new_patient_1m', 'New Patient — 1 Month', 'in_clinic', 3500,
  array['₹1,000 one-time registration + ₹2,500 consultation', '45 to 60 minutes with the doctor', 'Full case history and constitutional analysis', '1 month of medicine included', 'Same price online or in-clinic'],
  true, 3, null
),
(
  'followup_3m', 'Follow-Up — 3 Months', 'in_clinic', 7500,
  array['3 follow-up consultations', 'Prescription adjustment as needed', '3 months of medicine included', 'Telephonic support between visits'],
  true, 4, null
),
(
  'followup_2m', 'Follow-Up — 2 Months', 'in_clinic', 5000,
  array['2 follow-up consultations', 'Prescription adjustment as needed', '2 months of medicine included', 'Telephonic support between visits'],
  true, 5, null
),
(
  'followup_1m', 'Follow-Up — 1 Month', 'in_clinic', 2500,
  array['Review of progress since last visit', 'Prescription adjustment as needed', '1 month of medicine included', 'Telephonic support between visits'],
  true, 6, null
)
on conflict (code) do update set
  title = excluded.title,
  mode = excluded.mode,
  price_inr = excluded.price_inr,
  inclusions = excluded.inclusions,
  is_active = excluded.is_active,
  sort_order = excluded.sort_order,
  badge = excluded.badge,
  updated_at = now();
