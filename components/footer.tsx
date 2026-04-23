import Link from "next/link";
import { company, footerLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black pb-28 pt-14 text-white md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="font-display text-4xl uppercase tracking-[0.08em] text-brand">{company.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
            Local junk removal made simple. Free estimates, fast scheduling, and straightforward service.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <a href={company.phoneHref} className="text-brand transition hover:text-white">
              {company.phoneDisplay}
            </a>
            <a href={company.textHref} className="text-brand transition hover:text-white">
              Text for estimate
            </a>
          </div>
        </div>
        <div className="grid gap-3 text-sm">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-semibold text-white/84 transition hover:text-brand">
              {link.label}
            </Link>
          ))}
          <p className="pt-4 text-white/50">{company.placeholderAddress}</p>
        </div>
      </div>
    </footer>
  );
}
