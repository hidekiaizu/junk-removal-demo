import { EstimateForm } from "@/components/estimate-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { commercialHighlights } from "@/content/site";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Commercial Junk Removal",
  description:
    "Commercial junk removal for offices, retail spaces, warehouses, property turnovers, and contractor debris.",
  path: "/commercial-junk-removal"
});

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Commercial Junk Removal"
        description="Fast pickup for busy businesses, rental properties, storefronts, and job sites that need junk out of the way."
      />
      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Business Service"
              title="Keep the work moving"
              description="When clutter slows down a crew or a property turnover, we help clear it fast with straightforward scheduling and dependable arrival."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {commercialHighlights.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-black/10 bg-white px-5 py-5 text-base font-semibold text-black shadow-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <EstimateForm />
    </>
  );
}
