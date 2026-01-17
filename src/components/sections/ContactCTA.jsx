import { useNavigate } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";
import NeonButton from "../ui/NeonButton";

export default function ContactCTA() {
  const navigate = useNavigate();

  return (
    <ScrollReveal className="pt-12">
      <div className="rounded-3xl bg-white/5 neon-border p-7 md:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-(--accent)/10 blur-3xl" />
        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            Let’s build something
            <span className="text-white/60"> impactful</span>.
          </h2>
          <p className="mt-3 text-(--muted) max-w-2xl">
            If you’re a recruiter, founder, or team looking for a fresh dev with strong UI execution —
            I’m ready.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <NeonButton onClick={() => navigate("/contact")}>Book a Service</NeonButton>
            <NeonButton variant="secondary" onClick={() => navigate("/work")}>
              Explore Work
            </NeonButton>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
