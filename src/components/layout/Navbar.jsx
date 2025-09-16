"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../public/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("features");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Features", href: "#features", key: "features" },
    { name: "Design", href: "#design", key: "design" },
    { name: "Specs", href: "#specs", key: "specs" },
    { name: "Story", href: "#story", key: "story" },
  ];

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 py-2 sm:py-3 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo - Responsive sizing */}
        <div className="flex-shrink-0 z-60">
          <Image
            src={logo}
            alt="Montero Logo"
            width={280}
            height={280}
            className="object-contain w-32 xs:w-36 sm:w-40 md:w-48 lg:w-52 h-auto"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {/* Tab Group */}
          <div className="flex items-center rounded-full p-1 bg-black/20 backdrop-blur-sm">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setActive(link.key)}
                className={`px-3 py-2 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  active === link.key
                    ? "bg-white text-black shadow-lg"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Pre-order button */}
          <button className="ml-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
            Pre-Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-60">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-white bg-black/20 hover:bg-white/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 z-50 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-black/95 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-24 px-6 flex flex-col h-full">
              <div className="space-y-4">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={() => {
                      setActive(link.key);
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      active === link.key
                        ? "bg-white text-black shadow-lg"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl text-base font-medium transition-colors duration-200 shadow-md">
                Pre-Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;