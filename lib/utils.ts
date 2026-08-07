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
