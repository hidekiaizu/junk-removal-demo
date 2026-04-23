import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutPoints } from "@/content/site";
import { buildMetadata } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about Got A Guy, a local junk removal company focused on simple service, free estimates, and dependable haul-away help.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Got A Guy"
        description="Got A Guy is built around a simple idea: make junk removal easy to understand, easy to schedule, and easy to trust."
      />
      <section className="section-shell">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Local First"
              title="Direct, reliable, and built for local jobs"
              description="We keep the process short on friction and long on follow-through. That means clear communication, quick estimates, and a crew that treats your property with respect."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <div key={point} className="rounded-[1.5rem] border border-black/10 bg-white px-5 py-5 text-base font-semibold text-black shadow-card">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
