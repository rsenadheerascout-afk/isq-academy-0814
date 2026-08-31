import { ArrowRightCircle, Check, X } from "lucide-react";

const realityItems = [
  "Not confident with real projects",
  "Don't know industry tools & workflows",
  "Struggle to apply for jobs",
  "Worried about your future",
];

const solutionItems = [
  "Gain hands-on skills in real projects",
  "Learn industry tools & best practices",
  "Work with experts & get mentored",
  "Complete internship & get placed",
];

function CareerRealitySolution() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 lg:px-40 md:px-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#292727] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_320px]">
            {/* Reality */}
            <div className="p-8 md:p-10">
              <h2 className="text-2xl text-white mb-2">
                The Reality
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-7">
                You have the degree.
                <br />
                But you still feel...
              </p>

              <ul className="space-y-4">
                {realityItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <X
                      size={19}
                      className="text-red-400 shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex items-center">
              <div className="bg-[#3a3a3a] rounded-full p-2">
                <ArrowRightCircle
                  size={28}
                  className="text-white"
                />
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 md:p-10 bg-[#333333]">
              <h2 className="text-2xl text-primary mb-2">
                The Solution
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-7">
                We help you move forward.
                <br />
                With practical training, mentorship & real experience.
              </p>

              <ul className="space-y-4">
                {solutionItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white text-sm"
                  >
                    <Check
                      size={19}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Message */}
            <div className="bg-primary p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl text-white leading-snug mb-6">
                We don't blame anyone.
                <br />
                We bridge the gap.
                <br />
                Together.
              </h3>

              <div className="border-t border-white/20 pt-4">
                <p className="text-white/70 text-xs mb-1">
                  Your effort + Our support =
                </p>

                <p className="text-white font-medium text-sm">
                  Your successful career
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerRealitySolution;