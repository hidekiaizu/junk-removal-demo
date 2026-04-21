import { benefits } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function BenefitsGrid() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why People Call"
          title="Built for clarity, speed, and local trust"
          description="People hire local service companies when they want the job handled without friction. That is exactly how we operate."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-card">
                <div className="inline-flex rounded-2xl bg-brand p-3 text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-3xl uppercase leading-none text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
