import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Command, Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    setOpen(false);
    navigate(path);
  };

  // ✅ Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-black/60 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="text-lg font-semibold tracking-wide">
          <span className="text-(--accent)">Aditya</span> Sharma
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-(--accent)"
                    : "text-(--muted) hover:text-white"
                }`
              }
            >
              {l.name}
            </NavLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Command Palette */}
          <button
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", ctrlKey: true })
              )
            }
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-(--border) bg-white/5 hover:bg-white/10 transition"
          >
            <Command size={16} />
            <span className="text-sm text-(--muted)">⌘K</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden size-10 rounded-full bg-white/5 neon-border grid place-items-center hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-99999 bg-black">
          {/* Top bar inside menu */}
          <div className="border-b border-(--border) bg-black">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="text-lg font-semibold tracking-wide">
                <span className="text-(--accent)">Aditya</span> Sharma
              </div>

              <button
                onClick={() => setOpen(false)}
                className="size-10 rounded-full bg-white/5 neon-border grid place-items-center hover:bg-white/10 transition"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="max-w-6xl mx-auto px-4 py-10">
            {/* big nav links */}
            <div className="space-y-3">
              {links.map((l) => (
                <button
                  key={l.path}
                  onClick={() => go(l.path)}
                  className="w-full rounded-3xl bg-black neon-border px-6 py-5 hover:bg-white/10 transition text-left flex items-center justify-between"
                >
                  <div>
                    <p className="text-2xl font-semibold text-white">{l.name}</p>
                    <p className="mt-1 text-(--muted) text-sm">
                      Go to {l.name}
                    </p>
                  </div>
                  <ArrowRight className="text-(--accent)" size={22} />
                </button>
              ))}
            </div>

            {/* Quick actions */}
            <div className="mt-8 rounded-3xl bg-black neon-border p-6 relative overflow-hidden">
              {/* ✅ Glow */}
              <div className="absolute -top-20 -right-24 size-72 rounded-full bg-(--accent) opacity-20 blur-3xl" />
              {/* ✅ BLACK MASK (prevents text behind being visible) */}
              <div className="absolute inset-0 bg-black/90" />

              <div className="relative">
                <p className="text-xs tracking-widest uppercase text-white/40">
                  quick actions
                </p>
                <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
                  Need something fast?
                </h3>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => go("/work")}
                    className="rounded-full px-6 py-4 bg-(--accent) text-black font-medium hover:brightness-110 transition"
                  >
                    View Projects
                  </button>

                  <button
                    onClick={() => go("/contact")}
                    className="rounded-full px-6 py-4 bg-white/5 neon-border text-white/90 hover:bg-white/10 transition"
                  >
                    Book a Service
                  </button>
                </div>

                <p className="mt-4 text-xs text-white/35">
                  Tip: Press{" "}
                  <span className="text-white/60">Ctrl + K</span> for command
                  palette.
                </p>
              </div>
            </div>

            <p className="mt-10 text-xs text-white/25">
              © {new Date().getFullYear()} Aditya Sharma
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
