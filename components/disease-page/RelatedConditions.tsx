import Link from "next/link";

export default function RelatedConditions({
  items,
}: {
  items: { slug: string; label: string }[];
}) {
  return (
    <section className="bg-cream-bg px-5 py-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">
          Related Conditions
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}/`}
              className="rounded-sm border border-border-amber bg-white px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-amber hover:text-amber-dark"
            >
              {item.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
