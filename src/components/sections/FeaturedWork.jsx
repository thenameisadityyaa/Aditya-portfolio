import { useNavigate } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";
import NeonButton from "../ui/NeonButton";

const work = [
  {
    title: "OddeSearch",
    desc: "Modern search interface with premium UI + fast performance.",
    tech: ["React", "Tailwind", "UI"],
  },
  {
    title: "SIH — Student Platform",
    desc: "Community + networking platform inspired by LinkedIn concept.",
    tech: ["React", "Routing", "UX"],
  },
  {
    title: "Stock Finance ML App",
    desc: "Stock prediction + analytics dashboard (project-ready layout).",
    tech: ["Python", "ML", "Dashboard"],
  },
];

export default function FeaturedWork() {
  const navigate = useNavigate();

  return (
    <ScrollReveal className="pt-12">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">featured work</h2>
          <p className="mt-2 text-(--muted)">
            Projects designed for recruiters + founders — clean execution.
          </p>
        </div>

        <NeonButton variant="secondary" onClick={() => navigate("/work")}>
          View all projects
        </NeonButton>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {work.map((p) => (
          <div
            key={p.title}
            className="rounded-3xl bg-white/5 neon-border p-6 hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-(--muted) text-sm leading-relaxed">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 neon-border text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
