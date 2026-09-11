-- "30+ years of proven results" is an overclaiming phrase in the
-- hormonal-diseases meta description — softened to "clinical experience"
-- to match the renal-diseases fix in migration 0022.

update disease_pages
set meta_description = 'Constitutional homeopathic treatment for thyroid disorders, PCOD, hormonal imbalances and diabetes management in Jaipur. Yadav Homeo Clinic — 30+ years of clinical experience.'
where slug = 'hormonal-diseases';
