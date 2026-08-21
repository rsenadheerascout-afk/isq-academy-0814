import Image from "next/image";
import React from "react";

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-auto mx-auto lg:px-40 md:px-20 px-6 mb-24"
    >
      <div className="border bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border-gray-200 flex flex-col md:flex-row rounded-2xl">
        <div className="p-10 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl mb-4 text-black">An academy that feels like a community.</h3>
          <p className="text-gray-800 text-sm mb-6 leading-relaxed">
            Open evenings, parent circles, women's meetups, senior tea-and-tech afternoons — learning here doesn't stop at the classroom door.
          </p>
          <a
            href="#"
            className="border-2 border-black px-6 py-2 text-sm w-max hover:bg-black text-black hover:text-white transition-colors rounded-full"
          >
            Read more
          </a>
        </div>
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center min-h-[250px] rounded-lg">
          <Image
            src={'/web_banner.png'}
            alt="iSeeQ"
            width={1280}
            height={720}
            className=" object-cover rounded-lg"
          />
          {/* <span className="text-4xl tracking-widest text-gray-300">iSeeQ</span> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
