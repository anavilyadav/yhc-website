export function ProcessSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <section className="bg-cream-bg px-5 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-xl text-navy md:text-2xl">
          How Online Consultation Works — 6 Simple Steps
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-sm border border-navy/10 bg-white p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-green font-serif text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mb-2 font-serif text-[15px] text-navy">{step.title}</h3>
              <p className="text-[13px] leading-relaxed text-text-mid">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
