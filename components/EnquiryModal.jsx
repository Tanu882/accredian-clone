"use client";

import Image from "next/image";
import { X } from "lucide-react";

export default function EnquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* MODAL */}
      <div className="relative bg-white w-[95%] max-w-3xl h-[90vh] rounded-xl overflow-hidden flex shadow-2xl">

        {/* LEFT IMAGE */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/contact.avif"  // 👉 put your image in public folder
            alt="team"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto bg-white opacity-100">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
  Enquire Now
</h2>

            <button onClick={onClose}>
              <X className="w-6 h-6 text-gray-500 hover:text-black" />
            </button>
          </div>

          {/* FORM */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border-b border-gray-300 outline-none py-2 text-black placeholder:text-gray-500 bg-transparent"
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border-b border-gray-300 outline-none py-2 text-black placeholder:text-gray-500 bg-transparent"
            />

            {/* PHONE */}
            <div className="flex items-center gap-2 border-b border-gray-300 py-2">
  <span className="text-sm text-gray-600">🇮🇳 +91</span>
  <input
    type="tel"
    placeholder="Enter phone number"
    className="w-full outline-none text-black placeholder:text-gray-500 bg-transparent"
  />
</div>

            <input
              type="text"
              placeholder="Enter company name"
              className="w-full border-b border-gray-300 outline-none py-2 text-black placeholder:text-gray-500 bg-transparent"
            />

            <select className="w-full border-b border-gray-300 outline-none py-2 text-gray-500 bg-transparent">
              <option>Select Domain</option>
              <option>AI</option>
              <option>Data Science</option>
            </select>

            <input
              type="number"
              placeholder="Enter No. of candidates"
              className="w-full border-b border-gray-300 outline-none py-2 text-black placeholder:text-gray-500 bg-transparent"
            />

            <select className="w-full border-b border-gray-300 outline-none py-2 bg-transparent text-gray-500">
              <option>Select Mode of Delivery *</option>
              <option>Online</option>
              <option>Offline</option>
            </select>

            <input
              type="text"
              placeholder="Eg: Gurgaon, Delhi, India"
              className="w-full border-b border-gray-300 outline-none py-2 text-black placeholder:text-gray-500 bg-transparent"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:bg-blue-700 transition"
            >
              Submit
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}