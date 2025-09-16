"use client";
import React, { useState } from "react";

const FrequtlyQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When does the campaign launch?",
      answer: "Our campaign will launch on Kickstarter soon. Stay tuned for updates!",
    },
    {
      question: "When will I receive my watch?",
      answer:
        "We plan to ship all Montero watches within 2 months after the Kickstarter campaign ends. You’ll receive regular email updates throughout the process.",
    },
    {
      question: "Is there a warranty? How can I use it?",
      answer:
        "Yes, all Montero watches come with a 2-year international warranty. Instructions will be included with your watch.",
    },
    {
      question: "What movement is used in the watch?",
      answer:
        "The watch uses a high-precision Swiss automatic movement for superior accuracy and durability.",
    },
    {
      question: "Will I get early-bird perks and exclusive benefits?",
      answer:
        "Yes! Early backers will receive exclusive perks and discounted pricing during the campaign.",
    },
    {
      question: "How can I stay updated with the campaign?",
      answer:
        "You can subscribe to our newsletter and follow us on social media to receive regular updates.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>

        {/* Two-column FAQ grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="mt-10 text-gray-700">
          More questions? Visit our{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            docs
          </a>{" "}
          or{" "}
          <a
            href="#"
            className="inline-flex items-center px-3 py-1 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            Send us message
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrequtlyQuestions;
