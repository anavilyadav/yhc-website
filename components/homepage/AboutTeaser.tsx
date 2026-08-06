import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl text-navy md:text-3xl">
          Jaipur&apos;s Most Trusted Homeopathy Clinic — Est. 1991
        </h2>

        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-text-mid">
          <p>
            Yadav Homeo Clinic was founded by Dr T P Yadav — one of Jaipur&apos;s most respected
            homeopathic physicians with over three decades of unbroken clinical practice. What
            began as a small clinic has grown into one of Rajasthan&apos;s most sought-after
            homeopathy centres, with patients travelling from across India and from countries
            including the UAE, United Kingdom, United States, Canada, and Australia.
          </p>
          <p>
            We follow the classical principles of homeopathy — treating the whole person, not
            just the disease. Our approach is rooted in deep, unhurried case-taking, precise
            constitutional analysis, and the selection of the single most appropriate remedy for
            each individual patient.
          </p>
          <p>
            Today the clinic continues its legacy under the combined expertise of Dr T P Yadav
            and our next-generation practitioners — bringing together decades of wisdom and
            modern diagnostic understanding in service of patients who deserve the very best.
          </p>
        </div>

        <Link
          href="/about"
          className="mt-6 inline-block text-sm font-bold text-amber-dark hover:text-navy"
        >
          Read Our Full Story →
        </Link>
      </div>
    </section>
  );
}
