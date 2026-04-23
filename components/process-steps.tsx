import { processSteps } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSteps() {
  return (
    <section className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          description="Just a quick call or text, a clear estimate, and a pickup time that works."
          align="center"
        />
        <div className="relative mt-10">
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-black/10 md:block" />
          <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="relative rounded-[2rem] border border-black/10 bg-canvas p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl text-black/12">0{index + 1}</span>
                  <div className="rounded-2xl bg-brand p-3 text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-7 font-display text-4xl uppercase tracking-[0.04em] text-black md:text-[2.7rem]">{step.title}</h3>
                <p className="mt-4 text-base leading-8 text-muted">{step.description}</p>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
