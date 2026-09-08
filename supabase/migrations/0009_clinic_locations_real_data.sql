-- ─────────────────────────────────────────────────────────────
-- 0002_appointment_contact.sql only seeded name/phone/whatsapp/timings for
-- clinic_locations — address_line and map_embed_url were left null. The
-- real, confirmed values for both branches have existed all along in the
-- FALLBACK_CLINICS constant in lib/data/contact.ts (confirmed directly by
-- Dr Anavil, chat 2026-08-29), but getClinicLocations() only uses that
-- fallback when the table is empty or unreachable — since Supabase is now
-- connected and the table has 2 rows, those rows (with null address/map)
-- were winning over the good fallback data. This syncs the DB to match.
-- ─────────────────────────────────────────────────────────────

alter table clinic_locations add column if not exists directions_url text;

update clinic_locations set
  address_line = 'A-21, Anita Colony, Bajaj Nagar, Near Gandhi Nagar Railway Station Gate No. 1',
  pin_code = '302015',
  landmark = 'Near Gandhi Nagar Railway Station, Gate No. 1',
  map_embed_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.993728813466!2d75.7976175749421!3d26.8720567766714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d3560b52b5%3A0x7b2f32354e44eec6!2sYadav%20Homeo%20Clinic%20(Dr.T.P.%20Yadav)%20(Dr.%20Anavil%20Yadav)%20-%20Best%20homeopathy%20doctor%2C%20Best%20homeopathy%20clinic!5e1!3m2!1sen!2sin!4v1788346103210!5m2!1sen!2sin',
  directions_url = 'https://maps.app.goo.gl/bpQdQ7o4yKUTXWpf6',
  timings_weekday = 'Monday–Saturday: 11:00 AM–8:00 PM (strictly by appointment only)',
  timings_sunday = 'Sunday: Closed (Jagatpura branch open 11 AM–2 PM)',
  updated_at = now()
where slug = 'main';

update clinic_locations set
  address_line = 'A-7, Ashish Vihar, Mahal Road, Jagatpura',
  pin_code = '302017',
  phone = '+91-9057070705',
  whatsapp = '919057070705',
  map_embed_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.1922968068257!2d75.84176887494046!3d26.82939387669687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9341bacfd55%3A0x2f2b01b9e8a44be1!2sYadav%20Homeo%20Clinic%20Jagatpura%20(Dr%20T.P.%20Yadav)%20(Dr%20Anavil%20Yadav)%20-%20Best%20homeopathy%20doctor%2C%20best%20homeopathy%20clinic!5e1!3m2!1sen!2sin!4v1788346039070!5m2!1sen!2sin',
  directions_url = 'https://maps.app.goo.gl/mQoVBJz4FMZmSHZD6',
  timings_weekday = 'Monday–Saturday: Closed',
  timings_sunday = 'Sunday: 11:00 AM–2:00 PM (strictly by appointment only)',
  updated_at = now()
where slug = 'jagatpura';
