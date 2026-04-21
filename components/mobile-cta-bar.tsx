import { company } from "@/content/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-3 shadow-[0_-12px_30px_rgba(0,0,0,0.12)] md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={company.phoneHref} className="button-secondary text-center">
          Call Now
        </a>
        <a href={company.textHref} className="button-primary text-center">
          Text Estimate
        </a>
      </div>
    </div>
  );
}
