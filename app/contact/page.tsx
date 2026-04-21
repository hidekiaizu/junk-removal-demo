import { EstimateForm } from "@/components/estimate-form";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Contact / Free Estimate",
  description: "Contact Got A Guy for a free junk removal estimate by phone, text, email, or form request.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact / Free Estimate"
        description="Call if you want the fastest answer. Text if you want to send photos. Use the form if you want us to follow up with options."
      />
      <EstimateForm />
      <FinalCta />
    </>
  );
}
