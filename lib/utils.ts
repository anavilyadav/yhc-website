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
