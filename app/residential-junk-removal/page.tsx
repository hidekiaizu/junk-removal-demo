import { EstimateForm } from "@/components/estimate-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { residentialHighlights } from "@/content/site";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Residential Junk Removal",
  description:
    "Residential junk removal for garages, basements, furniture, yard debris, move-outs, and full-home cleanouts.",
  path: "/residential-junk-removal"
});

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Residential Junk Removal"
        description="Need clutter gone from your home, garage, attic, basement, or yard? Point to the pile and we will handle the heavy lifting."
      />
      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="What We Handle"
              title="Home pickups without the hassle"
              description="We help homeowners, landlords, and tenants clear out bulky items and clutter without dragging everything to the curb."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {residentialHighlights.map((item) => (
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
