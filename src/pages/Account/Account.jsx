import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { PiGiftBold } from "react-icons/pi";
import { FiPackage } from "react-icons/fi";
import { FaRegAddressCard } from "react-icons/fa";


import { logout } from "../../features/AuthSlice.js";
import Addresses from "./Addresses";
import Orders from "./Orders";
import GiftCards from "./GiftCards";
import Privacy from "./Privacy";
import { useLocation } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();

  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const section = params.get("section");
      if (section) setActiveSection(section);
    } catch (e) {
    }
  }, [location.search]);

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logout());
      navigate("/");
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "addresses":
        return <Addresses />;
      case "orders":
        return <Orders />;
      case "giftcards":
        return <GiftCards />;
      case "privacy":
        return <Privacy />;
      default:
        return <Orders />;
    }
  };

  return (
    <div className="py-5 px-4 lg:px-20 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-55 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-6">
              <ul className="space-y-4">
                <div className="mb-6 px-10 py-3 underline text-center">
                  <strong>8806832303</strong>
                </div>
                <li>
                  <button
                    onClick={() => handleMenuClick("addresses")}
                    className={`flex gap-1.5 text-sm w-full text-left px-4 py-3 rounded-md transition-colors duration-200 font-medium cursor-pointer ${
                      activeSection === "addresses"
                        ? "bg-orange-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-600"
                    }`}
                  >
                    <FaRegAddressCard size={22} className="text-gray-600" />
                    <span className="text-xl"></span>
                    My Addresses
                  </button>
                </li>
                {/* <hr /> */}
                <li>
                  <button
                    onClick={() => handleMenuClick("orders")}
                    className={`flex gap-1.5 text-sm w-full text-left px-4 py-3 rounded-md transition-colors duration-200 font-medium cursor-pointer ${
                      activeSection === "orders"
                        ? "bg-orange-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-600"
                    }`}
                  >
                    <span className="text-xl">
                      <FiPackage size={22} className="text-gray-600" />
                    </span>
                    My Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMenuClick("giftcards")}
                    className={`flex gap-1.5 text-sm w-full text-left px-4 py-3 rounded-md transition-colors duration-200 font-medium cursor-pointer ${
                      activeSection === "giftcards"
                        ? "bg-orange-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-600"
                    }`}
                  >
                    <span className="text-xl">
                      <PiGiftBold size={22} className="text-gray-600" />
                    </span>
                    E-Gift Cards
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMenuClick("privacy")}
                    className={`flex gap-1.5 text-sm w-full text-left px-4 py-3 rounded-md transition-colors duration-200 font-medium cursor-pointer ${
                      activeSection === "privacy"
                        ? "bg-orange-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-600"
                    }`}
                  >
                    <span className="text-xl">
                      <FiShield size={22} className="text-gray-600" />
                    </span>
                    Account privacy
                  </button>
                </li>
                <li className="border-t pt-4 mt-4">
                  <button
                    onClick={handleLogout}
                    className="flex gap-1.5 text-sm w-full text-left px-4 py-3 hover:bg-orange-600 rounded-md transition-colors duration-200 font-medium cursor-pointer"
                  >
                    <span className="text-xl">
                      <FiLogOut size={22} />
                    </span>
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Account;
