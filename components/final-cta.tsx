import { CTAButtons } from "@/components/cta-buttons";

export function FinalCta() {
  return (
    <section className="section-shell bg-brand">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-black/70">Free Estimate</p>
        <h2 className="mt-4 font-display text-5xl uppercase leading-none text-black md:text-6xl">
          Need it gone without the runaround?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/76">
          Call or text now and we will help you price the job, schedule the pickup, and get your space cleared out fast.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
