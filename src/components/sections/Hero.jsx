import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ArrowRight, LayoutGrid, BriefcaseBusiness, CalendarCheck } from "lucide-react";
import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVite } from "react-icons/si";

import GlowPill from "../ui/GlowPill";
import NeonButton from "../ui/NeonButton";

export default function Hero() {
  const navigate = useNavigate();
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        ".hero-avatar",
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="pt-8 md:pt-12">
      {/* Top Pills */}
      <div className="hero-reveal flex flex-wrap gap-3 justify-center md:justify-start">
        <GlowPill icon={BriefcaseBusiness} label="See my work" onClick={() => navigate("/work")} />
        <GlowPill icon={LayoutGrid} label="My catalog" onClick={() => navigate("/work")} />
        <GlowPill icon={CalendarCheck} label="Book a service" onClick={() => navigate("/contact")} />
      </div>

      {/* Main Hero */}
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="hero-reveal text-(--accent) text-sm tracking-widest uppercase">
            Creative Web Developer
          </p>

          <h1 className="hero-reveal mt-3 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Aditya <span className="text-white/60">Sharma</span>
          </h1>

          <p className="hero-reveal mt-5 max-w-xl text-base md:text-lg text-(--muted) leading-relaxed">
            Building scalable, interactive web products that feel premium and perform fast.
          </p>

          {/* CTA Buttons */}
          <div className="hero-reveal mt-7 flex flex-wrap gap-3">
            <NeonButton onClick={() => navigate("/work")}>
              View Projects <ArrowRight className="ml-2" size={18} />
            </NeonButton>
            <NeonButton variant="secondary" onClick={() => navigate("/contact")}>
              Hire / Collaborate
            </NeonButton>
          </div>

          {/* Toolbelt */}
          <div className="hero-reveal mt-10">
            <p className="text-xs tracking-widest uppercase text-white/40 mb-3">
              Toolbelt
            </p>

            <div className="flex flex-wrap gap-3">
              <Tool icon={FaReact} label="React" />
              <Tool icon={SiVite} label="Vite" />
              <Tool icon={SiTailwindcss} label="Tailwind" />
              <Tool icon={SiJavascript} label="JavaScript" />
              <Tool icon={FaNodeJs} label="Node" />
              <Tool icon={FaGithub} label="GitHub" />
            </div>
          </div>
        </div>

        {/* Right Avatar Card */}
        <div className="hero-avatar">
          <div className="relative overflow-hidden rounded-3xl bg-white/5 neon-border backdrop-blur-xl p-6 md:p-8">
            <div className="absolute -top-20 -right-24 size-72 rounded-full bg-(--accent)/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 size-72 rounded-full bg-(--accent)/5 blur-3xl" />

            <div className="relative">
              <p className="text-xs tracking-widest uppercase text-white/40">
                currently
              </p>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold">
                GIET University — 3rd Year CSE
              </h3>

              <p className="mt-4 text-(--muted) leading-relaxed">
                Winner at Sharda University Technovation Hackathon • Graphic Designing Lead @ AIML Club.
              </p>

              {/* Avatar placeholder */}
              <div className="mt-7 h-[260px] w-full rounded-2xl bg-black/40 neon-border grid place-items-center">
                <p className="text-(--muted) text-sm">
                  Avatar / Illustration (we’ll add later)
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-(--muted)">Focused on UI + Performance</span>
                <span className="text-(--accent)">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tool({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-white/5 neon-border">
      <Icon className="text-(--accent)" size={18} />
      <span className="text-sm text-white/85">{label}</span>
    </div>
  );
}
