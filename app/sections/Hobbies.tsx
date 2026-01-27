export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <div className="grid gap-10 md:grid-cols-[180px_1fr]">
        <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
          <p className="text-xs text-neutral-500 text-center px-2">Image coming soon</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-center">Hobbies</h2>

          <div className="mt-4 max-w-3xl space-y-4 text-neutral-300 leading-relaxed">
            <p className="indent-8">
              I am a high-performance athlete with the aspiration to compete at the international 
              level, and I have completed over 15 million meters on the indoor rower. I hope to 
              one day represent Team USA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
