"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-left px-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/14216244_1920_1080_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-20 max-w-3xl text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          A Watch That <br /> Connects You
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Inspired by iconic beaches, designed for the bold traveller. Built for
          those who value precision, durability, and timeless beauty.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition">
          Reserve Your Spot On Kickstarter
        </button>
      </div>
    </section>
  );
}
