import { FinalCta } from "@/components/final-cta";
import { ItemGrid } from "@/components/item-grid";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "What We Take",
  description: "See the common household, commercial, outdoor, and renovation items Got A Guy can haul away.",
  path: "/what-we-take"
});

export default function WhatWeTakePage() {
  return (
    <>
      <PageHero
        eyebrow="What We Take"
        title="What We Take"
        description="Furniture, appliances, debris, fixtures, clutter, and more. If you are not sure, send us a photo by text."
      />
      <ItemGrid />
      <FinalCta />
    </>
  );
}
