import FlipCard from "../components/ui/FlipCard";

type ProjectLink = {
  label: string;
  href?: string;
};

type Project = {
  title: string;
  description: string;
  skills: string[];
  links: ProjectLink[];
  status?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Flashcards Platform",
    status: "In Development",
    description:
      "Built a spaced-repetition web app for multi-user classrooms with shared decks, AI grading, and flashcard generation. Implemented staged recall algorithms, dual-storage architecture, a Node.js AI proxy, and session analytics with CSV export while refining the product through stakeholder interviews.",
    skills: [
      "JavaScript",
      "Node.js",
      "Supabase",
      "REST APIs",
      "Spaced Repetition",
      "Analytics",
      "Railway",
      "HTML/CSS",
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
    image: "/images/flashcards-preview.jpg",
  },
];

function ProjectFront({ project }: { project: Project }) {
  return (
    <div className="relative h-full w-full bg-white/5">
      {project.image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      )}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative p-5 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium">{project.title}</h3>
          {project.status && (
            <span className="text-xs text-neutral-200 border border-white/20 bg-black/40 px-2 py-1 rounded-full">
              {project.status}
            </span>
          )}
        </div>

        <div className="flex-1 flex items-end justify-end">
          <span className="text-white/25 text-xs">hover or tap to see skills</span>
        </div>
      </div>
    </div>
  );
}

function ProjectBack({ project }: { project: Project }) {
  return (
    <div className="p-5 flex flex-col h-full">
      <h3 className="text-sm font-medium text-white/60">{project.title}</h3>

      <div className="mt-3 flex flex-wrap gap-2 flex-1 content-start">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-white/10 text-neutral-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-6 text-sm">
        {project.links.map((link) =>
          link.href ? (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-300 underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition"
              onClick={(e) => e.stopPropagation()}
            >
              {link.label}
            </a>
          ) : (
            <span key={link.label} className="text-neutral-400 cursor-default">
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
          <FlipCard
            key={project.title}
            backClassName="bg-neutral-900"
            front={<ProjectFront project={project} />}
            back={<ProjectBack project={project} />}
          />
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
