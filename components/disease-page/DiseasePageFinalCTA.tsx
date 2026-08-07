import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";

export default function DiseasePageFinalCTA({
  finalCta,
  conditionName,
}: {
  finalCta: string;
  conditionName: string;
}) {
  return (
    <section className="bg-navy px-5 py-14 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-xl leading-snug text-cream md:text-3xl">{finalCta}</h2>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={whatsappLink(`Hello, I would like to book a consultation for ${conditionName}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-sm bg-amber px-7 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90 sm:w-auto"
          >
            💬 WhatsApp Us Now
          </a>
          <a
            href={telLink()}
            className="w-full rounded-sm border-2 border-amber-light px-7 py-3 text-sm font-bold uppercase tracking-wide text-amber-light transition-colors hover:bg-amber-light hover:text-navy sm:w-auto"
          >
            📞 Call {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
