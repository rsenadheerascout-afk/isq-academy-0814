import {
  CheckCircle2,
  Quote,
} from "lucide-react";

const audience = [
  "Degree holders in IT / Software Engineering",
  "Lack practical exposure and real project experience",
  "Want to start their career with confidence",
  "Motivated to learn, grow and succeed",
];

const takeaways = [
  "Strong practical skills & confidence",
  "Real-world project portfolio",
  "6-Month Internship Certification",
  "Industry experience & professional network",
  "Job placement assistance",
  "Ready to work anywhere in the world",
];

function CareerAudience() {
  return (
    <section className="bg-gray-50 py-16 lg:px-40 md:px-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Audience */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl mb-6">
              Who Is This{" "}
              <span className="text-[#00beb2]">
                Program For?
              </span>
            </h2>

            <ul className="space-y-4">
              {audience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#00beb2] shrink-0 mt-0.5"
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div className="bg-[#292727] rounded-2xl p-7 flex flex-col justify-center items-center text-center relative">
            <Quote
              className="absolute top-6 left-6 text-gray-600"
              size={30}
            />

            <h3 className="text-xl text-white leading-relaxed relative z-10 mb-4">
              It's not about the university.
              <br />
              It's about your next step.
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Your future is in your hands.
              <br />
              We are here to help you shape it.
            </p>
          </div>

          {/* Takeaways */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <h2 className="text-xl mb-6">
              What You Will{" "}
              <span className="text-[#00beb2]">
                Walk Away With
              </span>
            </h2>

            <ul className="space-y-3">
              {takeaways.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <CheckCircle2
                    size={17}
                    className="text-[#00beb2] shrink-0 mt-0.5"
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerAudience;