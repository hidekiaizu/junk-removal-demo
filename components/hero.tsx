import Image from "next/image";
import { company } from "@/content/site";
import { CTAButtons } from "@/components/cta-buttons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,208,0,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,208,0,0.12),transparent_35%)]" />
      <div className="surface-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.96fr] lg:px-8 lg:py-20">
        <div className="flex animate-rise-in flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/78 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Staten Island Junk Removal
          </div>
          <h1 className="mt-6 font-display text-6xl uppercase leading-[0.9] tracking-[0.04em] text-white sm:text-7xl lg:text-8xl">
            Need <span className="text-red-500">junk</span> removed?
          </h1>
          <div className="mt-5 space-y-2">
            <p className="max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">Call Got A Guy.</p>
            <p className="text-xl font-bold tracking-[0.12em] text-brand sm:text-2xl">{company.phoneDisplay}</p>
          </div>
          <div className="mt-8">
            <CTAButtons />
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/72">
            <span className="rounded-full border border-white/12 bg-white/6 px-4 py-3">Free Estimates</span>
            <span className="rounded-full border border-white/12 bg-white/6 px-4 py-3">Residential + Commercial</span>
            <span className="rounded-full border border-white/12 bg-white/6 px-4 py-3">Donation + Recycling First</span>
          </div>
        </div>
        <div className="relative mt-6 animate-rise-in self-start [animation-delay:120ms] sm:mt-8 lg:mt-12 lg:flex lg:justify-end lg:items-start">
          <div className="relative h-fit w-full max-w-[500px] overflow-hidden rounded-[2rem] bg-[#151515] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[1.34/1] min-h-[280px] sm:min-h-[320px]">
              <Image
                src={company.workerPhoto}
                alt="Got A Guy junk removal worker standing beside a branded truck"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black via-black/36 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
