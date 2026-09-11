-- The autoimmune-diseases page's patient story stated exact ESR values
-- ("consistently above 90" -> "came down to 34") — missed by the earlier
-- testimonial-anonymization pass (migration 0013), which covered 5 of
-- this file's 14 patientStory blocks. Same fix applied here.

update disease_pages
set patient_story = jsonb_set(
  patient_story,
  '{quote}',
  to_jsonb('I had Rheumatoid Arthritis for 6 years and was on methotrexate and steroids. My inflammatory markers were consistently elevated and I had morning stiffness for 2 to 3 hours every day. After 10 months of constitutional treatment with Dr Yadav alongside my rheumatologist''s care, my inflammatory markers had improved substantially and morning stiffness is now 20 to 30 minutes. My rheumatologist has reduced my methotrexate dose. I have more energy than I have had in years. Individual results vary.'::text)
)
where slug = 'autoimmune-diseases';
