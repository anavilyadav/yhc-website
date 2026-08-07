import Link from "next/link";

export function AboutCta() {
  return (
    <section className="bg-amber-tint px-6 py-16 text-center sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-2xl text-navy sm:text-3xl">
          Meet Us in Person or Online
        </h2>
        <p className="mt-4 text-base leading-relaxed text-text-mid">
          Two generations, one commitment to classical homeopathy — in Jaipur or wherever
          you are.
        </p>
        <Link
          href="/appointment"
          className="mt-7 inline-block rounded-lg bg-navy px-8 py-4 text-sm font-bold text-cream transition hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          Book Appointment →
        </Link>
      </div>
    </section>
  );
}
