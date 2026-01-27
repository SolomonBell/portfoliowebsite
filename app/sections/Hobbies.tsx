export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-center">Hobbies</h2>

      <div className="mt-4 grid gap-10 md:grid-cols-[180px_1fr]">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center self-stretch min-h-[200px] md:min-h-0">
          <p className="text-xs text-neutral-500 text-center px-2">Image coming soon</p>
        </div>

        <div className="max-w-3xl space-y-4 text-neutral-300 leading-relaxed">
          <p className="indent-8">
            I am a high-performance athlete with the aspiration to compete at the international level, and I have completed over 15 million meters on the indoor rower. I hope to one day represnt Team USA.
          </p>
        </div>
      </div>
    </section>
  );
}
