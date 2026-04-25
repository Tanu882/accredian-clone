"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/AccLogo.webp" alt="logo" width={130} height={45} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-10 text-gray-800 font-semibold text-sm lg:text-[15px]">
          <li className="text-blue-600 border-b-2 border-blue-600 pb-2 cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Stats</li>
          <li className="hover:text-blue-600 cursor-pointer">Clients</li>
          <li className="hover:text-blue-600 cursor-pointer">Accredian Edge</li>
          <li className="hover:text-blue-600 cursor-pointer">CAT</li>
          <li className="hover:text-blue-600 cursor-pointer">How It Works</li>
          <li className="hover:text-blue-600 cursor-pointer">FAQs</li>
          <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-black hover:text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (SMOOTH ANIMATION) */}
      {menuOpen && (
  <div className="md:hidden fixed inset-0 z-50">
    
    {/* Overlay */}
    <div 
      className="absolute inset-0 bg-black/30"
      onClick={() => setMenuOpen(false)}
    />

    {/* Menu Card */}
    <div className="absolute top-16 right-4 w-64 bg-white rounded-xl shadow-lg p-5">
      
      {/* Close Button */}
      <div className="flex justify-end mb-4">
        <button
          className="text-xl text-black hover:text-gray-600"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col gap-5 text-gray-800 font-medium">
        <li className="text-blue-600 font-semibold">Home</li>
        <li>Stats</li>
        <li>Clients</li>
        <li>Accredian Edge</li>
        <li>CAT</li>
        <li>How It Works</li>
        <li>FAQs</li>
        <li>Testimonials</li>
      </ul>

    </div>
  </div>
)}
    </nav>
  );
}