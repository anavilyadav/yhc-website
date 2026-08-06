import { siteConfig } from "@/lib/site-config";

export default function StatsBar() {
  return (
    <section className="bg-navy px-5 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-serif text-3xl font-bold text-white md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs tracking-wide text-amber-light/90 md:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
