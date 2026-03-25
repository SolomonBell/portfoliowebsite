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
  image?: string; // optional background image
};

const projects: Project[] = [
  {
    title: "Flashcards Platform",
    status: "In Development",
    description:
      "Built a spaced-repetition web app for multi-user classrooms with shared decks, AI grading, and flashcard generation. Implemented staged recall algorithms, dual-storage architecture, a Node.js AI proxy, and session analytics with CSV export while refining the product through stakeholder interviews.",
    tags: [
      "JavaScript",
      "HTML/CSS",
      "Node.js",
      "Supabase",
      "REST APIs",
      "Dual Storage Architecture",
      "Spaced Repetition",
      "Analytics",
      "Railway",
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
    image: "/images/flashcards-preview.jpg", // Put image in public/images
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative h-72 w-105 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5">

      {/* Background Image */}
      {project.image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      )}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative p-5 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium">{project.title}</h3>
          {project.status && (
            <span className="text-xs text-neutral-200 border border-white/20 bg-black/40 px-2 py-1 rounded-full">
              {project.status}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-neutral-200 flex-1">
          {project.description}
        </p>

        <p className="mt-3 text-xs text-neutral-300 text-center">
          {project.tags.join(" · ")}
        </p>

        {/* Centered Links */}
        <div className="mt-4 flex justify-center gap-6 text-sm">
          {project.links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-neutral-300 underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="text-neutral-400 cursor-default"
              >
                {link.label}
              </span>
            )
          )}
        </div>
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
            More Projects Coming Soon
          </h3>
        </div>
      </div>
    </section>
  );
}
