import { EcoSection } from "@/components/eco-section";
import { EstimateForm } from "@/components/estimate-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Eco-Friendly Junk Removal",
  description:
    "Got A Guy works to donate, recycle, and sort material responsibly, including collaboration with 1196 Castle Avenue to reduce landfill waste.",
  path: "/eco-friendly"
});

export default function EcoFriendlyPage() {
  return (
    <>
      <PageHero
        eyebrow="Eco-Friendly"
        title="Eco-Friendly Junk Removal"
        description="We do more than dump everything. We sort, separate, and look for cleaner disposal options whenever possible."
      />
      <EcoSection />
      <EstimateForm />
    </>
  );
}
