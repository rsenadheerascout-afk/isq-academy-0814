import { Award, Briefcase, ChevronRight, MessageCircle, Settings, ShieldCheck, Target, Users, } from "lucide-react";

const trainingFeatures = [
    {
        icon: Settings,
        title: "Real-World",
        subtitle: "Projects",
    },
    {
        icon: Settings,
        title: "Industry Tools",
        subtitle: "& Technologies",
    },
    {
        icon: Settings,
        title: "Best Practices",
        subtitle: "& Workflows",
    },
    {
        icon: ShieldCheck,
        title: "Confidence",
        subtitle: "& Mindset",
    },
];

const internshipFeatures = [
    {
        icon: Briefcase,
        title: "Real Project",
        subtitle: "Experience",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        subtitle: "& Agile",
    },
    {
        icon: MessageCircle,
        title: "Mentorship &",
        subtitle: "Code Reviews",
    },
    {
        icon: Target,
        title: "Professional",
        subtitle: "Work Culture",
    },
];

function CareerPathway() {
    return (
        <section className="bg-white py-16 lg:px-40 md:px-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full text-sm text-slate-600">
                        <Target
                            size={15}
                            className="text-primary"
                        />
                        <span>Your Journey</span>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl text-center mb-4">
                    The{" "}
                    <span className="text-primary italic">
                        6-Month
                    </span>{" "}
                    Career Acceleration Pathway
                </h2>

                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    A structured journey that combines intensive practical learning
                    with real industry experience.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_280px] gap-6 items-stretch">
                    {/* Phase 1 */}
                    <PathwayCard
                        phase="Phase 1"
                        title={
                            <>
                                3-Month{" "}
                                <span className="text-primary">
                                    Intensive Crash Program
                                </span>
                            </>
                        }
                        tagline="Learn. Practice. Build."
                        description="A high-intensity, hands-on program designed for IT / Software Engineering graduates who lack practical exposure."
                        features={trainingFeatures}
                        outcome="Outcome: Industry-Ready Skills"
                    />

                    {/* Connector */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="bg-primary text-white rounded-full p-2">
                            <ChevronRight size={18} strokeWidth={3} />
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <PathwayCard
                        phase="Phase 2"
                        title={
                            <>
                                6-Month{" "}
                                <span className="text-primary">
                                    Industry Internship
                                </span>
                            </>
                        }
                        tagline="Apply. Experience. Grow."
                        description="Work on real projects in a professional environment and gain valuable industry exposure with expert guidance."
                        features={internshipFeatures}
                        outcome="Outcome: 6-Month Internship Certification"
                    />

                    {/* Final outcome */}
                    <div className="bg-[#292727] rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                        <Award
                            size={48}
                            className="text-primary mb-5"
                            strokeWidth={1.5}
                        />

                        <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">
                            The Outcome
                        </p>

                        <h3 className="text-white text-xl leading-tight mb-4">
                            Job-Ready
                            <br />
                            Confident
                            <br />
                            Employable
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Strong practical skills, industry experience, and
                            certification to move confidently into your career.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PathwayCard({
    phase,
    title,
    tagline,
    description,
    features,
    outcome,
}: {
    phase: string;
    title: React.ReactNode;
    tagline: string;
    description: string;
    features: {
        icon: React.ElementType;
        title: string;
        subtitle: string;
    }[];
    outcome: string;
}) {
    return (
        <div className="bg-white border border-gray-200 rounded-3xl p-7 md:p-8 shadow-sm flex flex-col">
            <div className="inline-flex self-start bg-[#292727] text-white px-4 py-1 rounded-full text-xs font-medium mb-6">
                {phase}
            </div>

            <h3 className="text-xl leading-snug mb-1">
                {title}
            </h3>

            <p className="text-sm font-medium text-gray-700 mb-5">
                {tagline}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className="text-center"
                        >
                            <Icon
                                size={25}
                                className="mx-auto text-primary mb-2"
                                strokeWidth={1.8}
                            />

                            <p className="text-xs font-medium text-gray-700">
                                {feature.title}
                                <br />
                                {feature.subtitle}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-auto bg-primary/10 border border-primary/10 text-[#007f78] text-xs font-medium py-2.5 px-4 rounded-full text-center">
                {outcome}
            </div>
        </div>
    );
}

export default CareerPathway;