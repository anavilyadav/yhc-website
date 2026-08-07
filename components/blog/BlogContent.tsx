import type { BlogPostSection } from "@/lib/types";

export function BlogContent({ intro, sections }: { intro: string[]; sections: BlogPostSection[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {intro.map((paragraph) => (
        <p key={paragraph.slice(0, 60)} className="text-base leading-relaxed text-text-mid">
          {paragraph}
        </p>
      ))}

      <div className="space-y-10 pt-6">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-serif text-xl text-navy md:text-2xl">{section.heading}</h2>

            {section.paragraphs && (
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 60)} className="text-base leading-relaxed text-text-mid">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {section.list && (
              <ul className="mt-4 space-y-3">
                {section.list.map((item) => (
                  <li key={item.slice(0, 60)} className="flex gap-2.5 text-base leading-relaxed text-text-mid">
                    <span aria-hidden className="mt-1.5 text-amber-dark">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.note && (
              <p className="mt-4 rounded-sm border-l-4 border-l-amber bg-cream-bg p-4 text-[14px] leading-relaxed text-text-mid">
                {section.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
