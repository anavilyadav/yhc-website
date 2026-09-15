/**
 * Online-consultation city hub — confirmed with Dr Anavil (chat,
 * 2026-09-16, expanded twice same day), inspired by a competitor's
 * city-pages hub but built for Yadav Homeo Clinic's own location
 * (Jaipur). Each city gets its own page. Distances/times are
 * approximate (labelled as such in the template) — real road/flight
 * conditions vary, and for smaller towns further from Jaipur we group
 * by realistic travel mode rather than claim false precision.
 *
 * Deliberately NOT claiming specific local neighbourhood names for
 * cities we don't have confirmed local knowledge of (`knownAreas` is
 * left empty for most) — the site's own disease-page comments already
 * warn against the "doorway page" trap of fabricated local detail.
 */
export type CityRegion =
  | "Rajasthan"
  | "Delhi NCR"
  | "North India"
  | "West India"
  | "Central India"
  | "East & Northeast India"
  | "South India";

export interface CityInfo {
  slug: string;
  name: string;
  state: string;
  region: CityRegion;
  distanceKm: number;
  travelOptions: string; // e.g. "5-6 hrs by road, or a 1-hr flight"
  /** Only filled in for cities with confidently-known real localities — left empty otherwise. */
  knownAreas?: string[];
}

export const CITIES: CityInfo[] = [
  // Rajasthan — including towns close to Jaipur
  { slug: "dausa", name: "Dausa", state: "Rajasthan", region: "Rajasthan", distanceKm: 55, travelOptions: "around 1-1.5 hours by road" },
  { slug: "tonk", name: "Tonk", state: "Rajasthan", region: "Rajasthan", distanceKm: 95, travelOptions: "around 2 hours by road" },
  { slug: "sikar", name: "Sikar", state: "Rajasthan", region: "Rajasthan", distanceKm: 110, travelOptions: "around 2 hours by road" },
  { slug: "ajmer", name: "Ajmer", state: "Rajasthan", region: "Rajasthan", distanceKm: 135, travelOptions: "around 2.5-3 hours by road or train" },
  { slug: "nagaur", name: "Nagaur", state: "Rajasthan", region: "Rajasthan", distanceKm: 135, travelOptions: "around 2.5-3 hours by road" },
  { slug: "sawai-madhopur", name: "Sawai Madhopur", state: "Rajasthan", region: "Rajasthan", distanceKm: 130, travelOptions: "around 2.5 hours by road or train" },
  { slug: "alwar", name: "Alwar", state: "Rajasthan", region: "Rajasthan", distanceKm: 150, travelOptions: "around 3 hours by road or train" },
  { slug: "bharatpur", name: "Bharatpur", state: "Rajasthan", region: "Rajasthan", distanceKm: 180, travelOptions: "around 3.5 hours by road or train" },
  { slug: "bhilwara", name: "Bhilwara", state: "Rajasthan", region: "Rajasthan", distanceKm: 250, travelOptions: "around 4-5 hours by road" },
  { slug: "kota", name: "Kota", state: "Rajasthan", region: "Rajasthan", distanceKm: 250, travelOptions: "around 4-5 hours by road or train" },
  { slug: "pali", name: "Pali", state: "Rajasthan", region: "Rajasthan", distanceKm: 300, travelOptions: "around 5-6 hours by road" },
  { slug: "chittorgarh", name: "Chittorgarh", state: "Rajasthan", region: "Rajasthan", distanceKm: 310, travelOptions: "around 5-6 hours by road or train" },
  { slug: "bikaner", name: "Bikaner", state: "Rajasthan", region: "Rajasthan", distanceKm: 330, travelOptions: "around 5-6 hours by road or train" },
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan", region: "Rajasthan", distanceKm: 340, travelOptions: "around 6 hours by road, or a short flight" },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan", region: "Rajasthan", distanceKm: 395, travelOptions: "around 6-7 hours by road, or a short flight" },
  { slug: "sri-ganganagar", name: "Sri Ganganagar", state: "Rajasthan", region: "Rajasthan", distanceKm: 400, travelOptions: "around 7-8 hours by road" },

  // Delhi NCR
  { slug: "delhi", name: "Delhi", state: "Delhi", region: "Delhi NCR", distanceKm: 280, travelOptions: "around 5 hours by road, a short flight, or a comfortable train", knownAreas: ["South Delhi", "Dwarka", "Rohini"] },
  { slug: "gurugram", name: "Gurugram", state: "Haryana", region: "Delhi NCR", distanceKm: 250, travelOptions: "around 4.5 hours by road" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh", region: "Delhi NCR", distanceKm: 280, travelOptions: "around 5 hours by road" },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", region: "Delhi NCR", distanceKm: 285, travelOptions: "around 5 hours by road" },
  { slug: "faridabad", name: "Faridabad", state: "Haryana", region: "Delhi NCR", distanceKm: 270, travelOptions: "around 5 hours by road" },

  // Haryana (beyond NCR)
  { slug: "rewari", name: "Rewari", state: "Haryana", region: "North India", distanceKm: 180, travelOptions: "around 3.5 hours by road" },
  { slug: "bhiwani", name: "Bhiwani", state: "Haryana", region: "North India", distanceKm: 230, travelOptions: "around 4 hours by road" },
  { slug: "hisar", name: "Hisar", state: "Haryana", region: "North India", distanceKm: 220, travelOptions: "around 4 hours by road" },
  { slug: "rohtak", name: "Rohtak", state: "Haryana", region: "North India", distanceKm: 280, travelOptions: "around 5 hours by road" },
  { slug: "sonipat", name: "Sonipat", state: "Haryana", region: "North India", distanceKm: 300, travelOptions: "around 5-6 hours by road" },
  { slug: "panipat", name: "Panipat", state: "Haryana", region: "North India", distanceKm: 320, travelOptions: "around 5.5 hours by road" },
  { slug: "karnal", name: "Karnal", state: "Haryana", region: "North India", distanceKm: 370, travelOptions: "around 6.5-7 hours by road" },
  { slug: "ambala", name: "Ambala", state: "Haryana", region: "North India", distanceKm: 400, travelOptions: "around 7 hours by road or train" },
  { slug: "yamunanagar", name: "Yamunanagar", state: "Haryana", region: "North India", distanceKm: 430, travelOptions: "around 7-8 hours by road" },
  { slug: "panchkula", name: "Panchkula", state: "Haryana", region: "North India", distanceKm: 450, travelOptions: "around 8 hours by road, or a short flight (via Chandigarh)" },
  { slug: "chandigarh", name: "Chandigarh", state: "Punjab/Haryana", region: "North India", distanceKm: 450, travelOptions: "around 8-9 hours by road, or a short flight" },

  // Punjab
  { slug: "patiala", name: "Patiala", state: "Punjab", region: "North India", distanceKm: 480, travelOptions: "around 8 hours by road or train" },
  { slug: "bathinda", name: "Bathinda", state: "Punjab", region: "North India", distanceKm: 370, travelOptions: "around 6-7 hours by road or train" },
  { slug: "mohali", name: "Mohali", state: "Punjab", region: "North India", distanceKm: 450, travelOptions: "around 8 hours by road, or a short flight (via Chandigarh)" },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab", region: "North India", distanceKm: 470, travelOptions: "around 8 hours by road or train" },
  { slug: "moga", name: "Moga", state: "Punjab", region: "North India", distanceKm: 430, travelOptions: "around 7-8 hours by road" },
  { slug: "firozpur", name: "Firozpur", state: "Punjab", region: "North India", distanceKm: 460, travelOptions: "around 8 hours by road" },
  { slug: "jalandhar", name: "Jalandhar", state: "Punjab", region: "North India", distanceKm: 520, travelOptions: "around 9 hours by road or train" },
  { slug: "hoshiarpur", name: "Hoshiarpur", state: "Punjab", region: "North India", distanceKm: 560, travelOptions: "around 9-10 hours by road" },
  { slug: "amritsar", name: "Amritsar", state: "Punjab", region: "North India", distanceKm: 580, travelOptions: "around 10 hours by road, or a short connecting flight" },
  { slug: "pathankot", name: "Pathankot", state: "Punjab", region: "North India", distanceKm: 630, travelOptions: "around 10-11 hours by road" },

  // Uttar Pradesh (beyond NCR)
  { slug: "mathura", name: "Mathura", state: "Uttar Pradesh", region: "North India", distanceKm: 220, travelOptions: "around 4 hours by road" },
  { slug: "agra", name: "Agra", state: "Uttar Pradesh", region: "North India", distanceKm: 240, travelOptions: "around 4-4.5 hours by road (via the Golden Triangle route)" },
  { slug: "aligarh", name: "Aligarh", state: "Uttar Pradesh", region: "North India", distanceKm: 330, travelOptions: "around 5-6 hours by road" },
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh", region: "North India", distanceKm: 350, travelOptions: "around 6 hours by road" },
  { slug: "saharanpur", name: "Saharanpur", state: "Uttar Pradesh", region: "North India", distanceKm: 400, travelOptions: "around 7 hours by road" },
  { slug: "moradabad", name: "Moradabad", state: "Uttar Pradesh", region: "North India", distanceKm: 400, travelOptions: "around 7 hours by road" },
  { slug: "bareilly", name: "Bareilly", state: "Uttar Pradesh", region: "North India", distanceKm: 480, travelOptions: "around 8 hours by road" },
  { slug: "jhansi", name: "Jhansi", state: "Uttar Pradesh", region: "North India", distanceKm: 430, travelOptions: "around 7-8 hours by road or train" },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", region: "North India", distanceKm: 470, travelOptions: "around 8 hours by road or train" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", region: "North India", distanceKm: 590, travelOptions: "around a 1.5-hour flight, or an overnight train" },
  { slug: "prayagraj", name: "Prayagraj", state: "Uttar Pradesh", region: "North India", distanceKm: 700, travelOptions: "around a connecting flight, or a long overnight train" },
  { slug: "gorakhpur", name: "Gorakhpur", state: "Uttar Pradesh", region: "North India", distanceKm: 900, travelOptions: "around a connecting flight, or a long train journey" },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", region: "North India", distanceKm: 830, travelOptions: "around a 2-hour connecting flight, or a long overnight train" },

  // Uttarakhand
  { slug: "roorkee", name: "Roorkee", state: "Uttarakhand", region: "North India", distanceKm: 430, travelOptions: "around 7-8 hours by road" },
  { slug: "haridwar", name: "Haridwar", state: "Uttarakhand", region: "North India", distanceKm: 450, travelOptions: "around 8 hours by road or train" },
  { slug: "rishikesh", name: "Rishikesh", state: "Uttarakhand", region: "North India", distanceKm: 470, travelOptions: "around 8 hours by road" },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand", region: "North India", distanceKm: 480, travelOptions: "around 8-9 hours by road, or a connecting flight via Delhi" },
  { slug: "kashipur", name: "Kashipur", state: "Uttarakhand", region: "North India", distanceKm: 480, travelOptions: "around 8 hours by road" },
  { slug: "rudrapur", name: "Rudrapur", state: "Uttarakhand", region: "North India", distanceKm: 500, travelOptions: "around 8-9 hours by road" },
  { slug: "haldwani", name: "Haldwani", state: "Uttarakhand", region: "North India", distanceKm: 530, travelOptions: "around 9 hours by road" },
  { slug: "ramnagar", name: "Ramnagar", state: "Uttarakhand", region: "North India", distanceKm: 520, travelOptions: "around 9 hours by road" },
  { slug: "nainital", name: "Nainital", state: "Uttarakhand", region: "North India", distanceKm: 550, travelOptions: "around 9-10 hours by road" },
  { slug: "pithoragarh", name: "Pithoragarh", state: "Uttarakhand", region: "North India", distanceKm: 650, travelOptions: "around 11 hours by road" },

  // Himachal Pradesh
  { slug: "una", name: "Una", state: "Himachal Pradesh", region: "North India", distanceKm: 480, travelOptions: "around 8 hours by road" },
  { slug: "hamirpur", name: "Hamirpur", state: "Himachal Pradesh", region: "North India", distanceKm: 540, travelOptions: "around 9 hours by road" },
  { slug: "solan", name: "Solan", state: "Himachal Pradesh", region: "North India", distanceKm: 530, travelOptions: "around 9 hours by road" },
  { slug: "bilaspur-hp", name: "Bilaspur", state: "Himachal Pradesh", region: "North India", distanceKm: 570, travelOptions: "around 9-10 hours by road" },
  { slug: "shimla", name: "Shimla", state: "Himachal Pradesh", region: "North India", distanceKm: 570, travelOptions: "around 10 hours by road, or a connecting flight via Delhi/Chandigarh" },
  { slug: "mandi", name: "Mandi", state: "Himachal Pradesh", region: "North India", distanceKm: 630, travelOptions: "around 10-11 hours by road" },
  { slug: "dharamshala", name: "Dharamshala", state: "Himachal Pradesh", region: "North India", distanceKm: 650, travelOptions: "around 11 hours by road, or a connecting flight" },
  { slug: "kullu", name: "Kullu", state: "Himachal Pradesh", region: "North India", distanceKm: 680, travelOptions: "around 11-12 hours by road" },
  { slug: "manali", name: "Manali", state: "Himachal Pradesh", region: "North India", distanceKm: 700, travelOptions: "around 12 hours by road, or a connecting flight via Chandigarh" },
  { slug: "chamba", name: "Chamba", state: "Himachal Pradesh", region: "North India", distanceKm: 700, travelOptions: "around 12 hours by road" },

  // West India — Gujarat, Maharashtra
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", region: "West India", distanceKm: 660, travelOptions: "around a 1-hour flight, or an overnight train", knownAreas: ["Satellite", "Vastrapur", "Navrangpura"] },
  { slug: "gandhinagar", name: "Gandhinagar", state: "Gujarat", region: "West India", distanceKm: 650, travelOptions: "around a 1-hour flight (via Ahmedabad), or an overnight train" },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat", region: "West India", distanceKm: 590, travelOptions: "around a 1-hour flight, or an overnight train" },
  { slug: "anand", name: "Anand", state: "Gujarat", region: "West India", distanceKm: 610, travelOptions: "around a 1-hour flight (via Ahmedabad/Vadodara), or an overnight train" },
  { slug: "nadiad", name: "Nadiad", state: "Gujarat", region: "West India", distanceKm: 600, travelOptions: "around a 1-hour flight (via Ahmedabad), or an overnight train" },
  { slug: "surat", name: "Surat", state: "Gujarat", region: "West India", distanceKm: 800, travelOptions: "around a 1.5-hour flight, or an overnight train" },
  { slug: "bhavnagar", name: "Bhavnagar", state: "Gujarat", region: "West India", distanceKm: 700, travelOptions: "around a 1.5-hour flight, or a long road/train journey" },
  { slug: "jamnagar", name: "Jamnagar", state: "Gujarat", region: "West India", distanceKm: 780, travelOptions: "around a 1.5-hour connecting flight" },
  { slug: "rajkot", name: "Rajkot", state: "Gujarat", region: "West India", distanceKm: 750, travelOptions: "around a 1.5-hour connecting flight" },
  { slug: "junagadh", name: "Junagadh", state: "Gujarat", region: "West India", distanceKm: 800, travelOptions: "around a connecting flight (via Rajkot/Ahmedabad)" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", region: "West India", distanceKm: 1150, travelOptions: "around a 1.5-hour flight, or an overnight train", knownAreas: ["Andheri", "Bandra", "Thane", "Navi Mumbai"] },
  { slug: "pune", name: "Pune", state: "Maharashtra", region: "West India", distanceKm: 1180, travelOptions: "around a 2-hour flight (often via Mumbai)", knownAreas: ["Kothrud", "Viman Nagar", "Hinjewadi"] },
  { slug: "nashik", name: "Nashik", state: "Maharashtra", region: "West India", distanceKm: 950, travelOptions: "around a connecting flight via Mumbai, or a long road/train journey" },
  { slug: "jalgaon", name: "Jalgaon", state: "Maharashtra", region: "West India", distanceKm: 950, travelOptions: "around a connecting flight via Mumbai" },
  { slug: "aurangabad", name: "Aurangabad", state: "Maharashtra", region: "West India", distanceKm: 1100, travelOptions: "around a connecting flight via Mumbai" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", region: "West India", distanceKm: 1000, travelOptions: "around a 2-hour flight" },
  { slug: "amravati", name: "Amravati", state: "Maharashtra", region: "West India", distanceKm: 1050, travelOptions: "around a connecting flight via Nagpur" },
  { slug: "solapur", name: "Solapur", state: "Maharashtra", region: "West India", distanceKm: 1250, travelOptions: "around a connecting flight" },
  { slug: "sangli", name: "Sangli", state: "Maharashtra", region: "West India", distanceKm: 1300, travelOptions: "around a connecting flight via Pune/Mumbai" },
  { slug: "kolhapur", name: "Kolhapur", state: "Maharashtra", region: "West India", distanceKm: 1350, travelOptions: "around a connecting flight via Pune/Mumbai" },

  // Central India — Madhya Pradesh
  { slug: "gwalior", name: "Gwalior", state: "Madhya Pradesh", region: "Central India", distanceKm: 345, travelOptions: "around 6 hours by road or train" },
  { slug: "ratlam", name: "Ratlam", state: "Madhya Pradesh", region: "Central India", distanceKm: 500, travelOptions: "around 8 hours by road or train" },
  { slug: "ujjain", name: "Ujjain", state: "Madhya Pradesh", region: "Central India", distanceKm: 475, travelOptions: "around 8 hours by road or train" },
  { slug: "dewas", name: "Dewas", state: "Madhya Pradesh", region: "Central India", distanceKm: 560, travelOptions: "around 9 hours by road" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", region: "Central India", distanceKm: 585, travelOptions: "around 9-10 hours by road, or a short connecting flight" },
  { slug: "sagar", name: "Sagar", state: "Madhya Pradesh", region: "Central India", distanceKm: 650, travelOptions: "around 10-11 hours by road" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", region: "Central India", distanceKm: 590, travelOptions: "around 9-10 hours by road or an overnight train" },
  { slug: "jabalpur", name: "Jabalpur", state: "Madhya Pradesh", region: "Central India", distanceKm: 750, travelOptions: "around a connecting flight, or a long road/train journey" },
  { slug: "satna", name: "Satna", state: "Madhya Pradesh", region: "Central India", distanceKm: 800, travelOptions: "around a connecting flight, or a long road/train journey" },
  { slug: "rewa", name: "Rewa", state: "Madhya Pradesh", region: "Central India", distanceKm: 850, travelOptions: "around a connecting flight, or a long road/train journey" },

  // East & Northeast India
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", region: "East & Northeast India", distanceKm: 1650, travelOptions: "around a 2.5-hour flight" },
  { slug: "howrah", name: "Howrah", state: "West Bengal", region: "East & Northeast India", distanceKm: 1650, travelOptions: "around a 2.5-hour flight (via Kolkata)" },
  { slug: "durgapur", name: "Durgapur", state: "West Bengal", region: "East & Northeast India", distanceKm: 1550, travelOptions: "around a connecting flight, or a long train journey" },
  { slug: "asansol", name: "Asansol", state: "West Bengal", region: "East & Northeast India", distanceKm: 1500, travelOptions: "around a connecting flight, or a long train journey" },
  { slug: "bardhaman", name: "Bardhaman", state: "West Bengal", region: "East & Northeast India", distanceKm: 1600, travelOptions: "around a connecting flight (via Kolkata)" },
  { slug: "kharagpur", name: "Kharagpur", state: "West Bengal", region: "East & Northeast India", distanceKm: 1700, travelOptions: "around a connecting flight (via Kolkata)" },
  { slug: "siliguri", name: "Siliguri", state: "West Bengal", region: "East & Northeast India", distanceKm: 1750, travelOptions: "around a 3-hour connecting flight (via Bagdogra)" },
  { slug: "malda", name: "Malda", state: "West Bengal", region: "East & Northeast India", distanceKm: 1750, travelOptions: "around a connecting flight, or a long train journey" },
  { slug: "darjeeling", name: "Darjeeling", state: "West Bengal", region: "East & Northeast India", distanceKm: 1800, travelOptions: "around a connecting flight via Bagdogra" },
  { slug: "haldia", name: "Haldia", state: "West Bengal", region: "East & Northeast India", distanceKm: 1700, travelOptions: "around a connecting flight (via Kolkata)" },
  { slug: "patna", name: "Patna", state: "Bihar", region: "East & Northeast India", distanceKm: 1200, travelOptions: "around a 2-hour connecting flight, or a long train journey" },
  { slug: "gaya", name: "Gaya", state: "Bihar", region: "East & Northeast India", distanceKm: 1150, travelOptions: "around a connecting flight, or a long train journey" },
  { slug: "chapra", name: "Chapra", state: "Bihar", region: "East & Northeast India", distanceKm: 1150, travelOptions: "around a connecting flight (via Patna)" },
  { slug: "muzaffarpur", name: "Muzaffarpur", state: "Bihar", region: "East & Northeast India", distanceKm: 1250, travelOptions: "around a connecting flight (via Patna)" },
  { slug: "begusarai", name: "Begusarai", state: "Bihar", region: "East & Northeast India", distanceKm: 1250, travelOptions: "around a connecting flight (via Patna)" },
  { slug: "munger", name: "Munger", state: "Bihar", region: "East & Northeast India", distanceKm: 1300, travelOptions: "around a connecting flight (via Patna)" },
  { slug: "darbhanga", name: "Darbhanga", state: "Bihar", region: "East & Northeast India", distanceKm: 1300, travelOptions: "around a connecting flight" },
  { slug: "bhagalpur", name: "Bhagalpur", state: "Bihar", region: "East & Northeast India", distanceKm: 1350, travelOptions: "around a connecting flight" },
  { slug: "katihar", name: "Katihar", state: "Bihar", region: "East & Northeast India", distanceKm: 1400, travelOptions: "around a connecting flight" },
  { slug: "purnia", name: "Purnia", state: "Bihar", region: "East & Northeast India", distanceKm: 1450, travelOptions: "around a connecting flight" },
  { slug: "guwahati", name: "Guwahati", state: "Assam", region: "East & Northeast India", distanceKm: 2100, travelOptions: "around a 3-hour connecting flight" },
  { slug: "dhubri", name: "Dhubri", state: "Assam", region: "East & Northeast India", distanceKm: 1900, travelOptions: "around a 3-hour connecting flight (via Guwahati)" },
  { slug: "bongaigaon", name: "Bongaigaon", state: "Assam", region: "East & Northeast India", distanceKm: 1950, travelOptions: "around a 3-hour connecting flight (via Guwahati)" },
  { slug: "nagaon", name: "Nagaon", state: "Assam", region: "East & Northeast India", distanceKm: 2150, travelOptions: "around a connecting flight (via Guwahati)" },
  { slug: "tezpur", name: "Tezpur", state: "Assam", region: "East & Northeast India", distanceKm: 2200, travelOptions: "around a connecting flight (via Guwahati)" },
  { slug: "jorhat", name: "Jorhat", state: "Assam", region: "East & Northeast India", distanceKm: 2300, travelOptions: "around a 4-hour connecting flight" },
  { slug: "dibrugarh", name: "Dibrugarh", state: "Assam", region: "East & Northeast India", distanceKm: 2350, travelOptions: "around a 4-hour connecting flight" },
  { slug: "tinsukia", name: "Tinsukia", state: "Assam", region: "East & Northeast India", distanceKm: 2400, travelOptions: "around a 4-hour connecting flight" },
  { slug: "silchar", name: "Silchar", state: "Assam", region: "East & Northeast India", distanceKm: 2200, travelOptions: "around a 3.5-hour connecting flight" },
  { slug: "karimganj", name: "Karimganj", state: "Assam", region: "East & Northeast India", distanceKm: 2300, travelOptions: "around a connecting flight (via Silchar/Guwahati)" },

  // South India
  { slug: "bangalore", name: "Bangalore", state: "Karnataka", region: "South India", distanceKm: 2000, travelOptions: "around a 2.5-hour flight", knownAreas: ["Koramangala", "Whitefield", "Indiranagar", "HSR Layout"] },
  { slug: "mysore", name: "Mysore", state: "Karnataka", region: "South India", distanceKm: 2100, travelOptions: "around a connecting flight via Bangalore" },
  { slug: "tumkur", name: "Tumkur", state: "Karnataka", region: "South India", distanceKm: 1980, travelOptions: "around a connecting flight via Bangalore" },
  { slug: "davangere", name: "Davangere", state: "Karnataka", region: "South India", distanceKm: 1950, travelOptions: "around a connecting flight via Bangalore" },
  { slug: "shimoga", name: "Shimoga", state: "Karnataka", region: "South India", distanceKm: 2000, travelOptions: "around a connecting flight via Bangalore" },
  { slug: "hubli", name: "Hubli", state: "Karnataka", region: "South India", distanceKm: 1850, travelOptions: "around a connecting flight" },
  { slug: "belgaum", name: "Belgaum", state: "Karnataka", region: "South India", distanceKm: 1700, travelOptions: "around a connecting flight" },
  { slug: "gulbarga", name: "Gulbarga", state: "Karnataka", region: "South India", distanceKm: 1600, travelOptions: "around a connecting flight" },
  { slug: "bellary", name: "Bellary", state: "Karnataka", region: "South India", distanceKm: 1800, travelOptions: "around a connecting flight" },
  { slug: "mangalore", name: "Mangalore", state: "Karnataka", region: "South India", distanceKm: 2100, travelOptions: "around a connecting flight via Bangalore" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", region: "South India", distanceKm: 1300, travelOptions: "around a 2-hour flight", knownAreas: ["Banjara Hills", "Gachibowli", "Secunderabad"] },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", region: "South India", distanceKm: 2000, travelOptions: "around a 2.5-hour flight" },
  { slug: "kochi", name: "Kochi", state: "Kerala", region: "South India", distanceKm: 2100, travelOptions: "around a 3-hour connecting flight" },
  { slug: "thrissur", name: "Thrissur", state: "Kerala", region: "South India", distanceKm: 2150, travelOptions: "around a 3-hour connecting flight (via Kochi)" },
  { slug: "palakkad", name: "Palakkad", state: "Kerala", region: "South India", distanceKm: 2100, travelOptions: "around a 3-hour connecting flight" },
  { slug: "kottayam", name: "Kottayam", state: "Kerala", region: "South India", distanceKm: 2200, travelOptions: "around a 3-hour connecting flight (via Kochi)" },
  { slug: "alappuzha", name: "Alappuzha", state: "Kerala", region: "South India", distanceKm: 2200, travelOptions: "around a 3-hour connecting flight (via Kochi)" },
  { slug: "kollam", name: "Kollam", state: "Kerala", region: "South India", distanceKm: 2350, travelOptions: "around a 3-hour connecting flight" },
  { slug: "thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala", region: "South India", distanceKm: 2300, travelOptions: "around a 3-hour connecting flight" },
  { slug: "kannur", name: "Kannur", state: "Kerala", region: "South India", distanceKm: 2300, travelOptions: "around a 3-hour connecting flight" },
  { slug: "kozhikode", name: "Kozhikode", state: "Kerala", region: "South India", distanceKm: 2250, travelOptions: "around a 3-hour connecting flight" },
  { slug: "malappuram", name: "Malappuram", state: "Kerala", region: "South India", distanceKm: 2250, travelOptions: "around a 3-hour connecting flight (via Kozhikode)" },
];

export function getCityBySlug(slug: string): CityInfo | undefined {
  return CITIES.find((c) => c.slug === slug);
}
