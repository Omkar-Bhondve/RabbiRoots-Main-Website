import React from 'react'

function Privacy() {
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
        d="M12 12a3 3 0 100-6 3 3 0 000 6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 20.25a7.5 7.5 0 1115 0v.75H4.5v-.75z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9.75l1.5-1.5m0 0l1.5-1.5m-1.5 1.5l-1.5-1.5m1.5 1.5l1.5 1.5"
      />
    </svg>
  </div>

  <h2 className="text-xl font-semibold text-gray-700 mb-2">
    No Privacy Settings Found
  </h2>

  <p className="text-gray-500 text-sm mb-4 text-center">
    Your account privacy options aren’t set yet. Update your preferences for a safer experience.
  </p>

  <button className="px-5 py-2 bg-black text-white rounded-xl text-sm hover:opacity-80 transition">
    Manage Privacy
  </button>
</div>

  )
}

export default Privacy