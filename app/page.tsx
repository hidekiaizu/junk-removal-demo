import Link from "next/link";
import { BenefitsGrid } from "@/components/benefits-grid";
import { EcoSection } from "@/components/eco-section";
import { EstimateForm } from "@/components/estimate-form";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { ItemGrid } from "@/components/item-grid";
import { JobSizeCards } from "@/components/job-size-cards";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCards } from "@/components/service-cards";
import { categoryCards } from "@/content/site";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Junk Removal Company",
  description:
    "Got A Guy offers local residential and commercial junk removal with free estimates, strong mobile CTAs, and a simple call-text-book process.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProcessSteps />
      <ServiceCards />
      <JobSizeCards />
      <ItemGrid preview />

      <section className="section-shell bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pickup Types"
            title="From homes to storefronts to job sites"
            description="We keep the offer broad enough to help fast, but focused enough to stay dependable."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {categoryCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-[2rem] border border-black/10 bg-canvas p-6 shadow-card">
                  <div className="inline-flex rounded-2xl bg-brand p-3 text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl uppercase leading-none text-black">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{card.description}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/what-we-take" className="text-sm font-bold uppercase tracking-[0.2em] text-black">
              See everything we take
            </Link>
          </div>
        </div>
      </section>

      <EcoSection />
      <BenefitsGrid />
      <EstimateForm />
      <FinalCta />
    </>
  );
}
