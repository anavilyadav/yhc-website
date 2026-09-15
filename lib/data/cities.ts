/**
 * Online-consultation city hub — confirmed with Dr Anavil (chat,
 * 2026-09-16), inspired by a competitor's city-pages hub but built for
 * Yadav Homeo Clinic's own location (Jaipur, not Udaipur). Each city
 * gets its own page with genuinely different travel logistics (not
 * copy-pasted) — deliberately NOT claiming specific local neighbourhood
 * names for cities we don't have confirmed local knowledge of, to avoid
 * the "doorway page" trap the site's own disease-page comments already
 * warn against. Distances/times are approximate (labelled as such) —
 * real road/flight conditions vary.
 */
export interface CityInfo {
  slug: string;
  name: string;
  state: string;
  region: "Rajasthan" | "Metro" | "Other";
  distanceKm: number;
  travelOptions: string; // e.g. "5-6 hrs by road, or a 1-hr flight"
  /** Only filled in for cities with confidently-known real localities — left empty otherwise. */
  knownAreas?: string[];
}

export const CITIES: CityInfo[] = [
  // Rajasthan
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan", region: "Rajasthan", distanceKm: 340, travelOptions: "around 6 hours by road, or a short flight" },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan", region: "Rajasthan", distanceKm: 395, travelOptions: "around 6-7 hours by road, or a short flight" },
  { slug: "kota", name: "Kota", state: "Rajasthan", region: "Rajasthan", distanceKm: 250, travelOptions: "around 4-5 hours by road or train" },
  { slug: "ajmer", name: "Ajmer", state: "Rajasthan", region: "Rajasthan", distanceKm: 135, travelOptions: "around 2.5-3 hours by road or train" },
  { slug: "bikaner", name: "Bikaner", state: "Rajasthan", region: "Rajasthan", distanceKm: 330, travelOptions: "around 5-6 hours by road or train" },
  { slug: "alwar", name: "Alwar", state: "Rajasthan", region: "Rajasthan", distanceKm: 150, travelOptions: "around 3 hours by road or train" },
  { slug: "bhilwara", name: "Bhilwara", state: "Rajasthan", region: "Rajasthan", distanceKm: 250, travelOptions: "around 4-5 hours by road" },
  { slug: "sikar", name: "Sikar", state: "Rajasthan", region: "Rajasthan", distanceKm: 110, travelOptions: "around 2 hours by road" },
  { slug: "sri-ganganagar", name: "Sri Ganganagar", state: "Rajasthan", region: "Rajasthan", distanceKm: 400, travelOptions: "around 7-8 hours by road" },
  { slug: "bharatpur", name: "Bharatpur", state: "Rajasthan", region: "Rajasthan", distanceKm: 180, travelOptions: "around 3.5 hours by road or train" },
  { slug: "pali", name: "Pali", state: "Rajasthan", region: "Rajasthan", distanceKm: 300, travelOptions: "around 5-6 hours by road" },
  { slug: "chittorgarh", name: "Chittorgarh", state: "Rajasthan", region: "Rajasthan", distanceKm: 310, travelOptions: "around 5-6 hours by road or train" },

  // Metro / major cities
  { slug: "delhi", name: "Delhi", state: "Delhi", region: "Metro", distanceKm: 280, travelOptions: "around 5 hours by road, a short flight, or a comfortable train", knownAreas: ["South Delhi", "Dwarka", "Rohini", "Gurugram", "Noida"] },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", region: "Metro", distanceKm: 1150, travelOptions: "around a 1.5-hour flight, or an overnight train", knownAreas: ["Andheri", "Bandra", "Thane", "Navi Mumbai"] },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka", region: "Metro", distanceKm: 2000, travelOptions: "around a 2.5-hour flight", knownAreas: ["Koramangala", "Whitefield", "Indiranagar", "HSR Layout"] },
  { slug: "pune", name: "Pune", state: "Maharashtra", region: "Metro", distanceKm: 1180, travelOptions: "around a 2-hour flight (often via Mumbai)", knownAreas: ["Kothrud", "Viman Nagar", "Hinjewadi"] },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", region: "Metro", distanceKm: 1300, travelOptions: "around a 2-hour flight", knownAreas: ["Banjara Hills", "Gachibowli", "Secunderabad"] },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", region: "Metro", distanceKm: 2000, travelOptions: "around a 2.5-hour flight" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", region: "Metro", distanceKm: 1650, travelOptions: "around a 2.5-hour flight" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", region: "Metro", distanceKm: 660, travelOptions: "around a 1-hour flight, or an overnight train", knownAreas: ["Satellite", "Vastrapur", "Navrangpura"] },

  // Other major cities
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", region: "Other", distanceKm: 585, travelOptions: "around 9-10 hours by road, or a short connecting flight" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", region: "Other", distanceKm: 590, travelOptions: "around 9-10 hours by road or an overnight train" },
  { slug: "surat", name: "Surat", state: "Gujarat", region: "Other", distanceKm: 800, travelOptions: "around a 1.5-hour flight, or an overnight train" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", region: "Other", distanceKm: 590, travelOptions: "around a 1.5-hour flight, or an overnight train" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", region: "Other", distanceKm: 1000, travelOptions: "around a 2-hour flight" },
  { slug: "chandigarh", name: "Chandigarh", state: "Punjab/Haryana", region: "Other", distanceKm: 450, travelOptions: "around 8-9 hours by road, or a short flight" },
];

export function getCityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find((c) => c.slug === slug);
}
