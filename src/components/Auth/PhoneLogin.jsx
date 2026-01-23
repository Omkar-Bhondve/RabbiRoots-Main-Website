import { useState } from "react";
import OtpVerify from "./OtpVerify";

export default function PhoneLogin() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (value.length <= 10) {
      setPhone(value);
      setError("");
    }
  };

  const sendOTP = async () => {
    if (phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // await axios.post("http://localhost:5000/auth/send-otp", { phone });
      setOtpSent(true);
    } catch (err) {
      console.error(err);
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && phone.length === 10) {
      sendOTP();
    }
  };

  if (otpSent) {
    return <OtpVerify phone={phone} onBack={() => setOtpSent(false)} />;
  }

  return (
    <div className="w-full">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600">Enter your phone number to continue</p>
        </div>

        {/* Phone Input */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-500 font-medium">+91</span>
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="9876543210"
                value={phone}
                onChange={handlePhoneChange}
                onKeyPress={handleKeyPress}
                className={`w-full pl-16 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  error
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-gray-50"
                }`}
                disabled={loading}
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            )}
          </div>

          {/* Send OTP Button */}
          <button
            onClick={sendOTP}
            disabled={loading || phone.length !== 10}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
              loading || phone.length !== 10
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending OTP...
              </span>
            ) : (
              "Send OTP"
            )}
          </button>
        </div>

        {/* Info */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            By continuing, you agree to receive an OTP via SMS for verification
            purposes
          </p>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Secure login powered by OTP verification
      </p>
    </div>
  );
}
