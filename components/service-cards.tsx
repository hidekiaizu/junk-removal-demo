import Link from "next/link";
import { serviceCards } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function ServiceCards() {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="soft-grid absolute inset-0 opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Junk removal for homes and businesses"
          description="We keep the offer simple: show us the junk, get a free estimate, and let us haul it out."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="relative rounded-[2rem] border border-black/10 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[2rem] bg-brand/18" />
                <div className="flex items-start justify-between gap-4">
                  <div className="relative rounded-2xl bg-brand p-3 text-black">
                    <Icon className="h-7 w-7" />
                  </div>
                  <Link href={card.href} className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                    Learn More
                  </Link>
                </div>
                <h3 className="mt-6 font-display text-4xl uppercase leading-none text-black">{card.title}</h3>
                <p className="mt-4 text-base leading-8 text-muted">{card.description}</p>
                <ul className="mt-6 grid gap-3 text-sm font-medium text-black">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl border border-black/8 bg-canvas px-4 py-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
