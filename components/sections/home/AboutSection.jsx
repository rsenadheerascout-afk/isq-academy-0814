import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="about" className="max-w-auto mx-auto lg:px-40 md:px-20 px-6 mb-24">
      <div className="border border-gray-200 flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
        <div className="p-10 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl mb-4">About iSeeQ Academy</h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            We deliver premium online learning experiences for professionals who
            want to advance their careers, connect with a network of peer
            learners, and gain insight from leaders in the field.
          </p>
          <a
            href="/about"
            className="px-6 py-2 text-sm w-max bg-primary hover:bg-secondary text-white hover:text-black transition-colors rounded-full"
          >
            Read more
          </a>
        </div>

        <div className="relative md:w-1/2 min-h-[300px] md:min-h-[350px]">
          <Image
            src="/about-academy.jpg"
            alt="iSeeQ Academy"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;