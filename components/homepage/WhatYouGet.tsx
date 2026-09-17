import { CheckIcon } from "@/components/shared/icons";

const INCLUDED = [
  "45–60 minutes of in-depth case-taking — not a 5-minute prescription",
  "One individually matched constitutional remedy, no shortcuts",
  "Follow-up every 4–6 weeks, prescription adjusted as you respond",
  "An honest, condition-specific timeline — set at your first visit",
  "Same price whether you consult online or in-clinic",
];

export default function WhatYouGet() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-xl text-navy md:text-2xl">
          What You Get, Every Time You Book With Us
        </h2>
        <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {INCLUDED.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-text-mid">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-green" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
