import React from 'react'

function Location() {
  return (
    <>
     <div className="flex items-center gap-4">
        <div className="cursor-pointer group">
          <p className="text-xs text-gray-500">Delivery in</p>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-800 group-hover:text-green-600">
              Mumbai, 400001
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location