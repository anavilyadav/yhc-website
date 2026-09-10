import type { DiseasePageSection } from "@/lib/types";
import { slugify } from "@/lib/utils";
import VideoEmbed from "@/components/shared/VideoEmbed";
import PhotoEmbed from "@/components/shared/PhotoEmbed";

/** Splits a "Label — description" list item into its two halves for stat/card rendering. */
function splitLabelItem(item: string): { label: string; body: string } | null {
  const match = item.match(/^(.+?)\s+[—–-]\s+(.+)$/);
  if (!match) return null;
  return { label: match[1].trim(), body: match[2].trim() };
}

/**
 * Reads a real percentage already stated in the text (e.g. "40 to 60
 * percent" or "40–60%") for the fill bar — never a number invented for
 * the graphic. Returns the upper bound of a range so the bar shows the
 * best-case figure the text itself claims.
 */
function extractPercent(text: string): number | null {
  const range = text.match(/(\d{1,3})\s*(?:to|-|–)\s*(\d{1,3})\s*(?:percent|%)/i);
  if (range) return Math.min(100, parseInt(range[2], 10));
  const single = text.match(/(\d{1,3})\s*(?:percent|%)/i);
  if (single) return Math.min(100, parseInt(single[1], 10));
  return null;
}

function StatTiles({ items }: { items: string[] }) {
  const parsed = items.map(splitLabelItem);
  if (parsed.some((p) => p === null)) return <PlainBullets items={items} />;

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
      {parsed.map((p, i) => {
        const pct = extractPercent(p!.label) ?? extractPercent(p!.body);
        return (
          <div key={p!.label} className="rounded-lg border border-border-amber bg-white p-4">
            <div className="font-serif text-xl font-bold leading-tight text-navy md:text-2xl">{p!.label}</div>
            {pct !== null && (
              <div aria-hidden className="mt-2.5 h-1.5 w-full rounded-full bg-cream-bg">
                <div className="h-full rounded-full bg-amber" style={{ width: `${pct}%` }} />
              </div>
            )}
            <p className="mt-2 text-[13px] leading-relaxed text-text-mid">{p!.body}</p>
            <span className="sr-only">Item {i + 1}</span>
          </div>
        );
      })}
    </div>
  );
}

function CardGrid({ items }: { items: string[] }) {
  const parsed = items.map(splitLabelItem);
  if (parsed.some((p) => p === null)) return <PlainBullets items={items} />;

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {parsed.map((p) => (
        <div key={p!.label} className="rounded-lg border border-border bg-white p-5">
          <h3 className="font-serif text-base font-bold text-navy">{p!.label}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-text-mid">{p!.body}</p>
        </div>
      ))}
    </div>
  );
}

function PlainBullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item.slice(0, 60)} className="flex gap-2.5 text-[15px] leading-relaxed text-text-mid">
          <span aria-hidden className="mt-1 text-amber-dark">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Vertical dot-and-line timeline — matches the approved Vitiligo demo's
 * "Months 1–2 / 2–4 / ..." treatment. Each dot also gets a small filled
 * progress track showing its real position in the sequence (stage 2 of
 * 5, etc.) — a genuine "where am I in this journey" cue, not a fabricated
 * completion percentage.
 */
function Timeline({ subsections }: { subsections: NonNullable<DiseasePageSection["subsections"]> }) {
  const total = subsections.length;
  return (
    <div className="mt-6 space-y-6 border-l-2 border-border-amber pl-6">
      {subsections.map((sub, i) => (
        <div key={sub.label} className="relative">
          <span aria-hidden className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-amber bg-white" />
          <div className="flex items-center gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wide text-amber-dark">{sub.label}</h3>
            {total > 1 && (
              <span aria-hidden className="flex h-1 flex-1 max-w-24 gap-0.5">
                {Array.from({ length: total }, (_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-full flex-1 rounded-full ${dotIndex <= i ? "bg-amber" : "bg-border-amber"}`}
                  />
                ))}
              </span>
            )}
            <span className="text-[10px] font-semibold text-text-light">
              Stage {i + 1} of {total}
            </span>
          </div>
          {sub.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 60)} className="mt-1.5 text-[15px] leading-relaxed text-text-mid">
              {paragraph}
            </p>
          ))}
          {sub.list && (
            <ul className="mt-2 space-y-1.5">
              {sub.list.map((item) => (
                <li key={item.slice(0, 60)} className="flex gap-2 text-[14px] leading-relaxed text-text-mid">
                  <span aria-hidden className="mt-1 text-amber-dark">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Each section renders as its own collapsible, alternating-tint chunk —
 * layouts #2 ("Scene-by-Scene Scroll") and #6 ("Progressive Accordion")
 * from the video-first redesign plan: the reader sees short, distinct
 * "chapters" instead of one continuous wall of text, and can open only
 * the ones they care about. Native <details>/<summary> keeps every word
 * in the page source (crawlable by Google/AI) even while collapsed —
 * the same fix already applied to FAQAccordion. Only the first section
 * is open by default; SectionJumpNav opens the target section itself
 * when a tab is clicked.
 */
export default function ContentSections({ sections }: { sections: DiseasePageSection[] }) {
  return (
    <>
      {sections.map((section, i) => (
        <details
          key={section.heading}
          id={slugify(section.heading)}
          open={i === 0}
          className={
            (i % 2 === 0 ? "scroll-mt-32 bg-cream-bg" : "scroll-mt-32 bg-white") + " group px-5 py-8 md:py-10"
          }
        >
          <summary className="mx-auto flex max-w-4xl cursor-pointer list-none items-center justify-between gap-4 marker:content-none">
            <h2 className="font-serif text-xl text-navy md:text-2xl">{section.heading}</h2>
            <span
              aria-hidden
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber text-lg text-amber-dark transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>

          <div className="mx-auto max-w-4xl pt-4">
            {section.paragraphs && (
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 60)} className="text-[15px] leading-relaxed text-text-mid">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {section.media &&
              (section.media.type === "video" ? (
                <VideoEmbed youtubeId={section.media.youtubeId} title={section.media.caption} />
              ) : (
                <PhotoEmbed photoUrl={section.media.photoUrl} caption={section.media.caption} />
              ))}

            {section.list &&
              (section.listStyle === "stats" ? (
                <StatTiles items={section.list} />
              ) : section.listStyle === "cards" ? (
                <CardGrid items={section.list} />
              ) : (
                <PlainBullets items={section.list} />
              ))}

            {section.subsections && <Timeline subsections={section.subsections} />}

            {section.note && (
              <p className="mt-4 text-[13px] italic leading-relaxed text-text-light">📌 {section.note}</p>
            )}
          </div>
        </details>
      ))}
    </>
  );
}
