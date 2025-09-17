"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Image from "next/image";
import giftBanner from "../../../public/images/features/SubscriptionBanner.jpg";

// ✅ Modal Base Styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "95%",
    maxWidth: "700px",
    padding: 0,
    border: "none",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
    padding: "12px",
  },
};

export default function SubscriptionForm({ isOpen, onRequestClose }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  // ✅ Email validation
  const emailIsValid = (e) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase().trim());

  // ✅ Handle Submit
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setMessage(null);

    if (!email || !emailIsValid(email)) {
      setMessage({ type: "error", text: "Enter a valid email address." });
      return;
    }

    if (!agree) {
      setMessage({ type: "error", text: "Please agree to marketing consent." });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/subscribe", {
        firstName,
        email: email.trim(),
        agree,
      });

      if (res?.data?.success) {
        setSubscribed(true);
        setFirstName("");
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
      style={customStyles}
      contentLabel="Subscribe Form"
      ariaHideApp={false}
    >
      <div className="w-full bg-white flex flex-col md:flex-row">
        {/* ✅ Left Side Image */}
        <div className="hidden md:flex md:w-2/5 bg-gray-100 items-center justify-center p-4">
          <Image
            src={giftBanner}
            alt="Montero Watch Subscription"
            className="w-full h-auto object-contain rounded-lg"
            priority
          />
        </div>

        {/* ✅ Right Side Content */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-center relative">
          {/* Close Button */}
          <button
            onClick={onRequestClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl p-1"
            aria-label="Close"
          >
            ✕
          </button>

          {!subscribed ? (
            <>
              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Be the First to Know
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Subscribe for early access to the{" "}
                <span className="font-semibold">Montero Watch Kickstarter</span>{" "}
                launch and exclusive offers.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
                  required
                />

                <label className="flex items-start gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  />
                  <span>I agree to receive updates and marketing material.</span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-md shadow transition disabled:opacity-60 text-base"
                >
                  {loading ? "Subscribing..." : "Subscribe Now"}
                </button>

                {/* Error Message */}
                {message && (
                  <div
                    className={`text-sm mt-2 ${
                      message.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {message.text}
                  </div>
                )}
              </form>
            </>
          ) : (
            // ✅ Success State
            <div className="text-center flex flex-col items-center justify-center py-10">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 flex items-center justify-center rounded-full mb-4 text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Subscription Confirmed 🎉
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Thank you for subscribing!  
                You’ll be the first to know when{" "}
                <span className="font-semibold">Montero Watch</span> launches.
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
