import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Q 360°",
  description: "Q 360°",
  alternates: {
    canonical: "/q360",
  },
};

export default function Q360Page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center grow bg-linear-to-tr from-primary to-secondary gap-2">
        <h1 className="text-6xl text-black">Q360°</h1>
        <p className="text-2xl text-black">Coming Soon...</p>
      </div>
    </div>
  );
}
