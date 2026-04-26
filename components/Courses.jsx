"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MobileSlider from "./MobileSlider";


export default function Courses() {
  const data = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "/p1.webp",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      img: "/p2.webp",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      img: "/p3.webp",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      img: "/p4.webp",
    },
  ];


  return (
    <section className="bg-white py-10 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
        >
          Tailored <span className="text-blue-600">Course Segmentation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-3 text-sm sm:text-base"
        >
          Explore{" "}
          <span className="text-blue-600 font-medium">
            Custom-fit Courses
          </span>{" "}
          Designed to Address Every Professional Focus
        </motion.p>

        {/* ================= MOBILE AUTO SCROLL ================= */}
        {/* MOBILE */}
        <MobileSlider data={data} />
        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid mt-14 grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>
              </div>


              {/* HOVER LINE */}

              <div className="h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}