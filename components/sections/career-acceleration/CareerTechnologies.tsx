import { FileText } from "lucide-react";

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "REST APIs",
  "MySQL",
  "Git & GitHub",
  "Docker",
  "AWS (Basics)",
];

function CareerTechnologies() {
  return (
    <section className="bg-gray-50 py-16 lg:px-40 md:px-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl mb-4">
          Technologies & Tools You Will Master
        </h2>

        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-10">
          Learn with a modern technology stack focused on practical,
          industry-relevant software development skills.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-2">
                <FileText
                  size={18}
                  className="text-primary"
                  strokeWidth={1.8}
                />

                <span className="text-sm font-medium text-gray-700">
                  {technology}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-10">
          Modern • In-Demand • Industry Relevant
        </p>
      </div>
    </section>
  );
}

export default CareerTechnologies;