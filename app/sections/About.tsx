import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <div className="grid gap-10 md:grid-cols-[180px_1fr]">
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
          <h2 className="text-2xl font-semibold tracking-tight text-center">
            About
          </h2>

          <div className="mt-4 max-w-3xl space-y-4 text-neutral-300 leading-relaxed">
            <p className="indent-8">
              I am a Computer Science and Engineering and Mathematical Economics student focused on
              building software systems that model, analyze, and solve complex real-world problems
              using mathematics, data, and computation.
            </p>

            <p className="indent-8">
              I would love to help develop and refine your products. If you are interested, let’s
              set up a call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
