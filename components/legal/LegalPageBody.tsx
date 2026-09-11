import { siteConfig } from "@/lib/site-config";
import type { LegalPageContent } from "@/lib/content/legal-content";
import SectionJumpNav from "@/components/disease-page/SectionJumpNav";
import { slugify } from "@/lib/utils";

/**
 * Resolves the "[clinic email]" placeholder to the real, confirmed
 * address when one exists. When it doesn't, the placeholder — and its
 * leading connector ("and"/"or"/"|") — is dropped entirely rather than
 * shown as filler text ("email to be confirmed"), per the 2026-09-11
 * build spec's content-degradation rule: no placeholder text anywhere,
 * ever. The phone number alone still reads as a complete sentence.
 */
function resolveEmail(text: string): string {
  if (siteConfig.email) {
    return text.replace(/\[clinic email(?: address)?\]/g, siteConfig.email);
  }
  return text
    .replace(/\s*(?:and|or)\s*\[clinic email(?: address)?\]/gi, "")
    .replace(/\s*\|\s*\[clinic email(?: address)?\]/g, "")
    .replace(/\[clinic email(?: address)?\]/g, "")
    .replace(/\s+([.,])/g, "$1");
}

function navLabel(heading: string): string {
  return heading.replace(/^\d+\.\s*/, "");
}

export function LegalPageBody({ content }: { content: LegalPageContent }) {
  const jumpNavItems = content.sections.map((section) => ({
    id: slugify(section.heading),
    label: navLabel(section.heading),
  }));

  return (
    <>
      <article className="bg-cream-bg px-5 pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-2xl text-navy md:text-3xl">{content.title}</h1>
          <p className="mt-2 text-sm text-text-light">Last updated: {content.lastUpdated}</p>
        </div>
      </article>

      <SectionJumpNav items={jumpNavItems} />

      <div className="bg-white px-5 py-10 md:py-14">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-navy/10 shadow-sm">
          {content.sections.map((section, i) => (
            <details
              key={section.heading}
              id={slugify(section.heading)}
              open={i === 0}
              className={`group scroll-mt-32 px-6 py-5 ${i % 2 === 0 ? "bg-white" : "bg-cream-bg"} ${
                i > 0 ? "border-t border-navy/10" : ""
              }`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-navy md:text-xl">
                {section.heading}
                <span aria-hidden className="text-xl text-amber-dark transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-3 space-y-3">
                {section.body.map((block, j) =>
                  Array.isArray(block) ? (
                    <ul key={j} className="space-y-2 pl-1">
                      {block.map((item) => (
                        <li key={item.slice(0, 60)} className="flex gap-2.5 text-[15px] leading-relaxed text-text-mid">
                          <span aria-hidden className="mt-1 text-amber-dark">
                            •
                          </span>
                          <span>{resolveEmail(item)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j} className="text-[15px] leading-relaxed text-text-mid">
                      {resolveEmail(block)}
                    </p>
                  )
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
