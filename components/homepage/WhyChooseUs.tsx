const features = [
  {
    title: "35 Years. Zero Compromise.",
    text: "Dr T P Yadav has practised classical homeopathy since the early 1990s. Three decades of continuous clinical experience means he has seen — and treated — cases that most homeopaths never encounter.",
  },
  {
    title: "We Treat What Others Call Incurable",
    text: "Vitiligo. High creatinine. Autism. Down syndrome. Psoriasis. These are our everyday cases — not our exceptions. Our entire practice is built around the conditions that mainstream medicine says cannot be fixed.",
  },
  {
    title: "Classical, Not Commercial",
    text: "No combination medicines. No shortcut remedies. No patent formulas. We follow the original, authentic principles of Hahnemannian homeopathy — the same system that has produced results for 200 years.",
  },
  {
    title: "Devoted to Special Children",
    text: "Over 5,000 children with autism, Down syndrome, cerebral palsy and developmental conditions have been treated at our clinic. This is our deepest commitment and our proudest achievement.",
  },
  {
    title: "Zero Side Effects — Safe for Everyone",
    text: "Homeopathic medicines in the dilutions used in classical prescribing are free from pharmacological side effects. Some patients experience a brief healing aggravation — a temporary worsening before improvement — which is not a side effect but a sign of remedy response.",
  },
  {
    title: "Online Consultations — Worldwide",
    text: "We treat patients from every corner of India and from over 15 countries. Our online consultation is as thorough and effective as a personal visit — from the comfort of your home.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us bg-cream px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-2xl text-center font-serif text-2xl text-navy md:text-3xl">
          Why Thousands of Patients Choose Us Over Every Other Option
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-sm border border-border-amber bg-white p-6"
            >
              <h3 className="mb-2 font-serif text-base font-bold text-navy">{f.title}</h3>
              <p className="text-[13px] leading-relaxed text-text-mid">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
