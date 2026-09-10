"use client";

/**
 * Sticky chapter-tabs bar — layout #6/#2 from the video-first redesign
 * plan (2026-09-10): breaks a long page into visibly separate "chapters"
 * the reader can jump between, matching the approved Vitiligo demo's
 * "WHY IT SPREADS / WHAT WE SEE / TIMELINE / ..." tab bar. Each section is
 * now a collapsed-by-default <details>, so a tab click also opens its
 * target before the browser's native hash-scroll runs — otherwise the
 * reader would jump straight to a still-collapsed heading.
 */
export default function SectionJumpNav({ items }: { items: { id: string; label: string }[] }) {
  if (items.length < 2) return null;

  const openTarget = (id: string) => {
    const target = document.getElementById(id);
    if (target instanceof HTMLDetailsElement) target.open = true;
  };

  return (
    <nav
      aria-label="Jump to section"
      className="sticky top-16 z-30 overflow-x-auto border-b border-border-amber bg-navy px-4 py-2.5 print:hidden md:top-[104px]"
    >
      <ul className="mx-auto flex max-w-4xl list-none gap-2 whitespace-nowrap">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => openTarget(item.id)}
              className="inline-block rounded-full border border-amber/30 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-cream/80 transition-colors hover:border-amber hover:bg-amber hover:text-navy"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
