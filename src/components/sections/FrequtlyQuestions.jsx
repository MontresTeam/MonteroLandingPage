"use client";

import React, { useState } from "react";
import { FiFileText, FiMessageCircle, FiChevronDown, FiChevronUp } from "react-icons/fi";

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
      "We plan to ship all Montero watches within 2 months after the Kickstarter campaign ends. You'll receive regular email updates throughout the process.",
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
    setOpenId(openId === id ? null : id);
  };

  const leftColumn = faqs.slice(0, 3);
  const rightColumn = faqs.slice(3);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-2">
          <h2 className="text-gray-900 text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>

        {/* FAQ Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-5 md:gap-6">
            {leftColumn.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-5 py-4 md:px-6 md:py-5 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <span className="text-sm md:text-base pr-2">{faq.question}</span>
                  <span className="text-blue-500 flex-shrink-0 ml-2">
                    {openId === faq.id ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openId === faq.id 
                      ? "max-h-96 opacity-100 px-5 pb-5 md:px-6 md:pb-6" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 md:gap-6">
            {rightColumn.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-5 py-4 md:px-6 md:py-5 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <span className="text-sm md:text-base pr-2">{faq.question}</span>
                  <span className="text-blue-500 flex-shrink-0 ml-2">
                    {openId === faq.id ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openId === faq.id 
                      ? "max-h-96 opacity-100 px-5 pb-5 md:px-6 md:pb-6" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center mt-12 md:mt-16 gap-3 md:gap-4 text-gray-600 text-sm md:text-base text-center px-2">
          <span>More questions? Visit our</span>
          <a
            href="#"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <FiFileText size={18} />
            <span>documentation</span>
          </a>
          <span>or</span>
          <a
            href="#"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <FiMessageCircle size={18} />
            <span>send us a message</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;