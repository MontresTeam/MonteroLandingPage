"use client";
import React from "react";
import Image from "next/image";

import Card1 from "../../../public/images/hero/firstnew.jpg";
import Card2 from "../../../public/images/hero/015747bc9f707db6461f3b9336b35c13566ab40f.jpg";
import Card3 from "../../../public/images/hero/28fbe1e128277d9a6a8de3a1030664043ffdab8d.jpg";
import Card4 from "../../../public/images/hero/5ee8dd93df7cff5d1ca042357d7545f42802dd76.jpg";
import Card5 from "../../../public/images/hero/63e569a33cc85675443541322296614c645f7d45.jpg";

const Card = ({ src, title, description }) => (
  <div className="relative rounded-xl overflow-hidden group h-64 sm:h-72 md:h-80">
    {/* Background Image */}
    <Image
      src={src}
      alt={title}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />

    {/* White Blur Overlay */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] group-hover:backdrop-blur-[2px] transition-all duration-500" />

    {/* White Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-white/2 to-transparent" />

    {/* Progressive Blur Effect - Hidden on mobile for performance */}
    <div className="absolute inset-0 hidden sm:block">
      {/* Layer blur effect */}
      <div 
        className="absolute w-full h-full"
        style={{
          mask: 'radial-gradient(ellipse 50% 139.11% at 50% 0%, black 0%, transparent 100%)',
          WebkitMask: 'radial-gradient(ellipse 50% 139.11% at 50% 0%, black 0%, transparent 100%)',
          backdropFilter: 'blur(0px)',
        }}
      />
      
      {/* Background blur effect */}
      <div 
        className="absolute w-full h-full"
        style={{
          mask: 'radial-gradient(ellipse 50% 100% at 50% 0%, black 0%, transparent 100%)',
          WebkitMask: 'radial-gradient(ellipse 50% 100% at 50% 0%, black 0%, transparent 100%)',
          backdropFilter: 'blur(2px)',
        }}
      />
    </div>

    {/* Text Content Container with Gradient */}
    <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
      <div className="relative">
        {/* Gradient overlay for text area */}
        <div className="absolute -inset-4 md:-inset-6 -top-8 md:-top-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />
        
        {/* Text Content */}
        <div className="relative">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const Designed = () => {
  return (
    <div className="bg-black text-white py-8 md:py-12 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Intro Text Card */}
        <div className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 lg:p-8 order-first md:order-none">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Designed <br /> for Discerning Travelers
          </h2>
          <p className="mt-2 md:mt-4 text-gray-300 text-base md:text-lg">
            Where Swiss precision meets coastal elegance in a timepiece that
            transcends borders
          </p>
        </div>

        {/* Cards */}
        <Card
          src={Card1}
          title="Built to Last"
          description="3-Year International Warranty. Crafted for durability and confidence, your watch is covered with a free 3-year global warranty. Just deliver it to our store, and we'll take care of the rest."
        />
        <Card
          src={Card2}
          title="Dual-Time Precision"
          description="Track two time zones at once with a reliable Seiko NH34 automatic GMT movement, enhanced for smoother performance and long-term durability."
        />
        <Card
          src={Card3}
          title="World-Inspired Design"
          description="Eight Iconic Beach Timezones. The bezel is marked with time offsets for 8 famous beaches around the world, blending functionality with travel passion."
        />
        <Card
          src={Card4}
          title="Art Meets Precision"
          description="Every Montera dial is a canvas of time crafted with precision, rich details, and timeless beauty. From world-map engravings to Arabic and English numeral editions."
        />
        <Card
          src={Card5}
          title="Limited Collector's Edition"
          description="Crafted in strictly limited numbers, Montera is not mass-produced. The first edition includes individually numbered timepieces, reserved exclusively for Kickstarter backers."
        />
      </div>
    </div>
  );
};

export default Designed;