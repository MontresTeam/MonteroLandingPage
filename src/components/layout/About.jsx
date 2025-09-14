"use client";
import Image from "next/image";
import React from "react";
import watchImage from "../../../public/images/features/Snapshot - 10-2.jpg"; // Replace with your actual image

const AboutMontero = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
      {/* Top Heading */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-gray-600 font-medium mb-2 font-instrument-sans">About Montero</h2>
        <div className="border-t border-gray-300 mb-8"></div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={watchImage}
                alt="Montero Watch"
                className="rounded-2xl"
                width={464}
                height={614}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
                  <h3 className="text-1xl md:text-1xl font-semibold text-gray-900 leading-snug mb-4">
              Montero was born from countless hours spent on beaches around 
              the world, watching the tides change and the sun set over different
              horizons.
             
            </h3>
            {/* Limited Edition Badge */}
            <div className="inline-block bg-gray-100 border border-gray-300 text-sm px-3 py-1 rounded mb-6 font-instrument-sans">
              Limited Edition • Only 500 Pieces Worldwide
            </div>

            {/* Two-column paragraph layout */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-gray-600 font-instrument-sans text-[20px] leading-[160%]">
                This limited edition timepiece is our tribute to the explorers,
                the dreamers, and those who measure time not in hours, but in
                experiences.
              </p>
              <p className="text-gray-600 font-instrument-sans text-[20px] leading-[160%]">
                 Each time zone in our GMT complication represents a special
                coastal destination, connecting you to those moments no matter
                where you are.
              </p>
            </div>

          {/* Highlighted Info Box */}
<div
  className="mt-6 p-[30px] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[952px] font-instrument-sans"
  style={{
    background: "linear-gradient(180deg, rgba(35, 175, 248, 0.2) 0%, rgba(35, 175, 248, 0.1) 60%, rgba(35, 175, 248, 0) 100%)",
  }}
>
  <div className="border-l-2 border-gray-300 pl-3">
    <p className="text-gray-800 text-sm">
      Meet Montero, a world-time watch crafted for dreamers, explorers, and lovers of the sea.
    </p>
  </div>
  <div className="border-l-2 border-gray-300 pl-3">
    <p className="text-gray-800 text-sm">
      It's not just about where you are — it's about where you're meant to be.
    </p>
  </div>
  <div className="border-l-2 border-gray-300 pl-3">
    <p className="text-gray-800 text-sm">
      Inspired by 8 of the world's most iconic beaches, each with its unique time zone, this watch tells more than time — it tells a story.
    </p>
  </div>
  <div className="border-l-2 border-gray-300 pl-3">
    <p className="text-gray-800 text-sm">
      From the shores of Ibiza to the sands of Bora Bora, Montero connects your wrist to the spirit of adventure.
    </p>
  </div>
</div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');
        
        .font-instrument-sans {
          font-family: 'Instrument Sans', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default AboutMontero;