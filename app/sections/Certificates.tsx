import FlipCard from "../components/ui/FlipCard";

type Certificate = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  skills: string[];
  backClassName: string;
};

const certificates: Certificate[] = [
  {
    id: "python",
    title: "Python for Everybody\nSpecialization",
    subtitle: "University of Michigan · 76 hours",
    image: "/images/certificates/python-for-everybody.jpg",
    skills: [
      "Python",
      "SQL",
      "SQLite",
      "Data Visualization",
      "Web Scraping",
      "REST APIs",
      "JSON",
      "XML",
      "Data Analysis",
    ],
    backClassName: "bg-blue-950",
  },
  {
    id: "java",
    title: "Introduction to Java &\nObject-Oriented Programming",
    subtitle: "University of Pennsylvania · 18 hours",
    image: "/images/certificates/intro-programming.jpg",
    skills: [
      "Java",
      "Object-Oriented Programming",
      "Debugging",
      "Data Structures",
      "Algorithm Analysis",
    ],
    backClassName: "bg-red-950",
  },
  {
    id: "bloomberg",
    title: "Bloomberg Market Concepts",
    subtitle: "Bloomberg · 10 hours",
    image: "/images/certificates/market-concepts.jpg",
    skills: [
      "Bloomberg Terminal",
      "Fixed Income",
      "Equities",
      "Capital Markets",
      "Bonds",
      "Equity Capital Markets",
    ],
    backClassName: "bg-neutral-900",
  },
];

function CertFront({ cert }: { cert: Certificate }) {
  return (
    <div
      className="relative h-full w-full"
      style={{
        backgroundImage: `url('${cert.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-y-0 left-0 z-10 flex items-center p-5">
        <div>
          <h3
            className="font-medium text-white"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
          >
            {cert.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < cert.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h3>
          <p
            className="mt-1 text-sm text-neutral-200"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.95)" }}
          >
            {cert.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function CertBack({ cert }: { cert: Certificate }) {
  return (
    <div className="p-5 flex flex-col h-full">
      <h3 className="text-sm font-medium text-white/60">
        {cert.title.replace("\n", " ")}
      </h3>

      <div className="mt-3 flex flex-wrap gap-2 flex-1 content-start">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-white/10 text-neutral-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-5xl px-6 py-16 border-t border-white/10"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-center">
        Certificates
      </h2>

      <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
        {certificates.map((cert) => (
          <FlipCard
            key={cert.id}
            backClassName={cert.backClassName}
            front={<CertFront cert={cert} />}
            back={<CertBack cert={cert} />}
          />
        ))}
      </div>
    </section>
  );
}
