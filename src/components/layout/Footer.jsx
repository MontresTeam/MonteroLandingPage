"use client";
import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import beachesImage from "../../../public/images/features/Group_13[1].png";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 pb-10 relative z-10" style={{margin:"10px"}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="mb-6">
              <Image
                src={logo}
                alt="Montero Logo"
                width={160}
                height={60}
                className="w-auto h-auto"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-xs">
              Precision crafted timepieces blending traditional watchmaking with
              contemporary design for the modern era.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-5 text-lg">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Twitter"
              >
                <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
              </a>
              <a 
                href="https://www.instagram.com/montero.watch/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
              >
                <FaInstagram className="hover:text-gray-400 cursor-pointer" />
              </a>
              <a 
                href="https://www.linkedin.com/company/montres-trading/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact us on Telegram"
              >
                <FaTelegram className="hover:text-gray-400 cursor-pointer" />
              </a>
              <a 
                href={`https://wa.me/97142671124`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
              >
                <FaWhatsapp className="hover:text-gray-400 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Collection */}
          <div>
            <h3 className="font-medium text-lg mb-4">Collection</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Automatic series</li>
              <li className="hover:text-white cursor-pointer">Chronograph</li>
              <li className="hover:text-white cursor-pointer">Diver's watches</li>
              <li className="hover:text-white cursor-pointer">Limited editions</li>
              <li className="hover:text-white cursor-pointer">Custom design</li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="font-medium text-lg mb-4">Customer Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Contact us</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Shipping policy</li>
              <li className="hover:text-white cursor-pointer">Return & Exchange</li>
              <li className="hover:text-white cursor-pointer">Warranty</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-white text-4xl mt-0.5" />
                <span>
                  Al Khor Street, Moza Plaza 1, Shop No. 5, Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-white text-lg" />
                <span>+971 42671124</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-white text-lg" />
                <span>sales@monterowatch.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Beach Illustration - Full Width */}
      <div className="relative w-full">
        <Image
          src={beachesImage}
          alt="Beach Illustration"
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-6 pb-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-xs mb-4 md:mb-0">
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Cookies Settings
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-xs text-center md:text-right">
            <p>© 2025 Montero Watches. All rights reserved.</p>
          </div>
        </div>

        {/* Crafted in Dubai - Bottom Right */}
        <p className="text-gray-400 text-[10px] mt-4 text-right">
          Crafted with precision in Dubai
        </p>
      </div>
    </footer>
  );
};

export default Footer;