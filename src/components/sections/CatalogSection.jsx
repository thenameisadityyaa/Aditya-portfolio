import ScrollReveal from "../ui/ScrollReveal";
import NeonButton from "../ui/NeonButton";
import { useNavigate } from "react-router-dom";
import { Sparkles, Palette, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Premium Frontend UI",
    desc: "Modern UI with Tailwind + responsive layouts + clean components.",
    icon: Palette,
    points: ["Clean UI system", "Responsive design", "Premium look"],
  },
  {
    title: "React Web Apps",
    desc: "Scalable React projects with routing, reusable components & data-driven UI.",
    icon: Code2,
    points: ["React + Vite", "Performance first", "Best architecture"],
  },
  {
    title: "Interactive Animations",
    desc: "Smooth animations and storytelling websites using GSAP.",
    icon: Sparkles,
    points: ["GSAP + ScrollTrigger", "Stagger reveal", "Motion polish"],
  },
];

export default function CatalogSection() {
  const navigate = useNavigate();

  return (
    <section className="py-10 space-y-12">
      <ScrollReveal>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          My Catalog
        </h1>
        <p className="mt-4 text-(--muted) max-w-3xl">
          What I can build for recruiters, founders and teams — premium UI, fast execution and clean engineering.
        </p>
      </ScrollReveal>

      <div className="grid gap-4 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <ScrollReveal key={s.title} className="h-full">
              <div className="h-full rounded-3xl bg-white/5 neon-border p-6 hover:bg-white/10 transition">
                <div className="size-12 rounded-2xl bg-(--accent)/15 neon-border grid place-items-center">
                  <Icon className="text-(--accent)" size={20} />
                </div>

                <h2 className="mt-4 text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-(--muted) text-sm leading-relaxed">
                  {s.desc}
                </p>

                <div className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <div
                      key={p}
                      className="rounded-2xl bg-black/40 neon-border px-4 py-3 text-sm text-white/85"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* CTA */}
      <ScrollReveal>
        <div className="rounded-3xl bg-white/5 neon-border p-7 md:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-(--accent)/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
              Want to hire me for an
              <span className="text-white/60"> internship / project</span>?
            </h2>
            <p className="mt-3 text-(--muted) max-w-2xl">
              I’m available for startup collaborations, hackathon teams, and internship roles.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <NeonButton onClick={() => navigate("/contact")}>
                Book a Service <ArrowRight className="ml-2" size={18} />
              </NeonButton>
              <NeonButton variant="secondary" onClick={() => navigate("/work")}>
                Explore Work
              </NeonButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
