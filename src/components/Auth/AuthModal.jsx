import React from "react";
import PhoneLogin from "./PhoneLogin";

export default function AuthModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] px-4 py-8"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <PhoneLogin onClose={onClose} />
      </div>
    </div>
  );
}
