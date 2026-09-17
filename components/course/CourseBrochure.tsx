"use client";

import { useEffect, useState } from "react";

type CourseBrochureProps = {
  slug: string;
  title: string;
  action: "view" | "download";
};

export default function CourseBrochure({
  slug,
  title,
  action,
}: CourseBrochureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const brochureUrl = `/courses/brochures/${slug}.pdf`;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (action === "download") {
    const downloadFileName = `${title
      .normalize("NFKD")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "_")}.pdf`;
    return (
      <a
        href={brochureUrl}
        download={downloadFileName}
        aria-label="Download Brochure"
        className="flex h-10 w-10 items-center justify-center bg-white text-black transition-colors hover:bg-gray-100 focus:outline-blue-700"
      >
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className=" bg-black text-white cursor-pointer border-2 border-black px-6 py-2 text-sm transition-colors hover:bg-white hover:text-black"
      >
        Course brochure
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brochure-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="flex h-[90vh] w-full max-w-5xl flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <h2 id="brochure-title" className="text-lg">
                {title}
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close brochure"
                className="px-3 py-1 text-2xl leading-none hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <iframe
              src={brochureUrl}
              title={`${title} brochure`}
              className="min-h-0 flex-1"
            />
          </div>
        </div>
      )}
    </>
  );
}
