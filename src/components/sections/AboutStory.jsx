import ScrollReveal from "../ui/ScrollReveal";
import { timeline, skills } from "../../data/about";

export default function AboutStory() {
  return (
    <section className="py-10 space-y-14">
      {/* Header */}
      <ScrollReveal>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          About
        </h1>
        <p className="mt-4 max-w-3xl text-(--muted) leading-relaxed">
          I’m <span className="text-white/90 font-medium">Aditya Sharma</span> — a
          fresher Creative Web Developer focused on premium UI, smooth animations,
          and scalable front-end architecture.
        </p>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal className="grid gap-4 sm:grid-cols-3">
        <StatCard title="Hackathon Win" value="1+" />
        <StatCard title="Leadership Roles" value="2+" />
        <StatCard title="Projects Built" value="5+" />
      </ScrollReveal>

      {/* Timeline */}
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-semibold">my journey</h2>
        <div className="mt-6 space-y-4">
          {timeline.map((t) => (
            <div
              key={t.title}
              className="rounded-3xl bg-white/5 neon-border p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="text-(--accent) text-xs tracking-widest uppercase">
                  {t.year}
                </span>
                <span className="text-white/50 text-xs">Story milestone</span>
              </div>
              <h3 className="mt-2 text-lg md:text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-(--muted) leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-semibold">skills</h2>
        <p className="mt-2 text-(--muted)">
          My current toolset for building modern web experiences.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full text-sm bg-white/5 neon-border text-white/85 hover:bg-white/10 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div className="rounded-3xl bg-white/5 neon-border p-7 md:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-(--accent)/10 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-semibold">
              I build UI that feels
              <span className="text-white/60"> premium</span>.
            </h3>
            <p className="mt-3 max-w-2xl text-(--muted)">
              I’m open for internships, collaborations, and startup product work.
              If you want clean UI + real execution — let’s connect.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-3xl bg-white/5 neon-border p-6 hover:bg-white/10 transition">
      <p className="text-white/50 text-sm">{title}</p>
      <p className="mt-2 text-3xl font-semibold text-(--accent)">{value}</p>
    </div>
  );
}
