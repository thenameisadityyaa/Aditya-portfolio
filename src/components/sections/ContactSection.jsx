import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import NeonButton from "../ui/NeonButton";

export default function ContactSection() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted ✅ (we’ll connect backend later if needed)");
  };

  return (
    <section className="py-10 space-y-12">
      <ScrollReveal>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="mt-4 text-(--muted) max-w-2xl">
          Recruiter / Founder / Judge — reach out. I respond fast.
        </p>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Form */}
        <ScrollReveal>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-white/5 neon-border p-6 md:p-8 space-y-4"
          >
            <Field label="Your name">
              <input
                required
                className="w-full rounded-2xl bg-black/40 neon-border px-4 py-3 outline-none"
                placeholder="Your name"
              />
            </Field>

            <Field label="Email">
              <input
                required
                type="email"
                className="w-full rounded-2xl bg-black/40 neon-border px-4 py-3 outline-none"
                placeholder="you@email.com"
              />
            </Field>

            <Field label="Message">
              <textarea
                required
                rows={5}
                className="w-full rounded-2xl bg-black/40 neon-border px-4 py-3 outline-none resize-none"
                placeholder="Tell me what you want to build..."
              />
            </Field>

            <div className="pt-2 flex flex-wrap gap-3">
              <NeonButton type="submit">
                Send Message <Mail className="ml-2" size={16} />
              </NeonButton>

              <NeonButton
                variant="secondary"
                type="button"
                onClick={() => window.open("mailto:yourmail@gmail.com")}
              >
                Email Directly
              </NeonButton>
            </div>

            <p className="text-xs text-white/40">
              Note: This is frontend-only for now. We can add EmailJS / backend later.
            </p>
          </form>
        </ScrollReveal>

        {/* Social */}
        <ScrollReveal>
          <div className="rounded-3xl bg-white/5 neon-border p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-(--accent)/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs tracking-widest uppercase text-white/40">
                socials
              </p>

              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                Let’s connect
              </h2>

              <p className="mt-3 text-(--muted) leading-relaxed">
                I’m active on social platforms. For startups & internships, DM is fastest.
              </p>

              <div className="mt-6 space-y-3">
                <Social
                  icon={Linkedin}
                  label="LinkedIn"
                  onClick={() => window.open("#", "_blank")}
                />
                <Social
                  icon={Github}
                  label="GitHub"
                  onClick={() => window.open("#", "_blank")}
                />
                <Social
                  icon={Instagram}
                  label="Instagram"
                  onClick={() => window.open("#", "_blank")}
                />
              </div>

              <div className="mt-8 rounded-2xl bg-black/40 neon-border p-5">
                <p className="text-white/80 font-medium">Availability</p>
                <p className="mt-2 text-(--muted) text-sm">
                  Open to internships, collaborations & startup product roles.
                </p>
                <p className="mt-3 text-(--accent) text-sm">Status: Available ✅</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Social({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between rounded-2xl bg-black/40 neon-border px-5 py-4 hover:bg-white/10 transition"
    >
      <div className="flex items-center gap-3">
        <span className="size-10 rounded-2xl bg-(--accent)/15 neon-border grid place-items-center">
          <Icon className="text-(--accent)" size={18} />
        </span>
        <span className="text-white/85">{label}</span>
      </div>
      <span className="text-white/40 text-sm">Open →</span>
    </button>
  );
}
