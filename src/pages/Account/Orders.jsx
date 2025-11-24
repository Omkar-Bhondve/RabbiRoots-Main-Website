import React from 'react'

function Orders() {
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
        d="M3 3h18M3 7h18M5 7l1.2 12.01c.1 1.02.91 1.79 1.94 1.79h7.72c1.03 0 1.84-.77 1.94-1.79L19 7M10 11v6M14 11v6"
      />
    </svg>
  </div>

  <h2 className="text-xl font-semibold text-gray-700 mb-2">
    No Orders Yet
  </h2>

  <p className="text-gray-500 text-sm mb-4 text-center">
    Looks empty here… Start shopping and place your first order.
  </p>

  <button className="px-5 py-2 bg-black text-white rounded-xl text-sm hover:opacity-80 transition">
    Browse Products
  </button>
</div>

  )
}

export default Orders