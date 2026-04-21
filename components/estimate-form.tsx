import { contactChannels } from "@/content/site";
import { CTAButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";

export function EstimateForm() {
  return (
    <section className="section-shell bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Free Estimate"
            title="Tell us what needs to go"
            description="Use the form for a quick request, or skip it and call or text for the fastest response."
          />
          <div className="mt-8 grid gap-4">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-black/10 bg-canvas p-4 transition hover:border-black"
                >
                  <div className="rounded-2xl bg-brand p-3 text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">{channel.title}</p>
                    <p className="mt-1 text-base font-semibold text-black">{channel.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <form className="rounded-[2rem] border border-black/10 bg-black p-6 text-white shadow-card">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <input className="form-input" name="name" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Phone
              <input className="form-input" name="phone" placeholder="(555) 000-0000" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Email
              <input className="form-input" name="email" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Preferred Contact
              <select className="form-input" name="contactPreference" defaultValue="text">
                <option value="text">Text</option>
                <option value="call">Call</option>
                <option value="email">Email</option>
              </select>
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold">
            Job Type
            <select className="form-input" name="jobType" defaultValue="residential">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="cleanout">Cleanout</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="mt-5 grid gap-2 text-sm font-semibold">
            What needs to be removed?
            <textarea
              className="form-input min-h-36 resize-y"
              name="details"
              placeholder="Example: couch, dresser, garage clutter, and a few bags of yard debris"
            />
          </label>
          <p className="mt-4 text-sm leading-7 text-white/68">
            Placeholder form only. Swap this with your real form endpoint, CRM action, or scheduling workflow when ready.
          </p>
          <div className="mt-6">
            <CTAButtons compact />
          </div>
        </form>
      </div>
    </section>
  );
}
