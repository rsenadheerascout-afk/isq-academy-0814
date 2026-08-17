import React from "react";

function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 mb-24">
      <div className="border border-gray-200 flex flex-col md:flex-row">
        <div className="p-10 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl mb-4">About iSeeQ Academy</h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            We deliver premium online learning experiences for professionals who
            want to advance their careers, connect with a network of peer
            learners, and gain insight from leaders in the field.
          </p>
          <a
            href="#"
            className="border-2 border-black px-6 py-2 text-sm w-max hover:bg-black hover:text-white transition-colors"
          >
            Read more
          </a>
        </div>
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center min-h-[250px]">
          <span className="text-4xl tracking-widest text-gray-300">iSeeQ</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
