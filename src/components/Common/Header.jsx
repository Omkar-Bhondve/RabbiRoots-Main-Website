import React from "react";
import Logo from "../../assets/logo.png";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Search from "../UI/Search";
import Location from "../UI/Location";

import { useState } from "react";
import AuthModal from "../Auth/AuthModal";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/AuthSlice.js";

function Header({ toggleClone }) {
  const [showAuth, setShowAuth] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloneToggle = () => {
    toggleClone();
  };

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

  const openAccountMenu = () => setShowAccountMenu((s) => !s);
  const closeAccountMenu = () => setShowAccountMenu(false);

  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );

  const totalPrice = useSelector((state) =>
    state.cart.items.reduce((total, item) => {
      const priceString = String(item.price); // Ensure it's a string
      const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
      return total + price * item.quantity;
    }, 0),
  );

  const formattedTotalPrice = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "USD",
  });

  const user = useSelector((state) => state.auth.user);

  return (
    <div className="w-full py-2 px-4 flex items-center justify-between fixed top-0 left-0 bg-white z-50 shadow-sm">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo"
          className="w-[100px] cursor-pointer max-md:w-[50px]"
        />
      </Link>
      <Location />

      <Search />

      <div className="flex items-center gap-18 max-sm:gap-4">
        {!user ? (
          <button
            onClick={openAuth}
            className="text-xl cursor-pointer max-md:text-sm"
          >
            Login
          </button>
        ) : (
          <div className="relative">
            <button
              onClick={openAccountMenu}
              className="text-xl cursor-pointer max-md:text-sm flex items-center gap-2"
            >
              <span className="hidden md:inline">Account</span>
              <span className="md:hidden">{user?.name || "Account"}</span>
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {showAccountMenu && (
              <div className="absolute right-[-1] mt-2 w-32 text-sm bg-white rounded-md shadow-lg z-90">
                <button
                  onClick={() => {
                    navigate("/account?section=home");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Account
                </button>
                <button
                  onClick={() => {
                    navigate("/account?section=orders");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Orders
                </button>
                <button
                  onClick={() => {
                    navigate("/account?section=giftcards");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Gift Cards
                </button>
                <button
                  onClick={() => {
                    navigate("/account?section=addresses");
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Address
                </button>
                <div className="border-t" />
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to logout?")) {
                      dispatch(logout());
                      navigate("/");
                    }
                    closeAccountMenu();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
        <button
          onClick={handleCloneToggle}
          className="bg-green-600 py-5 px-7 rounded-xl text-sm font-medium  cursor-pointer text-white max-md:py-3 max-md:px-4 max-md:rounded-md max-sm:py-4 max-sm:px-2 max-sm:text-[12px]"
        >
          <i className="ri-shopping-cart-2-line"></i> My Cart ({totalItems}){" "}
          {formattedTotalPrice}
        </button>
      </div>
      {showAuth && <AuthModal onClose={closeAuth} />}
    </div>
  );
}

export default Header;
