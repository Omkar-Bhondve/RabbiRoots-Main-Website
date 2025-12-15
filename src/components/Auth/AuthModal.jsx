import React from "react";
import PhoneLogin from "./PhoneLogin";

export default function AuthModal() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8">
      <div className="w-full max-w-md">
        <PhoneLogin />
      </div>
    </div>
  );
}
