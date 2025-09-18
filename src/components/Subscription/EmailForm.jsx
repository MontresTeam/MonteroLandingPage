"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Image from "next/image";
import giftBanner from "../../../public/images/features/SubscriptionBanner.jpg";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";

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

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const emailIsValid = (e) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase().trim());

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post("https://api.monterowatch.com/api/subscribe", {
      email,
      firstName,
    });

    setResultMessage(res.data.message || "You've joined the Montero waitlist!");
    setShowSuccess(true);

    // reset fields
    setEmail("");
    setFirstName("");
    setAgree(false);

    // ✅ Close the subscription form modal immediately
    onRequestClose();

  } catch (err) {
    setResultMessage("Subscription failed. Try again.");
    setShowError(true);

    setEmail("");
    setFirstName("");

    // ✅ Close the subscription form modal on error too (optional)
    onRequestClose();

  } finally {
    setLoading(false);
  }
};

  return (
    <>
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
            </form>
          </div>
        </div>
      </Modal>

      {/* ✅ Success & Error Modals */}
      {showSuccess && (
        <SuccessModal
          message={resultMessage}
          onClose={() => setShowSuccess(false)}
        />
      )}
      {showError && (
        <ErrorModal
          message={resultMessage}
          onClose={() => setShowError(false)}
        />
      )}
    </>
  );
}
