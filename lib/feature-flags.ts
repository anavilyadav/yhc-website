/**
 * Global switch for the "Video/Photo Needed Here" placeholder boxes
 * (components/shared/ContentNeededPlaceholder.tsx and its 6 callers).
 * Set to false when Dr Anavil wants the site to not look incomplete to
 * visitors while real photos/videos are still being planned or shot —
 * every empty media slot renders nothing instead (no gap, no box), and
 * real content that has already been uploaded is unaffected either way.
 * Flip back to true once ready to prompt for the remaining content
 * again. This is a code-level flag Claude toggles on request, not a
 * self-serve admin setting.
 */
export const SHOW_MEDIA_PLACEHOLDERS = false;
