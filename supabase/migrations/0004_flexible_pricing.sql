-- ─────────────────────────────────────────────────────────────
-- Makes pricing_plans fully self-service for Dr Anavil: any number of
-- plans/packages (not just the original 4 fixed codes), a way to show a
-- seasonal discount ("was ₹X, now ₹Y" + a badge), and a way to hide a
-- plan without deleting it. Needed so Razorpay checkout amounts always
-- come from a live, editable price rather than a number baked into code.
-- ─────────────────────────────────────────────────────────────

-- The original migration constrained `code` to exactly 4 fixed values —
-- drop that so new packages/offers can be added as plain new rows.
alter table pricing_plans drop constraint if exists pricing_plans_code_check;

alter table pricing_plans add column if not exists original_price_inr integer;
alter table pricing_plans add column if not exists badge text;
alter table pricing_plans add column if not exists is_active boolean not null default true;
alter table pricing_plans add column if not exists sort_order integer not null default 0;

-- Backfill sort_order on the 4 existing seed rows so display order stays
-- identical to before this migration (in-clinic first/follow-up, then
-- online first/follow-up) rather than falling back to insertion order.
update pricing_plans set sort_order = 1 where code = 'in_clinic_first';
update pricing_plans set sort_order = 2 where code = 'in_clinic_followup';
update pricing_plans set sort_order = 3 where code = 'online_first';
update pricing_plans set sort_order = 4 where code = 'online_followup';

comment on column pricing_plans.original_price_inr is
  'Set alongside a lower price_inr to show a "was ₹X" strikethrough for a discount or seasonal offer. Leave null for normal pricing.';
comment on column pricing_plans.badge is
  'Small label shown on the pricing card, e.g. "Most Chosen" or "Festive Offer — 20% Off". Leave null to show no badge.';
comment on column pricing_plans.is_active is
  'Set to false to hide a plan from the Appointment page without deleting its row (e.g. pausing a seasonal offer).';
comment on column pricing_plans.sort_order is
  'Controls display order on the Appointment page, lowest first. Give a new plan any number to place it where you want.';
