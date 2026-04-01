import ProjectFlipCard, { type Project } from "../components/ui/ProjectFlipCard";

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
          <ProjectFlipCard key={project.title} project={project} />
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
