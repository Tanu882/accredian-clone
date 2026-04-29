export default function Stats() {
  const stats = [
    {
      number: "10K+",
      text: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      text: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      text: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="bg-white py-10 md:py-20 px-4 sm:px-6 md:px-8">
      
      <div className="max-w-7xl mx-auto text-center">
        
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">
          Our <span className="text-blue-600">Track Record</span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          The Numbers Behind{" "}
          <span className="text-blue-600 font-medium">Our Success</span>
        </p>

        {/* ================= MOBILE VIEW ================= */}
        <div className="mt-10 space-y-6 md:hidden">
          {stats.map((item, index) => (
            <div key={index}>
              
              <div className="flex items-center gap-4">
                
                {/* NUMBER BADGE */}
                <div className="bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full">
                  {item.number}
                </div>

                {/* TEXT */}
                <p className="text-left text-gray-800 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* DIVIDER */}
              {index !== stats.length - 1 && (
                <div className="mt-4 border-t border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center mt-12">
          {stats.map((item, index) => (
            <div key={index} className="text-center relative">
              
              {/* BADGE */}
              <div className="bg-blue-100 text-blue-600 font-semibold px-6 py-3 rounded-full inline-block">
                {item.number}
              </div>

              {/* TEXT */}
              <p className="mt-4 text-gray-800 text-sm md:text-base max-w-xs mx-auto">
                {item.text}
              </p>

              {/* VERTICAL LINE */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-16 border-r border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}