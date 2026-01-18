import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import NeonButton from "../ui/NeonButton";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  // ✅ IMPORTANT: keys must match EmailJS template variables
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ name must be from_name / from_email / message
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // ✅ EmailJS send
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Check template variables & env keys.");
    } finally {
      setLoading(false);
    }
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
        {/* ✅ FORM */}
        <ScrollReveal>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-white/5 neon-border p-6 md:p-8 space-y-4"
          >
            <Field label="Your name">
              <input
                required
                name="from_name" // ✅ must match template variable
                value={form.from_name}
                onChange={handleChange}
                className="w-full rounded-2xl bg-black/40 neon-border px-4 py-3 outline-none"
                placeholder="Your name"
              />
            </Field>

            <Field label="Email">
              <input
                required
                type="email"
                name="from_email" // ✅ must match template variable
                value={form.from_email}
                onChange={handleChange}
                className="w-full rounded-2xl bg-black/40 neon-border px-4 py-3 outline-none"
                placeholder="you@email.com"
              />
            </Field>

            <Field label="Message">
              <textarea
                required
                rows={5}
                name="message" // ✅ must match template variable
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-2xl bg-black/40 neon-border px-4 py-3 outline-none resize-none"
                placeholder="Tell me what you want to build..."
              />
            </Field>

            <div className="pt-2 flex flex-wrap gap-3">
              <NeonButton type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <Mail className="ml-2" size={16} />
              </NeonButton>

              <NeonButton
                variant="secondary"
                type="button"
                onClick={() => window.open("mailto:work.adityyaa@gmail.com")}
              >
                Email Directly
              </NeonButton>
            </div>

            <p className="text-xs text-white/40">
              This form uses EmailJS (no backend required).
            </p>
          </form>
        </ScrollReveal>

        {/* ✅ SOCIAL */}
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
                For startups & internships, DM is fastest.
              </p>

              <div className="mt-6 space-y-3">
                <Social
                  icon={Linkedin}
                  label="LinkedIn"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/sharma-adityaa",
                      "_blank"
                    )
                  }
                />
                <Social
                  icon={Github}
                  label="GitHub"
                  onClick={() =>
                    window.open("https://github.com/thenameisadityyaa", "_blank")
                  }
                />
                <Social
                  icon={Instagram}
                  label="Instagram"
                  onClick={() =>
                    window.open(
                      "https://instagram.com/thenameisadityyaa",
                      "_blank"
                    )
                  }
                />
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
