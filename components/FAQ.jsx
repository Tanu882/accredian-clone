"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import EnquiryModal from "./EnquiryModal";


export default function FAQ() {
  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const tabs = [
    { id: "course", label: "About the Course" },
    { id: "delivery", label: "About the Delivery" },
    { id: "misc", label: "Miscellaneous" },
  ];

  const faqs = {
    course: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "We offer customized corporate training programs across multiple domains tailored to your organization's needs.",
      },
      {
        q: "What domain specializations are available?",
        a: "We cover domains like AI, Data Science, Product Management, Leadership, and more.",
      },
    ],
    delivery: [
      {
        q: "Can the courses be customized for specific industries or teams?",
        a: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
      },
      {
        q: "Who are the instrcutors for these programs?",
        a: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
      },
    ],
    misc: [
      {
        q: "Do you provide certifications?",
        a: "Yes, industry-recognized certifications are provided after course completion.",
      },
      {
        q: "Is support available after training?",
        a: "Yes, we provide post-training support and mentorship.",
      },
    ],
  };


  return (
  <>
    <section id="faq" className="bg-white py-14 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center">
          Frequently Asked{" "}
          <span className="text-blue-600">Questions</span>
        </h2>

        {/* CONTENT */}
        <div className="mt-12 grid md:grid-cols-3 gap-10">

          {/* LEFT TABS */}
          <div className="space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setOpenIndex(null);
                }}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-500 text-blue-600 font-semibold shadow-md scale-[1.02]"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* RIGHT FAQ */}
          <div className="md:col-span-2 space-y-4">

            {faqs[activeTab].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium text-gray-800 text-sm md:text-base">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 pb-4"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}

            {/* BUTTON */}
            <div className="pt-6 text-center md:text-left">
              <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Enquire Now
            </button>
            </div>

          </div>

        </div>

      </div>
    </section>

     {/* ✅ MODAL OUTSIDE */}
          <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />
        </>
  );
}