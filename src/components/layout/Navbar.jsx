"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../public/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Image
          src={logo}
          alt="Montero Logo"
          width={220}
          height={220}
          className="object-contain w-32 md:w-48 lg:w-56 h-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-white font-medium hover:text-gray-600">Features</a>
          <a href="#design" className="text-white font-medium hover:text-gray-600">Design</a>
          <a href="#specs" className="text-white font-medium hover:text-gray-600">Specs</a>
          <a href="#story" className="text-white font-medium hover:text-gray-600">Story</a>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
            Pre-Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-white w-7 h-7" />
            ) : (
              <FiMenu className="text-white w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <a href="#features" className="block text-black font-medium hover:text-gray-600">Features</a>
          <a href="#design" className="block text-black font-medium hover:text-gray-600">Design</a>
          <a href="#specs" className="block text-black font-medium hover:text-gray-600">Specs</a>
          <a href="#story" className="block text-black font-medium hover:text-gray-600">Story</a>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
            Pre-Order Now
          </button>
        </div>
      </div>

      {/* Background Overlay with Blur */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
