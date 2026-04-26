"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function MobileSlider({ data }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;

    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <div className="mt-8 md:hidden">

      {/* SLIDER */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-1 scrollbar-hide scroll-smooth"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-full snap-center bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-44 object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {data.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}