import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { projects } from "../../data/projects";
import ProjectModal from "./ProjectModal";

const filters = ["All", "UI", "Hackathon", "ML", "Other"];

export default function ProjectsSection() {
  const root = useRef(null);
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-reveal",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: "power3.out" }
      );
    }, root);

    return () => ctx.revert();
  }, [active]);

  return (
    <section ref={root} className="py-10">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Work
          </h1>
          <p className="mt-3 text-(--muted) max-w-2xl">
            A collection of my projects — designed for impact, premium UI, and scalable engineering.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="work-reveal mt-7 flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm transition neon-border
                ${isActive ? "bg-(--accent) text-black" : "bg-white/5 text-white/85 hover:bg-white/10"}
              `}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <button
            key={p.id}
            onClick={() => setOpen(p)}
            className="work-reveal text-left rounded-3xl bg-white/5 neon-border p-5 hover:bg-white/10 transition"
          >
            {/* ✅ Image */}
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-40 w-full object-cover rounded-2xl neon-border"
            />

            <div className="mt-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs tracking-widest uppercase text-(--accent)">
                  {p.category}
                </span>
                <span className="text-xs text-white/60">{p.status}</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{p.subtitle}</p>

              <p className="mt-4 text-(--muted) text-sm leading-relaxed line-clamp-3">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 neon-border text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
