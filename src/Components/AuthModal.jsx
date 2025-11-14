import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/AuthSlice";

export default function AuthModal({ onClose }) {
  const [tab, setTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signData, setSignData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // UX state
  const [showPwdLogin, setShowPwdLogin] = useState(false);
  const [showPwdSign, setShowPwdSign] = useState(false);
  const [showConfirmSign, setShowConfirmSign] = useState(false);
  const dispatch = useDispatch();

  const validateLogin = () => {
    const e = {};
    if (!loginData.email) e.email = "Email is required";
    if (!loginData.password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateSign = () => {
    const e = {};
    if (!signData.name) e.name = "Name is required";
    if (!signData.email) e.email = "Email is required";
    if (!signData.password) e.password = "Password is required";
    if (signData.password !== signData.confirm)
      e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submitLogin = (ev) => {
    ev.preventDefault();
    if (!validateLogin()) return;
    const userObj = {
      email: loginData.email,
      name: loginData.email ? loginData.email.split("@")[0] : "User",
    };
    dispatch(login(userObj));
    setMessage("Logged in successfully");
    setTimeout(() => {
      setMessage("");
      onClose();
    }, 900);
  };

  const submitSignup = (ev) => {
    ev.preventDefault();
    if (!validateSign()) return;
    const userObj = { email: signData.email, name: signData.name };
    dispatch(login(userObj));
    setMessage("Account created successfully");
    setTimeout(() => {
      setMessage("");
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-auto overflow-hidden">
        <div className="md:flex">
          {/* Left: Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-800">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {tab === "login"
                    ? "Sign in to continue to RabbiRoots"
                    : "Fill the form to create a new account"}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-gray-400 hover:text-gray-600 rounded-full p-2 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-full w-max mb-5">
              <button
                onClick={() => {
                  setTab("login");
                  setErrors({});
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  tab === "login"
                    ? "bg-white shadow text-gray-800"
                    : "text-gray-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setTab("signup");
                  setErrors({});
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  tab === "signup"
                    ? "bg-white shadow text-gray-800"
                    : "text-gray-600"
                }`}
              >
                Sign up
              </button>
            </div>

            {message && (
              <div className="mb-3 p-2 bg-green-50 text-green-700 rounded">
                {message}
              </div>
            )}

            {tab === "login" ? (
              <form onSubmit={submitLogin} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                    placeholder="you@example.com"
                    aria-label="Email"
                  />
                  {errors.email && (
                    <div className="text-xs text-red-600 mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPwdLogin ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                      placeholder="Enter your password"
                      aria-label="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwdLogin((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                      aria-label="Toggle password visibility"
                    >
                      {showPwdLogin ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="text-xs text-red-600 mt-1">
                      {errors.password}
                    </div>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2 rounded-lg font-medium hover:opacity-95 transition cursor-pointer">
                  Login
                </button>

                <div className="flex items-center gap-3">
                  <hr className="flex-1" />
                  <span className="text-xs text-gray-400">
                    or continue with
                  </span>
                  <hr className="flex-1" />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 border rounded-lg py-2 text-sm hover:shadow-sm transition cursor-pointer"
                  >
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex-1 border rounded-lg py-2 text-sm hover:shadow-sm transition cursor-pointer"
                  >
                    Apple
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={submitSignup} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={signData.name}
                    onChange={(e) =>
                      setSignData({ ...signData, name: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <div className="text-xs text-red-600 mt-1">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={signData.email}
                    onChange={(e) =>
                      setSignData({ ...signData, email: e.target.value })
                    }
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <div className="text-xs text-red-600 mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPwdSign ? "text" : "password"}
                      value={signData.password}
                      onChange={(e) =>
                        setSignData({ ...signData, password: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwdSign((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      {showPwdSign ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="text-xs text-red-600 mt-1">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmSign ? "text" : "password"}
                      value={signData.confirm}
                      onChange={(e) =>
                        setSignData({ ...signData, confirm: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmSign((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                    >
                      {showConfirmSign ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.confirm && (
                    <div className="text-xs text-red-600 mt-1">
                      {errors.confirm}
                    </div>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-2 rounded-lg font-medium hover:opacity-95 transition cursor-pointer">
                  Create account
                </button>
              </form>
            )}

            <div className="mt-4 text-sm text-gray-600">
              {tab === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setTab("signup");
                      setErrors({});
                    }}
                    className="text-green-600 font-semibold cursor-pointer"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setTab("login");
                      setErrors({});
                    }}
                    className="text-green-600 font-semibold cursor-pointer"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right: Benefits panel with logo */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-green-50 via-emerald-50 to-white p-8 flex-col justify-between">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[100%] h-auto rounded-2xl"
              />
            </div>

            {/* Benefits */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Why create an account?
              </h4>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span>Faster checkout & saved addresses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span>Track orders and view history</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span>Personalized offers & coupons</span>
                </li>
              </ul>
            </div>

            {/* Security badge */}
            <div className="mt-8 bg-white p-4 rounded-xl shadow-sm border border-green-100">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600">🔒</span>
                <h5 className="font-semibold text-gray-800">
                  Secure & Trusted
                </h5>
              </div>
              <p className="text-xs text-gray-600">
                We protect your data and ensure safe payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
