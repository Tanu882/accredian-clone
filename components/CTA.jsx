"use client";

import { Headphones } from "lucide-react";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";



export default function CTA() {
  const [open, setOpen] = useState(false);

  return (
  <>
    <section className="bg-white py-10 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* MAIN BOX */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl md:rounded-3xl px-6 py-10 md:px-14 md:py-12 overflow-hidden">

          {/* BACKGROUND CIRCLES */}
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute right-10 bottom-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl"></div>

          {/* CONTENT */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">

            {/* LEFT SIDE */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">

              {/* ICON BOX */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur border border-white/30 shadow">
                <Headphones className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>

              {/* TEXT */}
              <div className="text-white max-w-xl">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                  Want to Learn More About Our Training Solutions?
                </h2>

                <p className="text-sm md:text-base text-white/90 mt-1 hidden md:block">
                  Get Expert Guidance for Your Team’s Success!
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition flex items-center gap-2"
            >
              Contact Us
              <span>›</span>
            </button>

          </div>
        </div>

      </div>
    </section>

     {/* ✅ MODAL OUTSIDE */}
      <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />
    </>
    
  );

  
}