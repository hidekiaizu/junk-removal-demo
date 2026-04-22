import { company } from "@/content/site";
import { CTAButtons } from "@/components/cta-buttons";

export function FinalCta() {
  return (
    <section className="section-shell bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,#111_0%,#171717_45%,#0d0d0d_100%)] px-6 py-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] sm:px-8 lg:px-12 lg:py-14">
          <div className="surface-grid absolute inset-0 opacity-20" />
          <div className="absolute -right-14 top-6 h-40 w-40 rounded-full bg-brand/18 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand">Free Estimate</p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.92] text-white md:text-6xl">
                <span className="block">Need Junk Removed?</span>
                <span className="block text-brand">Call Got A Guy!</span>
                <span className="block">{company.phoneDisplay}</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Clear pricing, fast scheduling, and local crews who show up ready to load. Call or text and we will
                help you get the job moving today.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/56">Best For</p>
              <div className="mt-4 grid gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">Furniture + Appliance Pickup</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">Apartment + House Cleanouts</div>
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">Storefront + Office Junk Removal</div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 flex justify-start">
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
