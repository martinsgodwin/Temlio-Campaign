'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RecoverPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recovery email submitted:", email);
    // Handle password recovery logic here
    router.push('/signin/otp');
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Form Section - Left Side */}
      <div className="w-full lg:w-2/5 flex items-center justify-center py-12 px-4 lg:px-8 bg-white">
        <div className="w-full max-w-sm mx-auto">
          
          {/* Form Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Poppins" }}>
                Recover password
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Blanditiis missae nisl mi voluptat adipiscing proin nulla quis.
              </p>
            </div>

            {/* Recovery Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 text-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200"
              >
                Proceed
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-600">
              Remember your password?{" "}
              <button 
                className="text-blue-600 hover:underline font-medium"
                onClick={() => router.push('/signin')}
              >
                Log In
              </button>
            </div>
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