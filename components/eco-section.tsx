import Image from "next/image";
import { company, ecoPoints } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function EcoSection() {
  return (
    <section className="section-shell bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-card">
          <Image
            src={company.ecoPhoto}
            alt="Got A Guy truck parked near a storefront for eco-friendly junk removal"
            width={1200}
            height={1000}
            className="h-full min-h-[360px] w-full object-contain object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
            <p className="text-sm leading-7 text-white/78">
              Real local service with a recognizable truck and neighborhood presence you can trust.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Eco-Friendly"
            title="How we reduce landfill waste"
            description="Junk removal should be efficient, but it should also be responsible. We take the extra step to sort reusable and recyclable material whenever we can."
            theme="dark"
          />
          <ul className="mt-8 grid gap-5">
            {ecoPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-[1.75rem] bg-white/8 px-6 py-5 text-base font-semibold leading-7 text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur"
              >
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-brand shadow-[0_0_18px_rgba(255,208,0,0.45)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
