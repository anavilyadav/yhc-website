-- Remove "avoid dialysis" phrasing (a Drugs & Magic Remedies Act Schedule-
-- condition claim the build spec explicitly forbids) from Dr Anavil's bio
-- and the homepage Kidney & Renal Diseases card.

update doctors
set bio_paragraphs = jsonb_set(
  bio_paragraphs,
  '{1}',
  to_jsonb(
    replace(
      bio_paragraphs->>1,
      'He witnessed kidney patients avoid dialysis.',
      'He witnessed kidney patients'' health improve alongside their nephrologist''s care.'
    )
  )
)
where slug = 'dr-anavil-yadav';

update diseases
set description = 'High creatinine, CKD, kidney failure, nephrotic syndrome — renal conditions with constitutional homeopathic support alongside your nephrologist''s care.'
where slug = 'renal-diseases';
