import Image from "next/image";
  
export default function Hero() {
  return (
    <section className="bg-white pt-20 md:pt-24 pb-10 md:pb-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-[#eef3f8] rounded-0 md:rounded-3xl shadow-lg px-5 py-0 md:px-10 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/hero-section.webp"
              alt="hero"
              width={500}
              height={400}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight text-black">
              Next-Gen{" "}
              <span className="text-blue-600">Expertise</span>
              <br />
              For Your{" "}
              <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="text-gray-700 mt-4 md:mt-6 text-sm sm:text-base md:text-lg">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-left md:text-left">
              {[
                "Tailored Solutions",
                "Industry Insights",
                "Expert Guidance",
                "Measurable Impact",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xs">
                    ✓
                  </span>
                  <p className="text-gray-800 text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex justify-center md:justify-start">
              <button className="mt-6 md:mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                Enquire Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}