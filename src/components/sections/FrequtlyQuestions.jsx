"use client";

import React, { useState } from "react";
import { FiFileText, FiMessageCircle } from "react-icons/fi"; // import icons at top

const faqs = [
  {
    id: 1,
    question: "When does the campaign launch?",
    answer:
      "Our campaign will launch on Kickstarter soon. Stay tuned for updates!",
  },
  {
    id: 2,
    question: "When will I receive my watch?",
    answer:
      "We plan to ship all Montero watches within 2 months after the Kickstarter campaign ends. You’ll receive regular email updates throughout the process.",
  },
  {
    id: 3,
    question: "Is there a warranty? How can I use it?",
    answer:
      "Yes, all Montero watches come with a 2-year international warranty. Instructions will be included with your watch.",
  },
  {
    id: 4,
    question: "What movement is used in the watch?",
    answer:
      "The watch uses a high-precision Swiss automatic movement for superior accuracy and durability.",
  },
  {
    id: 5,
    question: "Will I get early-bird perks and exclusive benefits?",
    answer:
      "Yes! Early backers will receive exclusive perks and discounted pricing during the campaign.",
  },
  {
    id: 6,
    question: "How can I stay updated with the campaign?",
    answer:
      "You can subscribe to our newsletter and follow us on social media to receive regular updates.",
  },
];

const FrequentlyQuestions = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id); // only one open at a time
  };

  // Split FAQs into two groups
  const leftColumn = faqs.slice(0, 3);
  const rightColumn = faqs.slice(3);

  return (
    <section className="bg-[#E6F6FD] min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-gray-900 text-center"
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: 600, // SemiBold
              fontSize: "48px",
              lineHeight: "56px",
              letterSpacing: "-0.03em", // -3%
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-gray-600 text-center"
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: 400, // Regular
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "-0.02em", // -2%
              textAlign: "center",
            }}
          >
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>

        {/* FAQ Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
                >
                  {faq.question}
                  <span className="text-xl">
                    {openId === faq.id ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openId === faq.id
                      ? "max-h-[1000px] px-4 pb-4"
                      : "max-h-0 px-4"
                  }`}
                >
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
                >
                  {faq.question}
                  <span className="text-xl">
                    {openId === faq.id ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openId === faq.id
                      ? "max-h-[1000px] px-4 pb-4"
                      : "max-h-0 px-4"
                  }`}
                >
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-2 md:gap-8 text-gray-600 text-sm w-[700px] h-[28px] mx-auto text-center">
          <span>More questions? Visit our </span>

          <a
            href="#"
            className="flex items-center gap-2 text-blue-500 hover:underline font-medium"
          >
            <FiFileText size={20} /> {/* Docs icon */}
            <span>docs</span>
          </a>

          <span> or </span>

          <a
            href="#"
            className="flex items-center gap-2 text-blue-500 hover:underline font-medium"
          >
            <FiMessageCircle size={20} /> {/* Send message icon */}
            <span>send us a message</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
