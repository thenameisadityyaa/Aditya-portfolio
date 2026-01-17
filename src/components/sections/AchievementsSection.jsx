import ScrollReveal from "../ui/ScrollReveal";
import { achievements } from "../../data/achievements";

export default function AchievementsSection() {
  return (
    <section className="py-10 space-y-12">
      <ScrollReveal>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Achievements
        </h1>
        <p className="mt-4 text-(--muted) max-w-3xl">
          Proof of execution — hackathon wins, leadership roles and growth journey.
        </p>
      </ScrollReveal>

      <div className="grid gap-4 lg:grid-cols-3">
        {achievements.map((a) => (
          <ScrollReveal key={a.id} className="h-full">
            <div className="h-full rounded-3xl bg-white/5 neon-border overflow-hidden hover:bg-white/10 transition">
              {/* image placeholder */}
              <div className="h-[180px] bg-black/40 neon-border grid place-items-center">
                <p className="text-(--muted) text-sm">Achievement Image</p>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs tracking-widest uppercase text-(--accent)">
                    {a.badge}
                  </span>
                  <span className="text-xs text-white/50">{a.org}</span>
                </div>

                <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-(--muted) text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal>
        <div className="rounded-3xl bg-white/5 neon-border p-7 md:p-10 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-(--accent)/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-semibold">
              More projects are
              <span className="text-white/60"> coming</span>.
            </h2>
            <p className="mt-3 text-(--muted) max-w-2xl">
              I keep building and upgrading my portfolio. If you like premium UI, interactive UX,
              and fast execution — I’m the right candidate.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
