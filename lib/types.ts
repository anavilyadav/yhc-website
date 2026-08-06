export interface Disease {
  slug: string;
  title: string;
  description: string;
  is_specialty: boolean;
  display_order: number;
}

export interface Testimonial {
  id: string;
  patient_name: string;
  age: number | null;
  city: string;
  condition: string;
  quote: string;
  treatment_duration: string | null;
  is_featured: boolean;
  display_order: number;
}
