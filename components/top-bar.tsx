import { company } from "@/content/site";

export function TopBar() {
  return (
    <div className="bg-brand text-brand-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-sm font-semibold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>{company.serviceArea}</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href={company.phoneHref} className="transition hover:text-white">
            Call {company.phoneDisplay}
          </a>
          <span className="hidden h-4 w-px bg-brand-ink/30 sm:block" />
          <a href={company.textHref} className="transition hover:text-white">
            Text for a free estimate
          </a>
        </div>
      </div>
    </div>
  );
}
