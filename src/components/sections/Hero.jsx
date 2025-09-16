"use client";
import React, { useState, useEffect } from "react";
import EmailForm from '../../components/Subscription/EmailForm'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Simulate video loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  // Modal functions
  function openModal() {
    setIsOpen(true);
    setModalType("kickstarter");
  }

  function closeModal() {
    setIsOpen(false);
    setModalType("");
  }

  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center text-left px-4 sm:px-6 overflow-hidden">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-30 bg-black">
            <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          onLoadedData={() => setIsLoading(false)}
        >
          <source src="/video/14216244_1920_1080_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative z-20 max-w-3xl text-white space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center sm:text-left">
            A Watch That <br className="hidden sm:block" /> Connects You
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-gray-200 text-center sm:text-left max-w-2xl mx-auto sm:mx-0">
            Inspired by iconic beaches, designed for the bold traveller. Built for
            those who value precision, durability, and timeless beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button 
              onClick={openModal}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Reserve Your Spot On Kickstarter
            </button>
          </div>
        </div>

        {/* Scroll indicator for desktop */}
        {!isMobile && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        )}
      </section>
      
      <EmailForm
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        modalType={modalType}
      />
    </>
  );
}