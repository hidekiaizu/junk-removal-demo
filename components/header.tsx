"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { company, navigation } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <div>
            <p className="font-display text-3xl uppercase tracking-[0.08em] text-black">{company.name}</p>
            <p className="text-sm font-medium text-muted">You point. We haul.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-black transition hover:text-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-2xl border border-black/10 p-3 text-black lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div id="mobile-nav" className={cn("border-t border-black/10 bg-white lg:hidden", !open && "hidden")}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-black/8 py-3 text-base font-semibold text-black last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 grid gap-3">
            <a href={company.phoneHref} className="button-secondary text-center">
              {company.callLabel}
            </a>
            <a href={company.textHref} className="button-primary text-center">
              {company.textLabel}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
