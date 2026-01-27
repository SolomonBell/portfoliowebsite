import { LINKS, SITE } from "../lib/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

      <p className="mt-2 max-w-2xl text-neutral-300">
        The best way to reach me is through email. I’m always open to discussing
        projects, opportunities, and collaborations.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href={LINKS.email}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          Email
        </a>

        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          LinkedIn
        </a>

        <a
          href={LINKS.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          GitHub
        </a>

        <a
          href={LINKS.resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
