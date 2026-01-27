import { LINKS, SITE } from "../lib/constants";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-center">
          {SITE.name}
        </h1>

        <p className="mt-3 text-sm text-neutral-400 text-center">
          {SITE.tagline} · {SITE.location}
        </p>
      </div>
    </section>
  );
}
