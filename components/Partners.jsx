import Image from "next/image";

export default function Partners() {
  const logos = [
    "/RR.png",
    "/hcl.png",
    "/ibm2.png",
    "/crif2.png",
    "/adp.png",
    "/b.png",
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      
      <div className="max-w-7xl mx-auto text-center">
        
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Successful Collaborations With the{" "}
          <span className="text-blue-600 font-medium">Industry’s Best</span>
        </p>

        {/* ================= MOBILE SCROLL ================= */}
        <div className="mt-5 md:hidden">
          <div className="flex gap-7 animate-scroll w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="min-w-[120px] flex justify-center">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:flex justify-between items-center mt-12 gap-10">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo}
                alt="logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}