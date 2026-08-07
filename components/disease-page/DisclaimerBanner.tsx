export default function DisclaimerBanner({
  text,
  prominent = false,
}: {
  text: string;
  prominent?: boolean;
}) {
  if (prominent) {
    return (
      <div className="border-y border-border-amber bg-amber-tint px-5 py-5">
        <div className="mx-auto flex max-w-4xl items-start gap-3">
          <span aria-hidden className="mt-0.5 text-lg">
            ⚠️
          </span>
          <p className="text-sm font-medium leading-relaxed text-navy">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-5">
      <div className="rounded-sm bg-cream-deep p-4">
        <p className="text-[13px] leading-relaxed text-text-mid">
          <span className="font-bold text-navy">Medical Disclaimer: </span>
          {text}
        </p>
      </div>
    </div>
  );
}
