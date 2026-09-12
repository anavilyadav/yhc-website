import { ClipboardIcon, CompassIcon, PillIcon, RefreshIcon } from "@/components/shared/icons";

const steps = [
  {
    icon: ClipboardIcon,
    title: "Case-Taking",
    duration: "45–60 minutes",
    body: "A full history — your symptoms, sleep, emotions, food, family history. Not a 5-minute prescription.",
  },
  {
    icon: CompassIcon,
    title: "Constitutional Analysis",
    duration: "Before your remedy is chosen",
    body: "We study the whole person behind the disease — what makes your case uniquely yours.",
  },
  {
    icon: PillIcon,
    title: "Remedy Selection",
    duration: "One medicine, precisely matched",
    body: "The single most appropriate remedy for you — no combinations, no shortcuts, no guesswork.",
  },
  {
    icon: RefreshIcon,
    title: "Follow-Up & Monitoring",
    duration: "Every 4–6 weeks",
    body: "We track your response with reports and symptoms, adjusting the remedy as you progress.",
  },
];

/**
 * A genuine visual diagram, not another card row — UW report ch.3.1/3.6:
 * a diagram turns "we find the right remedy" from an abstract claim into
 * something a visitor can see and remember in five seconds. Vertical flow
 * on mobile, horizontal flow with connecting lines on desktop — the exact
 * same four steps as HowWeWork (homepage) and OnlineProcessSteps
 * (appointment), just rendered as a connected sequence instead of cards,
 * for the page where the deepest trust-building content already lives.
 */
export function ConsultationDiagram() {
  return (
    <section className="bg-white px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">How It Actually Works</p>
          <h2 className="mt-2 font-serif text-2xl text-navy sm:text-3xl">
            From Your First Visit to Your Remedy
          </h2>
        </div>

        <div className="relative mt-12 flex flex-col sm:flex-row sm:items-start sm:justify-between">
          {/* Connecting line — desktop only, sits behind the icon row */}
          <div
            className="absolute top-8 right-0 left-0 hidden h-[2px] bg-border-amber sm:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-1 flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber bg-cream-bg text-amber-dark">
                <step.icon className="h-7 w-7" />
              </div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-amber-dark">
                Step {i + 1}
              </p>
              <h3 className="mt-1 font-serif text-base text-navy">{step.title}</h3>
              <p className="mt-1 text-xs font-semibold text-text-light">{step.duration}</p>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-text-mid">{step.body}</p>

              {/* Connecting arrow — mobile only, between stacked steps */}
              {i < steps.length - 1 && (
                <div className="my-4 text-xl text-amber sm:hidden" aria-hidden="true">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
