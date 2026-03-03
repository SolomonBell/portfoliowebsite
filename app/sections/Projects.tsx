// app/sections/Projects.tsx

type ProjectLink = {
  label: string;
  href?: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  status?: string;
};

const projects: Project[] = [
  {
    title: "Flashcards Platform",
    status: "In Development",
    description:
      "Spaced-repetition web platform for multi-user classrooms with shared decks and AI-assisted grading. Implemented staged recall logic, session analytics with CSV export, and structured user stories while conducting stakeholder interviews to refine product direction.",
    tags: [
      "Vanilla JS (ES Modules)",
      "HTML/CSS",
      "Supabase",
      "localStorage",
      "Web Crypto API",
      "Spaced Repetition",
      "Analytics + CSV Export",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/SolomonBell/flashcards-app",
      },
      {
        label: "Video Demo To Come",
      },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="h-72 w-105 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium">{project.title}</h3>
        {project.status && (
          <span className="text-xs text-neutral-300 border border-white/15 bg-white/5 px-2 py-1 rounded-full">
            {project.status}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-neutral-300 flex-1">
        {project.description}
      </p>

      <p className="mt-3 text-xs text-neutral-400">
        {project.tags.join(" · ")}
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {project.links.map((link) =>
          link.href ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/40 transition"
            >
              {link.label}
            </a>
          ) : (
            <span
              key={link.label}
              className="text-neutral-500 cursor-default"
            >
              {link.label}
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-center">
        Projects
      </h2>

      <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}

        <div className="h-72 w-105 shrink-0 rounded-2xl border border-dashed border-white/15 p-5 flex items-center justify-center">
          <h3 className="font-medium text-neutral-400">
            Additional projects coming soon
          </h3>
        </div>
      </div>
    </section>
  );
}
