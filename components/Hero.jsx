import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-10 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto bg-[#e9eff6] rounded-3xl p-6 md:p-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Next-Gen{" "}
            <span className="text-blue-600">Expertise</span> <br />
            For Your{" "}
            <span className="text-blue-600">Enterprise</span>
          </h1>

          <p className="text-gray-700 mt-6 text-base md:text-lg">
            Cultivate high-performance teams through expert learning.
          </p>

          {/* FEATURES */}
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xs">✔</span>
              <p>Tailored Solutions</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xs">✔</span>
              <p>Industry Insights</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xs">✔</span>
              <p>Expert Guidance</p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Enquire Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/hero-section.webp"
            alt="hero"
            width={500}
            height={400}
            className="w-full max-w-md md:max-w-full"
          />
        </div>

      </div>
    </section>
  );
}