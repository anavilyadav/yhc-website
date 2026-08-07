export default function ConditionsList({ intro, conditions }: { intro: string; conditions: string[] }) {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-xl text-navy md:text-2xl">Conditions We Treat</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-text-mid">{intro}</p>

        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {conditions.map((condition) => {
            const [name, detail] = condition.split(" — ");
            return (
              <li
                key={condition}
                className="flex gap-2.5 rounded-sm border border-border-amber bg-cream-bg p-3.5"
              >
                <span aria-hidden className="mt-0.5 text-green">
                  ✔
                </span>
                <p className="text-sm leading-relaxed text-text-mid">
                  <span className="font-bold text-navy">{name}</span>
                  {detail ? ` — ${detail}` : ""}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
