-- Dr Anavil Yadav holds BHMS only (no Commission-recognized PG
-- qualification), so per the build spec's legal rules, "Specialist"/
-- "Speciality" language is reserved for Dr T P Yadav (BHMS, MD). Reword
-- Dr Anavil's profile copy to "Area of Clinical Focus" / "Extensive
-- experience in" instead.

update doctors
set
  header_subline = 'Area of Clinical Focus: Chronic, Genetic & Autoimmune Diseases | Online Consultations — Pan India & International',
  short_bio = 'Dr Anavil Yadav — Classical Homeopath, Yadav Homeo Clinic Jaipur. Son of Dr T P Yadav. BHMS, 9+ years practice. Extensive experience in chronic, genetic & autoimmune diseases. Online consultations — Pan India.'
where slug = 'dr-anavil-yadav';
