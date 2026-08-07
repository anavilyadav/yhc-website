const steps = [
  {
    label: "Book",
    title: "Book a Consultation",
    text: "Choose in-clinic (Jaipur) or online from anywhere in the world. Call, WhatsApp or fill our booking form — our team responds within a few hours and confirms your appointment.",
  },
  {
    label: "Consult",
    title: "Deep Case Analysis — 45 to 60 Minutes",
    text: "Dr Yadav spends 45 to 60 minutes understanding your full medical history, symptoms, lifestyle and emotional patterns. This is not a 5-minute prescription. The time we invest here determines the accuracy of everything that follows.",
  },
  {
    label: "Prescribe",
    title: "Your Individual Constitutional Remedy",
    text: "Based on your unique case, the single most precisely matched homeopathic medicine is selected. One remedy. One patient. No shortcuts, no guesswork, no combination medicines.",
  },
  {
    label: "Monitor",
    title: "Follow-Up and Progress Tracking",
    text: "We track your response closely. Follow-ups happen every 4 to 6 weeks. Medicines are adjusted as you respond. Lab reports are reviewed at each visit. You are never left without guidance.",
  },
  {
    label: "Recover",
    title: "Complete Recovery and Long-Term Prevention",
    text: "Our goal is not just to manage your disease but to correct the underlying susceptibility — so the condition does not return once treatment ends.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-navy px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl text-cream md:text-3xl">
            Your Journey to Healing — Simple, Transparent, Effective
          </h2>
          <p className="mt-3 text-[15px] text-cream/60">
            From your first call to your last follow-up — here is exactly how we work.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.label} className="rounded-sm border border-amber/20 bg-white/5 p-5">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-amber font-serif text-sm font-bold text-navy">
                {i + 1}
              </div>
              <div className="mb-1 text-[11px] font-bold uppercase tracking-widest text-amber-light">
                {step.label}
              </div>
              <h3 className="mb-2 font-serif text-[15px] text-cream">{step.title}</h3>
              <p className="text-[14px] leading-relaxed text-cream/60">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
