-- Domestic pricing redesign ("Plan B": 1/3/6/9/12 month durations),
-- confirmed directly by Dr Anavil (chat, 2026-09-15). Replaces the old
-- 1/2/3 month tiers with 1/3/6/9/12, each showing an increasing discount
-- vs. paying month-to-month (0% -> 13%), stored via original_price_inr
-- so the existing "was X, now Y" UI can also surface a Save % (see
-- components/appointment/PricingSection.tsx).
--
-- Reference (pay-separately) baseline used to compute these discounts:
-- New Patient = Rs 1,000 one-time registration + Rs 2,500/month.
-- Follow-Up   = Rs 2,500/month flat (registration already done).

-- 2-month tiers are retired under Plan B.
update pricing_plans set is_active = false where code in ('new_patient_2m', 'followup_2m');

-- 3-month tiers: price + inclusions updated for Plan B, original_price_inr
-- added so the "pay separately" reference (and Save %) can render.
update pricing_plans
set price_inr = 8000,
    original_price_inr = 8500,
    badge = null,
    inclusions = array['Includes one-time registration', 'First consultation + 2 follow-ups', '3 months of medicine included', 'Same price online or in-clinic'],
    sort_order = 4
where code = 'new_patient_3m';

update pricing_plans
set price_inr = 7100,
    original_price_inr = 7500,
    inclusions = array['3 follow-up consultations', 'Prescription adjustment as needed', '3 months of medicine included', 'Telephonic support between visits'],
    sort_order = 9
where code = 'followup_3m';

-- 1-month tiers: unchanged in price, but sort_order shifts to make room
-- for the new longer tiers (still last within each group).
update pricing_plans set sort_order = 5 where code = 'new_patient_1m';
update pricing_plans set sort_order = 10 where code = 'followup_1m';

-- New tiers: 6, 9, 12 months, both tracks.
insert into pricing_plans (code, title, mode, price_inr, original_price_inr, badge, inclusions, is_active, sort_order)
values
  (
    'new_patient_6m', 'New Patient — 6 Months', 'in_clinic', 14700, 16000, null,
    array['Includes one-time registration', 'First consultation + 5 follow-ups', '6 months of medicine included', 'Same price online or in-clinic'],
    true, 3
  ),
  (
    'new_patient_9m', 'New Patient — 9 Months', 'in_clinic', 20900, 23500, null,
    array['Includes one-time registration', 'First consultation + 8 follow-ups', '9 months of medicine included', 'Same price online or in-clinic'],
    true, 2
  ),
  (
    'new_patient_12m', 'New Patient — 12 Months', 'in_clinic', 27000, 31000, 'Best Value for Chronic Cases',
    array['Includes one-time registration', 'First consultation + 11 follow-ups', '12 months of medicine included', 'Same price online or in-clinic', 'Advance payment required'],
    true, 1
  ),
  (
    'followup_6m', 'Follow-Up — 6 Months', 'in_clinic', 13800, 15000, null,
    array['6 follow-up consultations', 'Prescription adjustment as needed', '6 months of medicine included', 'Telephonic support between visits'],
    true, 8
  ),
  (
    'followup_9m', 'Follow-Up — 9 Months', 'in_clinic', 20000, 22500, null,
    array['9 follow-up consultations', 'Prescription adjustment as needed', '9 months of medicine included', 'Telephonic support between visits'],
    true, 7
  ),
  (
    'followup_12m', 'Follow-Up — 12 Months', 'in_clinic', 26000, 30000, 'Best Value',
    array['12 follow-up consultations', 'Prescription adjustment as needed', '12 months of medicine included', 'Telephonic support between visits', 'Advance payment required'],
    true, 6
  );
