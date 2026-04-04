import ProjectFlipCard, { type Project } from "../components/ui/ProjectFlipCard";

const projects: Project[] = [
  {
    title: "Reliable Storage Maintenance Scheduler",
    status: "In Progress",
    description:
      "Website-integrated maintenance booking tool that lets customers schedule time and describe issues in advance, helping streamline service requests and save time.",
    skills: [
      "Workflow Automation",
      "Scheduling Workflow",
      "Customer Intake",
      "Operational Efficiency",
      "Form Handling",
      "Queue Management",
      "API Design",
    ],
    links: [
      {
        label: "Video Demo To Come",
      },
    ],
    subtitle: "Client Project",
    image: "/images/maintenance-script.jpg",
  },
  {
    title: "Flashcards Platform",
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
        label: "Live Site",
        href: "https://firststepstudy.com",
      },
      {
        label: "GitHub",
        href: "https://github.com/SolomonBell/flashcards-app",
      },
      {
        label: "Video Demo To Come",
      },
    ],
    subtitle: "Personal Project",
    image: "/images/flashcards-preview.jpg",
    collaboration: "collaborative",
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
