import { itemGroups } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

type ItemGridProps = {
  preview?: boolean;
};

export function ItemGrid({ preview = false }: ItemGridProps) {
  const items = preview ? itemGroups.slice(0, 8) : itemGroups;

  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Take"
          title={preview ? "Common junk we haul every week" : "A wide range of junk and bulky items"}
          description="Not sure if your items fit? Call or text a photo and we can usually tell you right away."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-black/10 bg-white px-5 py-5 text-base font-semibold text-black shadow-card">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
