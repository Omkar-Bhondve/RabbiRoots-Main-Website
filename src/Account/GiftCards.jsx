import React from 'react'

function GiftCards() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
  <div className="p-4 bg-white shadow-sm rounded-full mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.25h18M3 8.25A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25M3 8.25v7.5A2.25 2.25 0 005.25 18h13.5A2.25 2.25 0 0021 15.75v-7.5M14.25 6v12M9.75 6v12"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12a2.25 2.25 0 11-4.5 0A2.25 2.25 0 019 12zM19.5 12A2.25 2.25 0 1115 12a2.25 2.25 0 014.5 0z"
      />
    </svg>
  </div>

  <h2 className="text-xl font-semibold text-gray-700 mb-2">
    No E-Gift Cards
  </h2>

  <p className="text-gray-500 text-sm mb-4 text-center">
    You haven’t added any gift cards yet. Grab one and share the vibes.
  </p>

  <button className="px-5 py-2 bg-black text-white rounded-xl text-sm hover:opacity-80 transition">
    Buy Gift Card
  </button>
</div>

  )
}

export default GiftCards