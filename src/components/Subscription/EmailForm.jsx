"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Image from "next/image";
import giftBanner from "../../../public/images/features/SubscriptionBanner.jpg"; // replace with your image

// ✅ Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
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
  },
};

export default function EmailForm({ isOpen, onRequestClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

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
      style={customStyles}
      contentLabel="Subscribe Form"
      ariaHideApp={false}
    >
      <div className="w-full bg-white grid grid-cols-1 md:grid-cols-2">
        {/* Left Banner (Image) */}
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <Image
            src={giftBanner}
            alt="Subscribe Gift"
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="p-6 sm:p-8 flex flex-col justify-center relative">
          {/* Close button */}
          <button
            onClick={onRequestClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            ✕
          </button>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Be the first to know when our Kickstarter launches
          </h3>
          <p className="text-lg text-gray-600 mb-6">Coming soon</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4"
              />
              <span>I agree to receive marketing material</span>
            </label>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white  font-semibold px-6 py-3 rounded-md shadow transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>

            {/* Feedback */}
            {message && (
              <div
                className={`text-sm ${
                  message.type === "success" ? "text-green-600" : "text-red-600"
                }`}
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
