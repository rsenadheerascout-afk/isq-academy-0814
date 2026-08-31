import {
  MessageCircle,
  MonitorPlay,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    icon: MonitorPlay,
    title: "Counselling & Guidance",
    description:
      "Build the right mindset and clarity for your career journey.",
  },
  {
    icon: Users,
    title: "Personalised Mentoring",
    description:
      "Learn from industry experts who guide you at every step.",
  },
  {
    icon: Target,
    title: "Continuous Monitoring",
    description:
      "Regular feedback, progress tracking and performance support.",
  },
  {
    icon: MessageCircle,
    title: "Career Consulting",
    description:
      "Resume, LinkedIn, interview preparation and career planning.",
  },
  {
    icon: ShieldCheck,
    title: "Job Placement Support",
    description:
      "Connect with opportunities and receive support throughout your job search.",
  },
];

function CareerTransformation() {
  return (
    <section className="bg-white py-16 lg:px-40 md:px-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center mb-12">
          We Don't Just Train. We{" "}
          <span className="text-primary italic">
            Transform.
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="text-center p-5"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center">
                  <Icon
                    size={22}
                    className="text-primary"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-base mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CareerTransformation;