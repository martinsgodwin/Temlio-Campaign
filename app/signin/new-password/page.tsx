'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNewPasswordPage() {
  const router = useRouter();
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset submitted:", passwords);
    // Handle password reset logic here
    router.push('/signin');
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Form Section - Left Side */}
      <div className="w-full lg:w-2/5 flex items-center justify-center py-12 px-4 lg:px-8 bg-white">
        <div className="w-full max-w-sm mx-auto">
          
          {/* Form Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Poppins" }}>
                Create New Password
              </h2>
            </div>

            {/* Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="newPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  name="newPassword"
                  placeholder="Enter your password"
                  value={passwords.newPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/10 transition-all duration-200 text-black"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter your password"
                  value={passwords.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-100 bg-gray-50/50 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 mt-4"
              >
                Create New Password
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Hero Section - Right Side */}
      <div className="hidden lg:flex w-3/5 h-screen sticky top-0">
        <div className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: "linear-gradient(180deg, white 0%, white 35%, #0072BC 100%)" }}>
          {/* Logo */}
          <div className="absolute top-8 left-8 z-20">
            <img src="/temlio-logo.png" alt="Temlio Logo" className="h-6 w-auto" />
          </div>

          {/* Subtle animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 absolute -bottom-52 -left-32 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Poppins" }}>
              Temlio Campaign
            </h2>
            <p className="text-lg md:text-xl text-blue-50 font-light">
              Connecting you to your customers easily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}