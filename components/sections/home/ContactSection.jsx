import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="max-w-auto mx-auto py-16 lg:px-40 md:px-20 px-6 scroll-mt-20"        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* LEFT: Contact Information */}
                <div className="space-y-6">
                    {/* Heading */}
                    <div>
                        <span className="text-primary text-sm">
                            Visit Us
                        </span>
                        <h2 className="text-4xl md:text-5xl text-gray-900 mt-2 mb-4 tracking-tight"            >
                            Come in for a Chat.
                        </h2>
                        <p className="text-gray-500 text-lg">
                            We&apos;d rather meet you than email you. Step in for a quick chat.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4 pt-4">
                        {/* Location */}
                        <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                            <MapPin
                                className="w-6 h-6 text-primary mt-1 shrink-0"
                                strokeWidth={1.8}
                            />
                            <div>
                                <h3 className="text-gray-900 ">
                                    iSeeQ Academy
                                </h3>

                                <p className="text-gray-500 text-sm mt-1">
                                    No. 412, 1/1 Peradeniya Road, Kandy, Sri Lanka
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                            <Phone
                                className="w-6 h-6 text-primary mt-1 shrink-0"
                                strokeWidth={1.8}
                            />

                            <div className="flex flex-col">
                                <Link
                                    href="tel:+94777789898"
                                    className="text-gray-900  hover:text-primary transition-colors"
                                >
                                    +94 777 789 898
                                </Link>

                                <Link
                                    href="tel:+94812230800"
                                    className="text-gray-500 mt-1 hover:text-primary transition-colors"
                                >
                                    +94 812 230 800
                                </Link>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                            {/* WhatsApp */}
                            <Link href="https://wa.me/94777789898" target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-[#20B256] hover:bg-[#1a9347] text-white py-4 px-6 rounded-2xl shadow-sm transition-colors font-medium"
                            >
                                <MessageCircle className="w-5 h-5" strokeWidth={2} />
                                Chat on WhatsApp
                            </Link>

                            {/* Email */}
                            <Link href="mailto:academy@iseeq.lk" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 py-4 px-6 rounded-2xl shadow-sm transition-colors font-medium"              >
                                <Mail className="w-5 h-5 text-primary" strokeWidth={1.8} />
                                academy@iseeq.lk
                            </Link>

                        </div>
                    </div>
                </div>

                {/* RIGHT: Google Map */}
                <div className="w-full h-[400px] lg:h-[550px] bg-gray-200 rounded-[2rem] overflow-hidden shadow-md border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d989.403318354286!2d80.623997!3d7.2847659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368834f886da9%3A0x268c51d0eb99e947!2siSeeQ!5e0!3m2!1sen!2ssg!4v1787573615387!5m2!1sen!2ssg"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="iSeeQ Academy location"
                    />
                </div>

            </div>
        </section>
    );
}