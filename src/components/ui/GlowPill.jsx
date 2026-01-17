export default function GlowPill({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-2 rounded-full px-4 py-2 neon-border bg-white/5 hover:bg-white/10 transition backdrop-blur-xl"
    >
      <span className="size-6 rounded-full bg-(--accent)/15 grid place-items-center neon-border">
        <Icon size={14} className="text-(--accent)" />
      </span>
      <span className="text-sm text-white/90">{label}</span>
    </button>
  );
}
