import { benefits } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function BenefitsGrid() {
  return (
    <section className="section-shell relative overflow-hidden bg-canvas text-black">
      <div className="soft-grid absolute inset-0 opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why people call" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.12)]"
              >
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
