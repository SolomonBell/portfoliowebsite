export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

      <p className="mt-2 max-w-2xl text-neutral-300">
        Selected software and systems projects. Details and repositories will be
        added as projects are finalized.
      </p>

      <div className="mt-8 grid gap-6">
        {/* Project Template */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-medium">Project Name</h3>

          <p className="mt-2 text-sm text-neutral-300">
            Short description of the project, its purpose, and what problem it
            addresses.
          </p>

          <p className="mt-3 text-xs text-neutral-400">
            Keywords · Technologies · Concepts
          </p>

          <div className="mt-4 flex gap-4 text-sm">
            <span className="text-neutral-500">GitHub Link</span>
            <span className="text-neutral-500">Additional Link</span>
          </div>
        </div>

        {/* Duplicate template */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="font-medium">Project Name</h3>

          <p className="mt-2 text-sm text-neutral-300">
            Short description of the project, its purpose, and what problem it
            addresses.
          </p>

          <p className="mt-3 text-xs text-neutral-400">
            Keywords · Technologies · Concepts
          </p>

          <div className="mt-4 flex gap-4 text-sm">
            <span className="text-neutral-500">GitHub Link</span>
            <span className="text-neutral-500">Additional Link</span>
          </div>
        </div>

        {/* Placeholder card */}
        <div className="rounded-2xl border border-dashed border-white/15 p-5">
          <h3 className="font-medium text-neutral-400">
            Additional projects coming soon
          </h3>
        </div>
      </div>
    </section>
  );
}
