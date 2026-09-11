-- The "homeopathy-for-high-creatinine-kidney-disease" blog post directly
-- asked and answered "can homeopathy help me avoid dialysis?" with "in
-- some cases, yes" and narrated a patient story with exact creatinine
-- values (5.8 -> 5.4 -> 4.7 -> 3.9) and "dialysis can be deferred" —
-- exactly the "avoid dialysis" phrasing and exact-number claims the
-- 2026-09-11 build spec's legal rules forbid for a Schedule condition
-- (CKD). Softened to match the testimonial-anonymization pass done
-- elsewhere this session (migrations 0012-0014).

update blog_posts
set secondary_keywords = (
  select jsonb_agg(case when kw = 'avoid dialysis homeopathy' then 'kidney function support homeopathy' else kw end)
  from jsonb_array_elements_text(secondary_keywords) as kw
)
where slug = 'homeopathy-for-high-creatinine-kidney-disease';

update blog_posts
set sections = jsonb_set(
  sections,
  '{0,paragraphs}',
  jsonb_build_array(
    '''Can homeopathy bring my creatinine down and support my kidney health?''',
    'Short answer: constitutional treatment has, in our clinical experience, been able to meaningfully support kidney function in some patients — though not all, and never as a substitute for your nephrologist''s ongoing care. The cases where a meaningful response is most likely are specific — which is why honest expectations matter so much.'
  )
)
where slug = 'homeopathy-for-high-creatinine-kidney-disease';

update blog_posts
set sections = jsonb_set(
  jsonb_set(
    sections,
    '{3,paragraphs,0}',
    to_jsonb('A family comes to us with a father whose kidney function has declined significantly. The nephrologist has raised serious concerns about the road ahead. They have tried every herbal remedy suggested by neighbours. They arrive desperate.'::text)
  ),
  '{3,paragraphs,1}',
  to_jsonb('We start constitutional treatment alongside their nephrology care. I ask them to get blood reports every 6 weeks without fail. Over the following months, his kidney function shows steady, meaningful improvement on repeat testing. His nephrologist continues to monitor him closely. The family cannot believe it.'::text)
)
where slug = 'homeopathy-for-high-creatinine-kidney-disease';
