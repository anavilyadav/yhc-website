import type { DiseasePageSection } from "@/lib/types";

export default function ContentSections({ sections }: { sections: DiseasePageSection[] }) {
  return (
    <section className="bg-cream-bg px-5 py-14">
      <div className="mx-auto max-w-4xl space-y-12">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-serif text-xl text-navy md:text-2xl">{section.heading}</h2>

            {section.paragraphs && (
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 60)} className="text-[15px] leading-relaxed text-text-mid">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {section.list && (
              <ul className="mt-4 space-y-2.5">
                {section.list.map((item) => (
                  <li key={item.slice(0, 60)} className="flex gap-2.5 text-[15px] leading-relaxed text-text-mid">
                    <span aria-hidden className="mt-1 text-amber-dark">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.subsections && (
              <div className="mt-6 space-y-6">
                {section.subsections.map((sub) => (
                  <div
                    key={sub.label}
                    className="rounded-sm border-l-4 border-l-amber bg-white p-5"
                  >
                    <h3 className="text-sm font-bold uppercase tracking-wide text-amber-dark">
                      {sub.label}
                    </h3>
                    {sub.paragraphs && (
                      <div className="mt-2.5 space-y-3">
                        {sub.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 60)}
                            className="text-[15px] leading-relaxed text-text-mid"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                    {sub.list && (
                      <ul className="mt-2.5 space-y-2">
                        {sub.list.map((item) => (
                          <li
                            key={item.slice(0, 60)}
                            className="flex gap-2.5 text-[15px] leading-relaxed text-text-mid"
                          >
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
            )}

            {section.note && (
              <p className="mt-4 text-[13px] italic leading-relaxed text-text-light">
                📌 {section.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
