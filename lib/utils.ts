const HONORIFICS = new Set(["dr", "dr.", "mr", "mr.", "mrs", "mrs.", "ms", "ms.", "prof", "prof."]);

/** Initials for an avatar placeholder, e.g. "Dr Anavil Yadav" -> "AY". */
export function getInitials(fullName: string): string {
  return fullName
    .split(" ")
    .filter((word) => word.length > 1 && !HONORIFICS.has(word.toLowerCase()))
    .map((word) => word[0])
    .join("");
}
