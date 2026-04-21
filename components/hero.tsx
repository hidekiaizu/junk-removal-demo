import Image from "next/image";
import { company, overviewStats } from "@/content/site";
import { CTAButtons } from "@/components/cta-buttons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,208,0,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,208,0,0.12),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.96fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-brand">Local Junk Removal</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.9] tracking-[0.04em] text-white sm:text-7xl lg:text-8xl">
            {company.headline}
          </h1>
          <div className="mt-6 space-y-3 text-lg font-medium text-white/84">
            {company.supportingCopy.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
            Free estimates by phone or text. Fast, local pickup for homes, offices, rentals, and job sites.
          </p>
          <div className="mt-8">
            <CTAButtons />
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/12 bg-white/6 p-5 backdrop-blur">
                <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{stat.label}</dt>
                <dd className="mt-2 text-xl font-bold text-brand">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-6 hidden h-28 w-28 rounded-full border border-brand/40 lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <Image
              src={company.workerPhoto}
              alt="Got A Guy junk removal worker standing beside a branded truck"
              width={1200}
              height={1200}
              className="h-full min-h-[420px] w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand">Free estimates</p>
              <p className="mt-2 max-w-md text-sm leading-7 text-white/78">
                Replace `public/images/got-a-guy-worker.svg` with the provided worker photo when ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
