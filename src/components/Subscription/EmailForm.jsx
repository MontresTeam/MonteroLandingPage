"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Image from "next/image";
import giftBanner from "../../../public/images/features/SubscriptionBanner.jpg"; // replace with your image

// ✅ Responsive Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%", // Changed from 100% to 90% for mobile
    maxWidth: "720px",
    maxHeight: "90vh",
    padding: 0,
    border: "none",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
    padding: "16px", // Added padding for mobile safety
  },
};

// Responsive styles for different screen sizes
const responsiveStyles = {
  mobile: {
    content: {
      width: "95%",
      maxWidth: "400px",
      margin: "0 10px",
    }
  },
  tablet: {
    content: {
      width: "90%",
      maxWidth: "600px",
    }
  }
};

export default function EmailForm({ isOpen, onRequestClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Update modal styles based on window size
  const [windowWidth, setWindowWidth] = useState(0);
  React.useEffect(() => {
    // Only run in browser environment
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Apply responsive styles
  const getResponsiveStyle = () => {
    if (windowWidth < 768) {
      return {
        ...customStyles,
        content: { ...customStyles.content, ...responsiveStyles.mobile.content }
      };
    } else if (windowWidth < 1024) {
      return {
        ...customStyles,
        content: { ...customStyles.content, ...responsiveStyles.tablet.content }
      };
    }
    return customStyles;
  };

  const emailIsValid = (e) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase().trim());

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setMessage(null);

    if (!name || !email || !emailIsValid(email)) {
      setMessage({ type: "error", text: "Please fill all fields correctly." });
      return;
    }

    if (!agree) {
      setMessage({ type: "error", text: "You must agree to proceed." });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/subscribe", {
        name,
        email: email.trim(),
        agree,
      });

      if (res?.data?.success) {
        setMessage({
          type: "success",
          text: res.data.message || "Subscribed successfully!",
        });
        setName("");
        setEmail("");
        setAgree(false);
      } else {
        setMessage({
          type: "error",
          text: res?.data?.error || "Subscription failed.",
        });
      }
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Network error." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={getResponsiveStyle()}
      contentLabel="Subscribe Form"
      ariaHideApp={false}
      className="fixed overflow-auto"
    >
      <div className="w-full bg-white flex flex-col md:flex-row">
        {/* Left Banner (Image) - Hidden on mobile, visible on tablet and up */}
        <div className="hidden md:flex md:w-2/5 bg-gray-100 items-center justify-center p-4">
          <Image
            src={giftBanner}
            alt="Subscribe Gift"
            className="w-full h-auto max-h-64 object-contain"
            priority
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-3/5 p-4 sm:p-6 flex flex-col justify-center relative">
          {/* Close button */}
          <button
            onClick={onRequestClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl p-1"
            aria-label="Close"
          >
            ✕
          </button>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Be the first to know when our Kickstarter launches
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">Coming soon</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
              required
            />

            <label className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              <span>I agree to receive marketing material</span>
            </label>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 sm:py-3 rounded-md shadow transition disabled:opacity-60 text-base sm:text-lg"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>

            {/* Feedback */}
            {message && (
              <div
                className={`text-sm ${
                  message.type === "success" ? "text-green-600" : "text-red-600"
                } py-2`}
              >
                {message.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </Modal>
  );
}