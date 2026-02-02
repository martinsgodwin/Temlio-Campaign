'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [activeTab, setActiveTab] = useState("signup");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
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
                Create an Account
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Blanditiis missae nisl mi voluptat adipiscing proin nulla quis.
              </p>
            </div>

            {/* Google Sign-In Button */}
            <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-5">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-500 font-medium">Or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Tabs for Sign In / Sign Up */}
            <div className="mb-6">
              <div className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg mb-6">
                <button
                  onClick={() => setActiveTab("signin")}
                  className={`text-xs font-medium py-2 px-3 rounded-md transition-all ${
                    activeTab === "signin"
                      ? "bg-white text-gray-900"
                      : "text-gray-600"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`text-xs font-medium py-2 px-3 rounded-md transition-all ${
                    activeTab === "signup"
                      ? "bg-white text-gray-900"
                      : "text-gray-600"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {activeTab === "signin" && (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 text-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200"
                  >
                    Sign In
                  </button>

                  <div className="text-center mt-4">
                    <button 
                      type="button"
                      className="text-blue-600 hover:underline font-medium text-sm"
                      onClick={() => router.push('/signin/recover-password')}
                    >
                      Forgot Password?
                    </button>
                  </div>
                </form>
              )}

              {activeTab === "signup" && (
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div>
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 text-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 text-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200"
                  >
                    Create Account
                  </button>
                </form>
              )}
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button className="text-blue-600 hover:underline font-medium"
              onClick={() => setActiveTab("signin")}
              >Log In</button>
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
