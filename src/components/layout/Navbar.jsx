import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Command, Menu, X, ArrowRight, FileText } from "lucide-react";
import gsap from "gsap";

const links = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Catalog", path: "/catalog" },
  { name: "About", path: "/about" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const overlayRef = useRef(null);

  const go = (path) => {
    closeMenu(() => navigate(path));
  };

  const closeMenu = (afterClose) => {
    const overlay = overlayRef.current;
    if (!overlay) {
      setOpen(false);
      afterClose?.();
      return;
    }

    gsap.to(".menu-item", { y: 10, opacity: 0, stagger: 0.04, duration: 0.2 });
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.22,
      ease: "power2.out",
      onComplete: () => {
        setOpen(false);
        afterClose?.();
      },
    });
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const overlay = overlayRef.current;
    gsap.set(overlay, { opacity: 0 });
    gsap.set(".menu-item", { y: 14, opacity: 0 });

    gsap.to(overlay, { opacity: 1, duration: 0.22, ease: "power2.out" });
    gsap.to(".menu-item", {
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.06,
      ease: "power3.out",
      delay: 0.1,
    });
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-black/60 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="text-lg font-semibold tracking-wide">
          <span className="text-(--accent)">Aditya</span> Sharma
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm items-center">
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

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-(--muted) hover:text-white transition"
          >
            Resume
          </a>
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

      {/* ✅ Fullscreen Mobile Menu */}
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-99999 bg-black"
          role="dialog"
          aria-modal="true"
        >
          {/* top bar */}
          <div className="border-b border-(--border) bg-black">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
              <div className="text-lg font-semibold tracking-wide">
                <span className="text-(--accent)">Aditya</span> Sharma
              </div>

              <button
                onClick={() => closeMenu()}
                className="size-10 rounded-full bg-white/5 neon-border grid place-items-center hover:bg-white/10 transition"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* content */}
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="space-y-3">
              {links.map((l) => (
                <button
                  key={l.path}
                  onClick={() => go(l.path)}
                  className="menu-item w-full rounded-3xl bg-black neon-border px-6 py-5 hover:bg-white/10 transition text-left flex items-center justify-between"
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

              {/* Resume */}
              <button
                onClick={() => closeMenu(() => window.open("/resume.pdf", "_blank"))}
                className="menu-item w-full rounded-3xl bg-black neon-border px-6 py-5 hover:bg-white/10 transition text-left flex items-center justify-between"
              >
                <div>
                  <p className="text-2xl font-semibold text-white">Resume</p>
                  <p className="mt-1 text-(--muted) text-sm">View / Download PDF</p>
                </div>
                <FileText className="text-(--accent)" size={22} />
              </button>
            </div>

            {/* quick actions */}
            <div className="menu-item mt-8 rounded-3xl bg-black neon-border p-6 relative overflow-hidden">
              <div className="absolute -top-20 -right-24 size-72 rounded-full bg-(--accent) opacity-20 blur-3xl" />
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
                  <span className="text-white/60">Ctrl + K</span> for command palette.
                </p>
              </div>
            </div>

            <p className="menu-item mt-10 text-xs text-white/25">
              © {new Date().getFullYear()} Aditya Sharma
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
