'use client';

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OTPVerificationPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP submitted:", otp.join(''));
    // Handle OTP verification logic here
    router.push('/signin/new-password');
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
                Enter OTP
              </h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Bibendum massa nisl mi volutpat adipiscing proin nulla quis.
              </p>
            </div>

            {/* OTP Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-12 h-12 text-center text-lg font-semibold border rounded-xl focus:outline-none transition-all duration-200 ${
                      digit 
                        ? "border-orange-500 ring-2 ring-orange-500/10 text-gray-500" 
                        : "border-gray-100 bg-gray-200 text-gray-500"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-end items-center gap-1 text-xs">
                <span className="text-gray-500 font-medium">{formatTime(timer)}</span>
                <span className="text-gray-400">Didn't get the code.</span>
                <button 
                  type="button" 
                  className="text-orange-500 hover:underline font-semibold"
                  onClick={() => setTimer(59)}
                >
                  Retry
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20"
              >
                Continue
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