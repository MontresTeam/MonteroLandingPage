"use client";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Thanks to Finleet, managing my money has never been easier. I can quickly set budgets, track progress, and get reminders to stay on track. Saving has never felt this achievable!",
      name: "Lana Del rey",
      role: "Photographer",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      text: "I love how simple and intuitive this app is. It's like having a financial expert at my fingertips!",
      name: "Endrick",
      role: "Product Designer",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      text: "In just a few weeks, I've already seen improvements in my spending habits. This app is a game-changer!",
      name: "Darryl",
      role: "CEO",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Finally, an app that makes budgeting easy and fun! I actually look forward to checking my money now.",
      name: "Lucas",
      role: "Interior Specialist",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      text: "In just a few weeks, I've already seen improvements in my spending habits. The detailed spending insights really opened my eyes, and I feel more confident about my financial decisions.",
      name: "Verina",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      text: "I've tried many finance apps, but none felt this personal. The clean UI and smart tips make money management effortless. I used to dread checking my account, now I do it every morning.",
      name: "Sherina",
      role: "Student College",
      avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    {
      text: "This finance app feels like a financial assistant. It helps set savings goals and alerts me about unusual spending, providing peace of mind. Sleek, modern, and useful.",
      name: "James",
      role: "Entrepreneur",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    {
      text: "Before this app, I was stressed about my monthly expenses. Now, I get clear breakdowns, smart tips, and even reminders that keep me on track. It feels like having a financial coach.",
      name: "Ryan Garcia",
      role: "Driver",
      avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    {
      text: "I love how intuitive everything feels. It just works. Categories and insights make tracking easier. It helped me pay off debt.",
      name: "Hermione",
      role: "Fashion Model",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900">
          Trusted by Collectors Worldwide
        </h2>
        <p className="mt-2 text-gray-600">
          Hear from our valued customers who've experienced the luxury, service,
          and trust that define our brand.
        </p>

        {/* Rating */}
        <div className="mt-6">
          <div className="text-5xl font-bold text-gray-900">4.9</div>
          <div className="flex justify-center items-center space-x-1 text-yellow-400 mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
          <p className="text-gray-500 mt-1">200+ Reviews</p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-blue-50 p-5 rounded-xl shadow-sm flex flex-col justify-between"
            >
              <p className="text-gray-700 leading-relaxed">{t.text}</p>
              <div className="flex items-center mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
