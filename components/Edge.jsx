"use client";

import { motion } from "framer-motion";

export default function Edge() {
  const data = [
    {
      title: "Tailored Solutions",
      desc: "Programs customized to your organization's goals and challenges.",
    },
    {
      title: "Expert Guidance",
      desc: "Learn from industry leaders with real-world success.",
    },
    {
      title: "Innovative Framework",
      desc: "Proprietary methods for impactful, application-driven results.",
    },
    {
      title: "Advanced Technology",
      desc: "State-of-the-art LMS for seamless learning experiences.",
    },
    {
      title: "Diverse Offerings",
      desc: "Courses across industries, skill levels, and emerging fields.",
    },
    {
      title: "Proven Impact",
      desc: "Trusted by leading organizations for measurable ROI.",
    },
  ];

  return (
    <section id="edge" className="bg-white pt-6 md:pt-10 pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
        >
          The <span className="text-blue-600">Accredian Edge</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-3 text-sm sm:text-base"
        >
          Key Aspects of{" "}
          <span className="text-blue-600 font-medium">
            Our Strategic Training
          </span>
        </motion.p>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block mt-20 relative">

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="absolute top-7 left-0 h-[2px] bg-blue-300"
          />

          <div className="grid grid-cols-6 gap-6">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >

                {/* Circle */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold shadow-md z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="mt-6 bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                  <h3 className="font-semibold text-sm md:text-base text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-2">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden mt-12 relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-blue-200"></div>

          <div className="space-y-8">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex items-start gap-4 relative"
              >
                

                {/* Circle */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold z-10">
                  {index + 1}
                </div>


                {/* Card */}
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 w-full">
                  <h3 className="font-semibold text-base text-blue-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}