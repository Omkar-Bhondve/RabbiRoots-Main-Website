import React, { useEffect, useRef, useState } from "react";

function Location() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Mumbai, 400001");
  const [input, setInput] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSave = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setCity(trimmed);
    setInput("");
    setOpen(false);
  };

  const handleDetect = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported in this browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCity(`Lat:${latitude.toFixed(3)} Lon:${longitude.toFixed(3)}`);
        setOpen(false);
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };

  const popular = [
    "Mumbai, 400001",
    "Pune, 411001",
    "Delhi, 110001",
    "Bengaluru, 560001",
  ];

  return (
    <div className="relative" ref={ref}>
      <div className="flex items-center gap-4">
        <div
          className="cursor-pointer group"
          onClick={() => setOpen((o) => !o)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpen((o) => !o)}
        >
          <p className="text-xs text-gray-500">Delivery in</p>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-800 group-hover:text-green-600">
              {city}
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

      {open && (
        <div
          className="absolute mt-5 right-0 w-72 bg-white p-5 z-20 
rounded-[16px] shadow-[0_6px_20px_rgba(0,0,0,0.15)] border border-gray-100 
animate-softPop"
        >
          <button
            onClick={handleDetect}
            className="w-full text-sm text-left px-4 py-3 rounded-[10px] 
    bg-gray-100 hover:bg-gray-200 transition font-medium"
          >
            Detect my location
          </button>

          <div className="mt-5">
            <label className="text-xs font-semibold text-gray-600">
              Add city
            </label>
            <div className="flex items-center gap-3 mt-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter city name"
                className="flex-1 border border-gray-300 rounded-[10px] px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 
                rounded-[10px] text-sm font-medium"
              >
                Save
              </button>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold text-gray-600">
              Popular cities
            </p>
            <ul className="mt-2 space-y-1">
              {popular.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => {
                      setCity(p);
                      setOpen(false);
                    }}
                    className="text-sm w-full text-left px-4 py-2 rounded-[14px] 
            hover:bg-gray-100 transition"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Location;
