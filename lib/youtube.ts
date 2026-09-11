/**
 * Extracts the video ID from a pasted YouTube URL, or returns the input
 * unchanged if it's already a bare ID — lets the admin panel accept
 * whatever a non-technical user pastes (a full URL is the natural thing
 * to copy from the browser or the YouTube app's "Share" button).
 */
export function extractYoutubeId(input: string): string {
  const trimmed = input.trim();

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) return match[1];
  }

  return trimmed;
}
