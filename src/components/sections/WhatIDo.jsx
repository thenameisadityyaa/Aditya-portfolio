import ScrollReveal from "../ui/ScrollReveal";
import { Brush, Layers, Youtube } from "lucide-react";

const items = [
  {
    title: "Brand Identity & UI",
    desc: "Modern UI systems, premium layouts, design-to-code delivery.",
    icon: Brush,
  },
  {
    title: "Web Apps / Products",
    desc: "React-based scalable apps with performance-first engineering.",
    icon: Layers,
  },
  {
    title: "Content & Creatives",
    desc: "YouTube thumbnails, posts, assets, and visuals with impact.",
    icon: Youtube,
  },
];

export default function WhatIDo() {
  return (
    <ScrollReveal className="pt-10">
      <h2 className="text-2xl md:text-3xl font-semibold">what I do</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="rounded-3xl bg-white/5 neon-border p-6 hover:bg-white/10 transition"
          >
            <div className="size-10 rounded-2xl bg-(--accent)/15 neon-border grid place-items-center">
              <Icon className="text-(--accent)" size={18} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-(--muted) text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
