import { LINKS } from "../lib/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-center">
        Contact
      </h2>

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
