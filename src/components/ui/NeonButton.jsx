export default function NeonButton({ children, variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-(--accent) text-black hover:brightness-110 neon-shadow"
      : "bg-white/5 text-white/90 neon-border hover:bg-white/10";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
}
