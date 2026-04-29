import { BarChart, Monitor, Play } from "lucide-react";

export default function Results() {
  const data = [
    {
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
      icon: <BarChart className="w-6 h-6" />, // ✅ JSX element
    },
    {
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry needs.",
      icon: <Play className="w-6 h-6" />,
    },
  ];
 
  return (
    <section id="results" className="bg-white py-15 md:py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          How We{" "}
          <span className="text-blue-600">Deliver Results</span>{" "}
          That Matter?
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600 font-medium">
            Skill Development
          </span>
        </p>

        {/* CARDS */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-100 rounded-xl p-8 border border-blue-200"
            >

              {/* LEFT BLUE BAR */}
              <div className="absolute left-[-6px] top-10 h-20 w-2 bg-blue-600 rounded-full"></div>

              {/* RIGHT BLUE BAR */}
              <div className="absolute right-[-6px] top-10 h-20 w-2 bg-blue-600 rounded-full"></div>

              {/* STEP NUMBER */}
              <div className="absolute top-4 left-4 w-7 h-7 flex items-center justify-center text-sm font-semibold border border-blue-300 rounded-full text-blue-600">
                {index + 1}
              </div>

              {/* ICON */}
              <div className="flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl">
                  {item.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="mt-6 font-semibold text-lg text-black">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}