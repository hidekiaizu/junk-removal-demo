import { BenefitsGrid } from "@/components/benefits-grid";
import { EcoSection } from "@/components/eco-section";
import { EstimateForm } from "@/components/estimate-form";
import { Hero } from "@/components/hero";
import { ItemGrid } from "@/components/item-grid";
import { ProcessSteps } from "@/components/process-steps";
import { ServiceCards } from "@/components/service-cards";
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
      <ItemGrid preview />

      <EcoSection />
      <BenefitsGrid />
      <EstimateForm />
    </>
  );
}
