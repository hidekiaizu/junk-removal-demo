import { CTAButtons } from "@/components/cta-buttons";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="bg-black py-16 text-white lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.92] tracking-[0.04em] text-white md:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{description}</p>
        <div className="mt-8">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
