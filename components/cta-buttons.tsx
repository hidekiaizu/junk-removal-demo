import { ArrowRight, MessageSquareText, Phone } from "lucide-react";
import { company } from "@/content/site";

type CTAButtonsProps = {
  compact?: boolean;
};

export function CTAButtons({ compact = false }: CTAButtonsProps) {
  return (
    <div className={`flex ${compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"} gap-3`}>
      <a href={company.phoneHref} className="button-secondary">
        <Phone className="h-5 w-5" />
        {company.callLabel}
      </a>
      <a href={company.textHref} className="button-primary">
        <MessageSquareText className="h-5 w-5" />
        {company.textLabel}
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
}
