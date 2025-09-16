"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Import assets
import backgroundImage from "../../../public/images/features/dadc1242966739c83da15f89dcf7d1177f527bf3.png";
import logoImage from "../../../public/images/logo.png";
import watchImage from "../../../public/images/features/Group 14[1].png";

const CountDown = () => {
  const targetDate = new Date("2025-09-20T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-start text-center px-4 pt-8 md:pt-12 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White overlay for soft effect */}
      <div className="absolute inset-0 bg-white opacity-70"></div>

      {/* === Blurred Watch Background === */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[100%] h-[100%] z-0 opacity-80">
        <Image
          src={watchImage}
          alt="Blurred Watch"
          fill
          className="object-contain " // strong blur like Figma
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Logo */}
        <div className="w-40 md:w-56 mx-auto mb-4 md:mb-6">
          <div className="relative w-full h-24 md:h-32">
            <Image
              src={logoImage}
              alt="Montero Logo"
              fill
              className="object-contain mx-auto filter brightness-0"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Made With Swiss Technology
        </h2>
        <p className="mt-3 md:mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Praesent sagittis orci hendrerit dui fermentum, viverra sodales odio
          euismod. Curabitur viverra, sapien a rutrum vehicula, felis purus
          scelerisque massa, sit amet consequat nibh libero quis dui.
        </p>

        {/* Buy Now Button */}
        <div className="mt-4 md:mt-6">
          <button className="bg-green-700 text-white px-5 py-2 md:px-6 md:py-2 rounded-md hover:bg-green-800 transition text-sm md:text-base">
            Buy Now
          </button>
        </div>

        {/* Sub-heading */}
        <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-700">
          <span className="border-l-4 border-blue-600 pl-2">
            Launching September 2025
          </span>{" "}
          • Be The First To Know
        </p>

        {/* Countdown Timer */}
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-lg shadow-md w-16 md:w-20 lg:w-24 py-3 md:py-4"
            >
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-gray-600 text-xs md:text-sm mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="relative z-10 mt-8 md:mt-12 lg:mt-16 text-gray-700 max-w-2xl mx-auto text-xs md:text-sm lg:text-base leading-relaxed">
          Discover the elegance of time with Montero – where precision
          engineering meets exquisite craftsmanship. Our inaugural collection
          redefines luxury watchmaking with Swiss movements, premium materials,
          and timeless design. Join the exclusive waitlist for early access and
          special launch offers.
        </p>

        {/* Action Buttons */}
        <div className="mt-4 md:mt-6 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <button className="bg-green-700 text-white px-5 py-2 md:px-6 md:py-2 rounded-md hover:bg-green-800 transition text-sm md:text-base">
            Notify Me on Launch
          </button>
          <button className="border border-gray-400 px-5 py-2 md:px-6 md:py-2 rounded-md hover:bg-gray-100 transition text-sm md:text-base">
            Reserve Your Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
