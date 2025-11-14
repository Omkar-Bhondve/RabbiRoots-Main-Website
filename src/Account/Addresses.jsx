import React from 'react'

function Addresses() {
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
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  </div>

  <h2 className="text-xl font-semibold text-gray-700 mb-2">
    No Address Added
  </h2>
  <p className="text-gray-500 text-sm mb-4 text-center">
    Add your delivery address to continue.
  </p>

  <button className="px-5 py-2 bg-black text-white rounded-xl text-sm hover:opacity-80 transition">
    Add New Address
  </button>
</div>

  )
}

export default Addresses