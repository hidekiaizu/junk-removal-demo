import Image from "next/image";
import { company, ecoPoints } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function EcoSection() {
  return (
    <section className="section-shell bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-card">
          <Image
            src={company.ecoPhoto}
            alt="Got A Guy truck parked near a storefront for eco-friendly junk removal"
            width={1200}
            height={1000}
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand">Local collaboration</p>
            <p className="mt-2 text-sm leading-7 text-white/78">
              Replace `public/images/got-a-guy-eco-truck.svg` with the provided storefront and truck photo.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Eco-Friendly"
            title="Less landfill, more sorting, more local reuse"
            description="Junk removal should be efficient, but it should also be responsible. We take the extra step to sort reusable and recyclable material whenever we can."
          />
          <ul className="mt-8 grid gap-4">
            {ecoPoints.map((point) => (
              <li key={point} className="rounded-[1.5rem] bg-canvas px-5 py-4 text-base leading-7 text-black">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
