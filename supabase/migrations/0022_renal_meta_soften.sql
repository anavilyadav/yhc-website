-- Last remaining "avoid dialysis" phrasing was an SEO secondary keyword
-- on the renal-diseases meta tags, plus an overclaiming "Proven results"
-- in the meta description — both fixed to match the rest of this
-- session's compliance pass.

update disease_pages
set
  meta_description = 'Homeopathic support for CKD, high creatinine, nephrotic syndrome and renal diseases in Jaipur, alongside your nephrologist''s care. 30+ years experience. Book now.',
  secondary_keywords = (
    select jsonb_agg(case when kw = 'avoid dialysis homeopathy' then 'kidney function support homeopathy' else kw end)
    from jsonb_array_elements_text(secondary_keywords) as kw
  )
where slug = 'renal-diseases';
