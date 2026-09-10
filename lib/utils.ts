const HONORIFICS = new Set(["dr", "dr.", "mr", "mr.", "mrs", "mrs.", "ms", "ms.", "prof", "prof."]);

/**
 * Initials for an avatar placeholder: first-name initial + last-name
 * initial, ignoring honorifics. E.g. "Dr Anavil Yadav" -> "AY".
 * Middle single-letter initials (e.g. "Dr T P Yadav") are intentionally
 * NOT all included — only first + last, e.g. "TY" — a `length > 1` word
 * filter would otherwise drop legitimate single-letter name parts like
 * "T" and "P" along with the "Dr" honorific it was meant to exclude.
 */
export function getInitials(fullName: string): string {
  const words = fullName.split(" ").filter((word) => word.length > 0 && !HONORIFICS.has(word.toLowerCase()));
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/** URL-safe anchor id from a heading, e.g. "Why It Spreads?" -> "why-it-spreads". */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Short chip label for the section jump-nav, derived from a full section
 * heading when no explicit navLabel is set. Drops anything after a dash/
 * colon (headings are usually "Main Point — supporting clause") and caps
 * at 3 words / ~22 chars so it reads as a nav tab, not a repeated title.
 */
export function autoShortenHeading(heading: string): string {
  const primary = heading.split(/[—:–-]/)[0].trim();
  const words = primary.split(" ").slice(0, 3).join(" ");
  return words.length > 22 ? `${words.slice(0, 22).trim()}…` : words;
}
