import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const items = useMemo(
    () => [
      { label: "Home", action: () => navigate("/") },
      { label: "Work", action: () => navigate("/work") },
      { label: "About", action: () => navigate("/about") },
      { label: "Achievements", action: () => navigate("/achievements") },
      { label: "Contact", action: () => navigate("/contact") },
    ],
    [navigate]
  );

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(q.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQ("");
      }
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-9999 bg-black/70 backdrop-blur-sm grid place-items-start px-4 pt-24"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-3xl bg-white/5 neon-border overflow-hidden"
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search size={18} className="text-white/60" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search pages..."
            className="w-full bg-transparent outline-none text-white/90 placeholder:text-white/40"
          />
          <span className="text-xs text-white/40">ESC</span>
        </div>

        <div className="p-2">
          {filtered.map((it) => (
            <button
              key={it.label}
              onClick={() => {
                it.action();
                setOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-white/10 transition text-white/85"
            >
              {it.label}
            </button>
          ))}

          {filtered.length === 0 && (
            <p className="px-4 py-6 text-(--muted)">No results</p>
          )}
        </div>
      </div>
    </div>
  );
}
