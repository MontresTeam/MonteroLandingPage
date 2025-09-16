"use client";
import React, { useState, useEffect } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import beachesImage from "../../../public/images/features/Group_13[1].png";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <footer className="bg-black text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-8 md:pt-12 pb-6 md:pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Logo & About - Always visible */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
              <Image
                src={logo}
                alt="Montero Logo"
                width={isMobile ? 140 : 160}
                height={isMobile ? 50 : 60}
                className="w-auto h-auto"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-xs mx-auto md:mx-0 text-center md:text-left">
              Precision crafted timepieces blending traditional watchmaking with
              contemporary design for the modern era.
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-4 md:gap-5 text-lg">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Twitter"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <FaXTwitter className="hover:text-gray-400" />
              </a>
              <a 
                href="https://www.instagram.com/montero.watch/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <FaInstagram className="hover:text-gray-400" />
              </a>
              <a 
                href="https://www.linkedin.com/company/montres-trading/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <FaLinkedin className="hover:text-gray-400" />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact us on Telegram"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <FaTelegram className="hover:text-gray-400" />
              </a>
              <a 
                href={`https://wa.me/97142671124`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <FaWhatsapp className="hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Collection - Accordion on mobile */}
          <div className="border-t border-gray-800 pt-4 md:border-none md:pt-0">
            <button 
              className="flex items-center justify-between w-full md:pointer-events-none"
              onClick={() => toggleAccordion(0)}
              aria-expanded={openAccordion === 0}
              aria-controls="collection-content"
            >
              <h3 className="font-medium text-lg">Collection</h3>
              {isMobile && (
                <MdKeyboardArrowDown 
                  className={`transform transition-transform ${openAccordion === 0 ? 'rotate-180' : ''}`} 
                  size={24}
                />
              )}
            </button>
            <div 
              id="collection-content"
              className={`overflow-hidden transition-all duration-300 ${isMobile ? (openAccordion === 0 ? 'max-h-96 pt-4' : 'max-h-0') : 'max-h-96'}`}
            >
              <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Automatic series</li>
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Chronograph</li>
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Diver's watches</li>
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Limited editions</li>
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Custom design</li>
              </ul>
            </div>
          </div>

          {/* Customer Services - Accordion on mobile */}
          <div className="border-t border-gray-800 pt-4 md:border-none md:pt-0">
            <button 
              className="flex items-center justify-between w-full md:pointer-events-none"
              onClick={() => toggleAccordion(1)}
              aria-expanded={openAccordion === 1}
              aria-controls="services-content"
            >
              <h3 className="font-medium text-lg">Customer Services</h3>
              {isMobile && (
                <MdKeyboardArrowDown 
                  className={`transform transition-transform ${openAccordion === 1 ? 'rotate-180' : ''}`} 
                  size={24}
                />
              )}
            </button>
            <div 
              id="services-content"
              className={`overflow-hidden transition-all duration-300 ${isMobile ? (openAccordion === 1 ? 'max-h-96 pt-4' : 'max-h-0') : 'max-h-96'}`}
            >
              <ul className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Contact us</li>
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">FAQs</li>
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Shipping policy</li>
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Return & Exchange</li>
                <li className="py-2 md:py-0 hover:text-white cursor-pointer transition-colors">Warranty</li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Always visible on mobile */}
          <div className="border-t border-gray-800 pt-4 md:border-none md:pt-0">
            <h3 className="font-medium text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-white text-xl md:text-2xl mt-0.5 flex-shrink-0" />
                <span className="break-words">
                  Al Khor Street, Moza Plaza 1, Shop No. 5, Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-white text-lg md:text-xl flex-shrink-0" />
                <span>+971 42671124</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-white text-lg md:text-xl flex-shrink-0" />
                <span>sales@monterowatch.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Beach Illustration - Full Width */}
      <div className="relative w-full mt-6 md:mt-8">
        <Image
          src={beachesImage}
          alt="Beach Illustration"
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-4 md:pt-6 pb-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-4 md:pt-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-gray-400 text-xs mb-3 md:mb-0">
            <a href="#" className="hover:text-white transition-colors py-1">
              Terms of Use
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors py-1">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors py-1">
              Cookies Settings
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs text-center md:text-right mb-2 md:mb-0">
            <p>© 2025 Montero Watches. All rights reserved.</p>
          </div>
        </div>

        {/* Crafted in Dubai - Bottom Right */}
        <p className="text-gray-400 text-[10px] mt-2 md:mt-4 text-center md:text-right">
          Crafted with precision in Dubai
        </p>
      </div>
    </footer>
  );
};

export default Footer;