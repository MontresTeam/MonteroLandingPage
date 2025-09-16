"use client";

import React, { useState } from "react";
import { FiFileText, FiMessageCircle } from "react-icons/fi";

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

  return (
    <section className="bg-[#E6F6FD] min-h-screen flex items-center justify-center py-8 px-4 sm:py-12">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-gray-900 text-center font-semibold text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[56px] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center text-base sm:text-lg leading-7 max-w-2xl mx-auto">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>

        {/* FAQ Accordion - Single column on mobile, two columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
                index >= 3 ? "md:mt-10" : ""
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
                aria-expanded={openId === faq.id}
              >
                <span className="text-sm sm:text-base pr-2">{faq.question}</span>
                <span className="text-xl flex-shrink-0">
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openId === faq.id
                    ? "max-h-[500px] px-4 sm:px-6 pb-4"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-2 sm:gap-3 text-gray-600 text-sm text-center">
          <span>More questions? Visit our</span>
          
          <a
            href="#"
            className="flex items-center gap-1 sm:gap-2 text-blue-500 hover:underline font-medium px-1"
          >
            <FiFileText size={18} />
            <span>docs</span>
          </a>
          
          <span>or</span>
          
          <a
            href="#"
            className="flex items-center gap-1 sm:gap-2 text-blue-500 hover:underline font-medium px-1"
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