"use client";

import { useEffect, useRef, useState } from "react";
import {
  CONCERN_OPTIONS,
  DURATION_OPTIONS,
  PRIOR_TREATMENT_OPTIONS,
  IMPACT_OPTIONS,
  CONSULTATION_PREFERENCE_OPTIONS,
  buildAssessmentWhatsAppMessage,
  type AssessmentAnswers,
} from "@/lib/data/assessment";
import { whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/shared/icons";

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6;
const TOTAL_STEPS = 6;

function OptionList({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (value: string) => void;
}) {
  return (
    <div className="mt-6 flex flex-col gap-2.5">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className="rounded-sm border border-navy/15 bg-white px-5 py-3.5 text-left text-[15px] font-medium text-navy transition-colors hover:border-amber hover:bg-cream-bg"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function RootCauseAssessment() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Partial<AssessmentAnswers>>({});
  const [error, setError] = useState<string | null>(null);

  function next(field: keyof AssessmentAnswers, value: string) {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setStep((s) => (s + 1) as Step);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1) as Step);
  }

  function handleContactSubmit(name: string, phone: string) {
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and WhatsApp number.");
      return;
    }
    setError(null);
    setAnswers((prev) => ({ ...prev, name: name.trim(), phone: phone.trim() }));
    setStep(6);
  }

  const progress = Math.min(step, TOTAL_STEPS) / TOTAL_STEPS;

  return (
    <div className="mx-auto max-w-xl rounded-xl border border-border-amber bg-white p-6 shadow-sm sm:p-8">
      {step < TOTAL_STEPS && (
        <div aria-hidden className="mb-6 h-1.5 w-full rounded-full bg-cream-bg">
          <div
            className="h-full rounded-full bg-amber transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}

      {step === 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">Question 1 of 5</p>
          <h3 className="mt-2 font-serif text-lg text-navy sm:text-xl">
            What is your main health concern?
          </h3>
          <OptionList options={CONCERN_OPTIONS} onSelect={(v) => next("concern", v)} />
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">Question 2 of 5</p>
          <h3 className="mt-2 font-serif text-lg text-navy sm:text-xl">
            How long have you had this condition?
          </h3>
          <OptionList options={DURATION_OPTIONS} onSelect={(v) => next("duration", v)} />
          <button type="button" onClick={back} className="mt-4 text-sm text-text-light hover:text-navy">
            ← Back
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">Question 3 of 5</p>
          <h3 className="mt-2 font-serif text-lg text-navy sm:text-xl">
            Have you tried any treatment for this before?
          </h3>
          <OptionList options={PRIOR_TREATMENT_OPTIONS} onSelect={(v) => next("priorTreatment", v)} />
          <button type="button" onClick={back} className="mt-4 text-sm text-text-light hover:text-navy">
            ← Back
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">Question 4 of 5</p>
          <h3 className="mt-2 font-serif text-lg text-navy sm:text-xl">
            How would you describe its impact on your daily life?
          </h3>
          <OptionList options={IMPACT_OPTIONS} onSelect={(v) => next("impact", v)} />
          <button type="button" onClick={back} className="mt-4 text-sm text-text-light hover:text-navy">
            ← Back
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">Question 5 of 5</p>
          <h3 className="mt-2 font-serif text-lg text-navy sm:text-xl">
            Do you prefer online or in-clinic consultation?
          </h3>
          <OptionList options={CONSULTATION_PREFERENCE_OPTIONS} onSelect={(v) => next("preference", v)} />
          <button type="button" onClick={back} className="mt-4 text-sm text-text-light hover:text-navy">
            ← Back
          </button>
        </div>
      )}

      {step === 5 && (
        <ContactStep onSubmit={handleContactSubmit} onBack={back} error={error} />
      )}

      {step === 6 && answers.concern && answers.name && (
        <ResultStep answers={answers as AssessmentAnswers} />
      )}
    </div>
  );
}

function ContactStep({
  onSubmit,
  onBack,
  error,
}: {
  onSubmit: (name: string, phone: string) => void;
  onBack: () => void;
  error: string | null;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-amber-dark">Almost done</p>
      <h3 className="mt-2 font-serif text-lg text-navy sm:text-xl">
        Where should we send your assessment?
      </h3>
      <p className="mt-2 text-[13.5px] text-text-mid">
        This is not a diagnosis — just a summary Dr Anavil or Dr T P Yadav will review before your
        consultation.
      </p>
      <div className="mt-5 space-y-2.5">
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-sm border border-navy/20 px-3 py-2.5 text-sm focus:border-amber focus:outline-none"
        />
        <input
          type="tel"
          placeholder="WhatsApp number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-sm border border-navy/20 px-3 py-2.5 text-sm focus:border-amber focus:outline-none"
        />
      </div>
      {error && <p className="mt-2 text-[13px] text-red-700">{error}</p>}
      <button
        type="button"
        onClick={() => onSubmit(name, phone)}
        className="mt-4 w-full rounded-sm bg-amber px-4 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
      >
        See My Result →
      </button>
      <button type="button" onClick={onBack} className="mt-3 text-sm text-text-light hover:text-navy">
        ← Back
      </button>
    </div>
  );
}

function ResultStep({ answers }: { answers: AssessmentAnswers }) {
  const message = buildAssessmentWhatsAppMessage(answers);
  const submitted = useRef(false);

  // Saved as a safety net the moment the result is shown — a patient who
  // completes the whole quiz but never taps "Send on WhatsApp" (closes the
  // tab, changes their mind) would otherwise leave no trace anywhere.
  useEffect(() => {
    if (submitted.current) return;
    submitted.current = true;
    fetch("/api/assessment/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    }).catch(() => {
      // Best-effort — the WhatsApp send below is still the primary path.
    });
  }, [answers]);

  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-wide text-green">Assessment Complete</p>
      <h3 className="mt-2 font-serif text-lg text-navy sm:text-xl">
        Thank you, {answers.name.split(" ")[0]}.
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-text-mid">
        This is not a diagnosis — during your actual consultation, Dr Anavil or Dr T P Yadav will
        go much deeper, looking at your whole story (timeline, stress, family history) rather than
        just today&apos;s complaint. Sending this summary now saves you repeating it.
      </p>
      <div className="mt-5 rounded-lg bg-cream-bg p-4 text-left text-[13px] leading-relaxed text-text-mid">
        <p><strong className="text-navy">Concern:</strong> {answers.concern}</p>
        <p><strong className="text-navy">Duration:</strong> {answers.duration}</p>
        <p><strong className="text-navy">Previous treatment:</strong> {answers.priorTreatment}</p>
        <p><strong className="text-navy">Impact:</strong> {answers.impact}</p>
        <p><strong className="text-navy">Preference:</strong> {answers.preference}</p>
      </div>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-amber px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-navy transition-opacity hover:opacity-90"
      >
        <WhatsAppIcon className="h-4 w-4" /> Send My Assessment on WhatsApp
      </a>
      <p className="mt-3 text-[12px] text-text-light">
        No obligation to book — this just helps us understand your case before we talk.
      </p>
    </div>
  );
}
