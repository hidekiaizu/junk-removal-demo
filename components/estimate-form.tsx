import { contactChannels } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function EstimateForm() {
  return (
    <section className="section-shell bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Call Got A Guy"
            title="Tell us what needs to go"
            theme="dark"
          />
          <div className="mt-8 grid gap-4">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 transition hover:bg-white/8"
                >
                  <div className="rounded-2xl bg-brand p-3 text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/58">{channel.title}</p>
                    <p className="mt-1 text-base font-semibold text-white">{channel.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
