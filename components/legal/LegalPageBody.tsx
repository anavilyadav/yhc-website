import { siteConfig } from "@/lib/site-config";
import type { LegalPageContent } from "@/lib/content/legal-content";

function resolveEmail(text: string): string {
  return text.replace(/\[clinic email(?: address)?\]/g, siteConfig.email ?? "email to be confirmed");
}

export function LegalPageBody({ content }: { content: LegalPageContent }) {
  return (
    <article className="bg-white px-5 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-2xl text-navy md:text-3xl">{content.title}</h1>
        <p className="mt-2 text-sm text-text-light">Last updated: {content.lastUpdated}</p>

        <div className="mt-10 space-y-10">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif text-lg text-navy md:text-xl">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((block, i) =>
                  Array.isArray(block) ? (
                    <ul key={i} className="space-y-2 pl-1">
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
                    <p key={i} className="text-[15px] leading-relaxed text-text-mid">
                      {resolveEmail(block)}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
