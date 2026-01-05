import { LINKS, NAV_LINKS, SITE } from "../lib/constants";

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-medium tracking-tight">
          {SITE.name}
        </a>

        <nav className="hidden gap-6 text-sm text-neutral-300 sm:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} className="hover:text-white" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <a
            className="rounded-lg border border-white/10 px-3 py-1.5 text-neutral-200 hover:bg-white/5"
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            className="rounded-lg border border-white/10 px-3 py-1.5 text-neutral-200 hover:bg-white/5"
            href={LINKS.email}
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
