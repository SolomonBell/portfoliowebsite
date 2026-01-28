import { NAV_LINKS } from "../lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
        <nav className="flex gap-6 text-sm text-neutral-300">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
