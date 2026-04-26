"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";
import { useState } from "react";

export default function Footer() {
   const [open, setOpen] = useState(false);

  return (
  <>
    <footer className="bg-[#0f172a] md:bg-white text-white md:text-black pt-10 md:pt-16 pb-6 px-4 sm:px-6 md:px-8">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT */}
          <div>
            {/* LOGO */}
            <Image src="/AccLogo.webp" alt="logo" width={130} height={45} />

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-lg">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <div className="text-left md:text-right">
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Enquire Now
            </button>
            <p className="text-sm mt-2 opacity-80">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 md:border-gray-300 my-8 opacity-30 md:opacity-100"></div>

        {/* MIDDLE SECTION */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT LINKS */}
          <div>
            <h3 className="font-semibold mb-3">
              Accredian
            </h3>

            <ul className="space-y-2 text-sm opacity-90">
              <li>About</li>
              <li>Blog</li>
              <li>Why Accredian</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-3">
              Contact Us
            </h3>

            <p className="text-sm">
              Email us:{" "}
              <span className="text-blue-500">
                enterprise@accredian.com
              </span>
            </p>

            <p className="text-sm mt-2 max-w-md">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
              Sector 18, Gurugram, Haryana
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 my-8 opacity-30 md:opacity-100"></div>

        {/* BOTTOM */}
        <p className="text-center text-sm opacity-80">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>

      </div>
    </footer>

     {/* ✅ MODAL OUTSIDE */}
              <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />
            </>
  );
}