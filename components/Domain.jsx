import {
  Lightbulb,
  Brain,
  Users,
  BarChart,
  Settings,
  Globe,
  CreditCard,
} from "lucide-react";

export default function Domain() {
  const data = [
    { icon: Lightbulb, title: "Product & Innovation Hub" },
    { icon: Brain, title: "Gen-AI Mastery" },
    { icon: Users, title: "Leadership Elevation" },
    { icon: BarChart, title: "Tech & Data Insights" },
    { icon: Settings, title: "Operations Excellence" },
    { icon: Globe, title: "Digital Enterprise" },
    { icon: CreditCard, title: "Fintech Innovation Lab" },
  ];

  return (
    <section className="bg-white pt-10 md:pt-16 pb-10 md:pb-20 px-4 sm:px-6 md:px-8">
      
      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Our <span className="text-blue-600">Domain Expertise</span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          <span className="text-blue-600 font-medium">
            Specialized Programs
          </span>{" "}
          Designed to Fuel Innovation
        </p>

        {/* GRID */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md border-gray-100 
hover:shadow-xl hover:-translate-y-1 transition-all duration-300
flex flex-col items-center justify-center
${index === data.length - 1 ? "md:col-start-2" : ""}`}
              >
                {/* ICON */}
                <Icon className="w-10 h-10 text-blue-600 mb-4" />

                {/* TEXT */}
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base text-center">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}