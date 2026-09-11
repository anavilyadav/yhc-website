-- "myths-about-homeopathy-answered" stated exact before/after creatinine
-- values ("fall from 7 to under 3", "drops from 5.8 to 3.1") as evidence
-- against the placebo argument — same exact-lab-value pattern forbidden
-- for a Schedule condition (CKD) elsewhere in this session's compliance
-- passes (migrations 0012-0014, 0020). Softened to qualitative language.

update blog_posts
set intro = jsonb_set(
  intro,
  '{1}',
  to_jsonb('I am a second-generation homeopath. I grew up in a clinic where I watched my father, Dr T P Yadav, treat patients with conditions that other systems of medicine had given up on. I have seen vitiligo patches repigment. I have seen creatinine levels fall substantially in patients who complete consistent treatment. I have seen non-verbal autistic children begin to speak. I have practised for nearly a decade alongside one of the most experienced homeopaths in Rajasthan.'::text)
)
where slug = 'myths-about-homeopathy-answered';

update blog_posts
set sections = jsonb_set(
  sections,
  '{0,paragraphs,3}',
  to_jsonb('In our own practice: when a 2-year-old autistic child sleeps through the night for the first time after 3 months of constitutional treatment — that child is not experiencing a placebo effect. When a patient''s creatinine falls substantially on repeat testing and nothing else has changed in their management — that is a measurable biochemical change in a blood test. You cannot placebo a creatinine number.'::text)
)
where slug = 'myths-about-homeopathy-answered';
