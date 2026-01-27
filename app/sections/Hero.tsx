import Image from "next/image";
import { LINKS, SITE } from "../lib/constants";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[180px_1fr] md:items-center">
        <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/headshot.jpg"
            alt="Photo of Solomon Bell"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div>
          <p className="text-sm text-neutral-400">
            {SITE.tagline} · {SITE.location}
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-center">
            {SITE.name}
          </h1>
          <p className="mt-4 max-w-2xl indent-8 text-neutral-300 leading-relaxed">
            I am a Computer Science and Engineering and Mathematical Economics student
            focused on building software systems that model, analyze, and solve complex
            real-world problems using mathematics, data, and computation. I would love 
            to help develop and refine your products. If you are interested, let’s set 
            up a call.
          </p>
        </div>
      </div>
    </section>
  );
}
