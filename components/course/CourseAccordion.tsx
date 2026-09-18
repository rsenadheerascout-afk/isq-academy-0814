"use client";

import { useState } from "react";
import {
  BookOpenIcon,
  LightBulbIcon,
  Squares2X2Icon,
  ClipboardDocumentCheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const sectionIcons = {
  description: BookOpenIcon,
  "why-it-counts": LightBulbIcon,
  modules: Squares2X2Icon,
  requirements: ClipboardDocumentCheckIcon,
};

type AccordionItem = {
  id: string;
  title: string;
  icon?: string;
  content: React.ReactNode;
};

export default function CourseAccordion({ items }: { items: AccordionItem[] }) {
  // Initialize with the first item open by default
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id); // Toggle or close if already open
  };

  return (
    <div className="border border-gray-200 rounded-sm bg-white font-montserrat">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => toggleOpen(item.id)}
            className="w-full flex justify-between items-center p-5 font-semibold text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              {item.id &&
                (() => {
                  const Icon =
                    sectionIcons[item.id as keyof typeof sectionIcons];

                  return Icon ? (
                    <Icon
                      className="h-5 w-5 shrink-0 text-teal-600"
                      aria-hidden="true"
                    />
                  ) : null;
                })()}

              <span>{item.title}</span>
            </div>
            <ChevronDownIcon
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openId === item.id ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {/* Content Area */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openId === item.id
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-5 pt-0 text-gray-700 leading-relaxed text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
