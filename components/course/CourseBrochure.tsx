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
        className="block w-full bg-black py-4 text-center text-white shadow-md transition-colors hover:bg-gray-800"
      >
        Download Brochure
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="border-2 border-black px-6 py-2 text-sm transition-colors hover:bg-black hover:text-white"
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
