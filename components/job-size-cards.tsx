import { jobSizes } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function JobSizeCards() {
  return (
    <section className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Job Sizes"
          title="Right-sized trucks for the job"
          description="Whether you have one bulky item or a full property cleanout, we can match the pickup to the load."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {jobSizes.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] border border-black/10 bg-black p-6 text-white shadow-card">
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand">Option {index + 1}</p>
                <div className="mt-5 inline-flex rounded-2xl bg-brand p-3 text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-4xl uppercase leading-none text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/76">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
