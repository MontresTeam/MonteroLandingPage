import React from "react";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-80 min-h-60 bg-white rounded-3xl m-10 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl z-10"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Checkmark Icon */}
        <div className="bg-green-500 absolute w-24 h-24 rounded-full -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white text-4xl">
          <svg 
            className="w-12 h-12" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        {/* Bottom border */}
        <div className="bg-green-500 absolute w-72 h-5 rounded-b-3xl bottom-[-20px] left-1/2 transform -translate-x-1/2"></div>

        {/* Content */}
        <div className="absolute w-full text-center bottom-8">
          <p className="text-gray-500 text-lg">Subscription</p>
          <p className="text-black text-2xl font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;