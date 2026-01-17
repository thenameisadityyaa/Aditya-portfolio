import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CommandPalette from "./CommandPalette";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <Navbar />
      <CommandPalette />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
