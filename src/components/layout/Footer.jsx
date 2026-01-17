export default function Footer() {
  return (
    <footer className="border-t border-(--border) mt-14">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-(--muted) flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Aditya Sharma. All rights reserved.</p>
        <p className="tex(--accent)">Built with React + Tailwind 4.1</p>
      </div>
    </footer>
  );
}
