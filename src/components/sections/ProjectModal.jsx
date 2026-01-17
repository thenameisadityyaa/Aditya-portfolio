import { X, ExternalLink, Github } from "lucide-react";
import NeonButton from "../ui/NeonButton";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-9999 bg-black/70 backdrop-blur-sm grid place-items-center px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl bg-white/5 neon-border p-6 md:p-8 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-(--accent)/10 blur-3xl" />

        <button
          className="absolute top-4 right-4 size-10 rounded-full bg-white/5 neon-border grid place-items-center hover:bg-white/10 transition"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <div className="relative">
          {/* ✅ Image */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-56 object-cover rounded-2xl neon-border"
          />

          <p className="mt-5 text-(--accent) text-xs tracking-widest uppercase">
            {project.category} • {project.status}
          </p>

          <h3 className="mt-2 text-2xl md:text-3xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 text-white/70">{project.subtitle}</p>

          <p className="mt-5 text-(--muted) leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white/5 neon-border text-white/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <NeonButton onClick={() => window.open(project.demo, "_blank")}>
              Live Demo <ExternalLink className="ml-2" size={16} />
            </NeonButton>

            <NeonButton
              variant="secondary"
              onClick={() => window.open(project.github, "_blank")}
            >
              GitHub <Github className="ml-2" size={16} />
            </NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
}
