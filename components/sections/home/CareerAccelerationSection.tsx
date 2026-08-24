import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, MonitorPlay, Target, Users, } from "lucide-react";

function CareerAccelerationSection() {
    return (
        <section className="relative overflow-hidden bg-white py-16 lg:px-40 md:px-20 px-6">
            {/* Background accents */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"
            />
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Label */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full text-sm text-slate-600">
                        <Target size={15} strokeWidth={1.8} className="text-primary" />
                        <span>Career Acceleration Pathway</span>
                    </div>
                </div>

                {/* Heading */}
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl leading-tight mb-5">
                        From Degree Holder to{" "}
                        <span className="text-[#00beb2] italic">
                            Job-Ready Professional
                        </span>
                    </h2>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Bridge the gap between university knowledge and real-world industry experience through intensive training, mentorship, practical projects, and a structured internship pathway.
                    </p>
                </div>

                {/* Program Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {/* Training */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <div className="w-12 h-12 rounded-full bg-[#292727] flex items-center justify-center mb-5">
                            <MonitorPlay
                                className="text-white"
                                size={23}
                                strokeWidth={1.8}
                            />
                        </div>
                        <h3 className="text-xl mb-2">
                            3-Month Intensive Training
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Build practical skills through real-world projects, modern technologies, industry workflows, and hands-on learning.
                        </p>
                    </div>
                    {/* Internship */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <div className="w-12 h-12 rounded-full bg-[#292727] flex items-center justify-center mb-5">
                            <Briefcase
                                className="text-white"
                                size={23}
                                strokeWidth={1.8}
                            />
                        </div>
                        <h3 className="text-xl mb-2">
                            6-Month Industry Internship
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Apply your knowledge on real projects while working with experienced professionals in a practical environment.
                        </p>
                    </div>
                    {/* Support */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <div className="w-12 h-12 rounded-full bg-[#292727] flex items-center justify-center mb-5">
                            <Users
                                className="text-white"
                                size={23}
                                strokeWidth={1.8}
                            />
                        </div>
                        <h3 className="text-xl mb-2">
                            Mentorship & Career Support
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Receive continuous guidance, career support, interview preparation, and job placement assistance.
                        </p>
                    </div>
                </div>
                {/* Bottom Highlight */}
                <div className="mt-10 bg-[#292727] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-3">
                            <div className="flex items-center gap-2 text-sm text-white">
                                <CheckCircle2
                                    size={17}
                                    className="text-[#00beb2]"
                                />
                                Practical Training
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white">
                                <CheckCircle2
                                    size={17}
                                    className="text-[#00beb2]"
                                />
                                Real Projects
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white">
                                <CheckCircle2
                                    size={17}
                                    className="text-[#00beb2]"
                                />
                                Industry Internship
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white">
                                <CheckCircle2
                                    size={17}
                                    className="text-[#00beb2]"
                                />
                                Career Support
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Explore the complete Career Acceleration Pathway and see how the program takes you from learning to employment.
                        </p>
                    </div>
                    <Link
                        href="/career-acceleration"
                        className="shrink-0 inline-flex items-center gap-2 bg-[#00beb2] text-white px-6 py-3 rounded-full hover:bg-[#00aaa0] transition-colors text-sm"
                    >
                        Explore the Pathway
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CareerAccelerationSection;