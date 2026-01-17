import { NavLink } from "react-router-dom";
import { Command } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-black/40 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-wide"
        >
          <span className="text-(--accent)">Aditya</span> Sharma
        </NavLink>

        {/* Links */}
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

        {/* Command Palette Button (will implement Day 5) */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-(--border) bg-white/5 hover:bg-white/10 transition">
          <Command size={16} />
          <span className="text-sm text-(--muted) hidden sm:block">
            ⌘K
          </span>
        </button>
      </nav>
    </header>
  );
}
