import React from "react";

function StoryFeature() {
  return (
    <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 mb-20">
      <div className="bg-gray-200 aspect-video w-full relative flex items-center justify-center cursor-pointer group shadow-2xl border-4 border-white">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        <div className="flex flex-col items-center z-10">
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform bg-black/40">
            <span className="text-white ml-1">▶</span>
          </div>
          <span className="text-white shadow-sm">Explore our story</span>
        </div>
      </div>
    </section>
  );
}

export default StoryFeature;
