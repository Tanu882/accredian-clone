"use client";

import Image from "next/image";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoShouldJoin() {
  const data = [
    {
      icon: MonitorCheck,
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
    },
    {
      icon: MonitorX,
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
    },
    {
      icon: GraduationCap,
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
    },
    {
      icon: Briefcase,
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
    },
  ];

  return (
    <section className="bg-white py-0 md:py-10 px-0 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* BLUE CONTAINER */}
        <div className="bg-blue-600 md:rounded-3xl px-6 py-14 md:px-16 md:py-16 relative overflow-hidden">

          <div className="grid md:grid-cols-2 gap-10 md:gap-6 items-start">

  {/* ================= LEFT SIDE ================= */}
  <div className="text-white relative flex flex-col items-center md:items-start text-center md:text-left">

    <p className="text-sm opacity-90">
      Who Should Join?
    </p>

    <h2 className="text-3xl md:text-3xl font-bold mt-2 leading-tight max-w-[420px]">
      Strategic Skill Enhancement
    </h2>

    {/* MOBILE IMAGE (optional - better look) */}
    <div className="block md:hidden mt-6">
      <Image
        src="/who.png"
        alt="professionals"
        width={220}
        height={220}
        className="object-contain mx-auto"
      />
    </div>

    {/* DESKTOP IMAGE */}
    <div className="hidden md:block absolute -bottom-60 left-0">
      <Image
        src="/who.png"
        alt="professionals"
        width={250}
        height={220}
        className="object-contain"
      />
    </div>

  </div>

  {/* ================= RIGHT SIDE ================= */}
  <div className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    gap-y-8 
    gap-x-6 
    mt-2 md:mt-0
  ">

    {data.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex gap-4 items-start text-white"
        >

          {/* ICON */}
          <div className="w-12 h-12 md:w-20 md:h-12 flex items-center justify-center rounded-xl border border-white/40">
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="font-semibold text-base md:text-lg">
              {item.title}
            </h3>
            <p className="text-sm text-white/80 mt-1">
              {item.desc}
            </p>
          </div>

        </motion.div>
      );
    })}

  </div>

</div>

        </div>

      </div>
    </section>
  );
}