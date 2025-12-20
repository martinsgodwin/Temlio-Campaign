'use client';

import React, { useState, useRef, useEffect } from 'react';

const CreateAccountPage = () => {
  const [view, setView] = useState<'signup' | 'signin' | 'recover' | 'otp' | 'newpassword'>('signup');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer countdown for OTP
  useEffect(() => {
    if (view === 'otp' && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [view, timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleRecover = () => {
    console.log('Password recovery for:', formData.email);
    setTimer(59); // Reset timer
    setView('otp');
  };

  const handleOtpChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 4) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 5);
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }
    
    setOtp(newOtp);
    // Focus last filled input or next empty one
    const nextIndex = Math.min(pastedData.length, 4);
    otpRefs.current[nextIndex]?.focus();
  };

  const handleContinue = () => {
    console.log('OTP submitted:', otp.join(''));
    setView('newpassword');
  };

  const handleRetry = () => {
    setOtp(['', '', '', '', '']);
    setTimer(59);
    otpRefs.current[0]?.focus();
  };

  const handleCreateNewPassword = () => {
    console.log('New password created:', formData.newPassword);
  };

  // Format timer display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Create New Password View
  if (view === 'newpassword') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Create New Password</h2>
            </div>

            <div className="space-y-4">
              {/* New Password Field */}
              <div className="space-y-2">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter our email address"
                  className="w-full px-4 py-2.5 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm"
                />
              </div>

              {/* Confirm New Password Field */}
              <div className="space-y-2">
                <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">
                  Cofnrim New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Create New Password Button */}
              <button
                onClick={handleCreateNewPassword}
                className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm mt-4"
              >
                Create New Password
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              {/* Google Sign In Button */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8055 10.2292C19.8055 9.55166 19.7502 8.86806 19.6326 8.19861H10.2V12.0492H15.6014C15.3773 13.2911 14.6571 14.3898 13.6025 15.0879V17.5866H16.825C18.7174 15.8449 19.8055 13.2728 19.8055 10.2292Z" fill="#4285F4"/>
                  <path d="M10.2 20.0006C12.897 20.0006 15.1714 19.1151 16.8285 17.5865L13.606 15.0879C12.7096 15.6979 11.5521 16.0433 10.2034 16.0433C7.59474 16.0433 5.38272 14.2833 4.58904 11.917H1.26367V14.4927C2.96127 17.8695 6.41892 20.0006 10.2 20.0006Z" fill="#34A853"/>
                  <path d="M4.58565 11.9169C4.16601 10.675 4.16601 9.32941 4.58565 8.08749V5.51172H1.26367C-0.154473 8.33749 -0.154473 11.6669 1.26367 14.4927L4.58565 11.9169Z" fill="#FBBC04"/>
                  <path d="M10.2 3.95805C11.6246 3.93602 13.0009 4.47166 14.0356 5.45019L16.8906 2.60019C15.0781 0.902526 12.6815 -0.0316741 10.2 -0.000340782C6.41892 -0.000340782 2.96127 2.13074 1.26367 5.51168L4.58565 8.08745C5.37594 5.71476 7.59135 3.95805 10.2 3.95805Z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // OTP Verification View
  if (view === 'otp') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Enter OTP</h2>
              <p className="text-gray-500 mt-1 text-xs">
                Lorem ipsum dolor sit amet consectetur. Bibendum massa nisi mi volutpat adipiscing proin nulla quis.
              </p>
            </div>

            <div className="space-y-6">
              {/* OTP Input Fields */}
              <div className="flex gap-3 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    onPaste={handleOtpPaste}
                    className={`w-16 h-16 text-center text-2xl font-semibold border ${
                      index === 0 ? 'border-orange-400' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent`}
                  />
                ))}
              </div>

              {/* Timer and Retry */}
              <div className="text-center text-sm">
                <span className="text-gray-600">{formatTime(timer)}</span>
                <span className="text-gray-500 mx-1">Didn't get the code.</span>
                <button
                  onClick={handleRetry}
                  className="text-orange-500 hover:text-orange-600 font-semibold"
                >
                  Retry
                </button>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Password Recovery View
  if (view === 'recover') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recover Password</h2>
              <p className="text-gray-500 mt-1 text-xs">
                Lorem ipsum dolor sit amet consectetur. Bibendum massa nisi mi volutpat adipiscing proin nulla quis.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Address Field */}
              <div className="space-y-2">
                <label htmlFor="recover-email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="recover-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter our email address"
                  className="w-full px-4 py-2.5 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm"
                />
              </div>

              {/* Proceed Button */}
              <button
                onClick={handleRecover}
                className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm mt-4"
              >
                Proceed
              </button>

              {/* Back to Sign In Link */}
              <div className="text-center pt-2">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setView('signin'); }}
                  className="text-sm text-gray-600 hover:underline"
                >
                  Back to Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sign In / Sign Up Views
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      {/* Form Container */}
      <div className="max-w-sm w-full">
        <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-lg">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {view === 'signup' ? 'Create an Account' : 'Login to continue'}
            </h2>
            {view === 'signup' && (
              <p className="text-gray-500 mt-1 text-xs">
                Lorem ipsum dolor sit amet consectetur. Bibendum massa nisi mi volutpat adipiscing proin nulla quis.
              </p>
            )}
          </div>

          <div className="space-y-4">
            {/* Sign In / Sign Up Tabs */}
            {view === 'signup' && (
              <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                <button 
                  type="button" 
                  onClick={() => setView('signin')}
                  className="flex-1 py-2 px-4 bg-transparent text-gray-600 rounded-md transition-colors text-sm font-medium"
                >
                  Sign In
                </button>
                <button 
                  type="button" 
                  className="flex-1 py-2 px-4 bg-white text-gray-900 rounded-md shadow-sm transition-colors text-sm font-medium"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Sign In View - Google Button */}
            {view === 'signin' && (
              <>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8055 10.2292C19.8055 9.55166 19.7502 8.86806 19.6326 8.19861H10.2V12.0492H15.6014C15.3773 13.2911 14.6571 14.3898 13.6025 15.0879V17.5866H16.825C18.7174 15.8449 19.8055 13.2728 19.8055 10.2292Z" fill="#4285F4"/>
                    <path d="M10.2 20.0006C12.897 20.0006 15.1714 19.1151 16.8285 17.5865L13.606 15.0879C12.7096 15.6979 11.5521 16.0433 10.2034 16.0433C7.59474 16.0433 5.38272 14.2833 4.58904 11.917H1.26367V14.4927C2.96127 17.8695 6.41892 20.0006 10.2 20.0006Z" fill="#34A853"/>
                    <path d="M4.58565 11.9169C4.16601 10.675 4.16601 9.32941 4.58565 8.08749V5.51172H1.26367C-0.154473 8.33749 -0.154473 11.6669 1.26367 14.4927L4.58565 11.9169Z" fill="#FBBC04"/>
                    <path d="M10.2 3.95805C11.6246 3.93602 13.0009 4.47166 14.0356 5.45019L16.8906 2.60019C15.0781 0.902526 12.6815 -0.0316741 10.2 -0.000340782C6.41892 -0.000340782 2.96127 2.13074 1.26367 5.51168L4.58565 8.08745C5.37594 5.71476 7.59135 3.95805 10.2 3.95805Z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                {/* Login / Sign Up Tabs for Sign In View */}
                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                  <button 
                    type="button" 
                    className="flex-1 py-2 px-4 bg-white text-gray-900 rounded-md shadow-sm transition-colors text-sm font-medium"
                  >
                    Login
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setView('signup')}
                    className="flex-1 py-2 px-4 bg-transparent text-gray-600 rounded-md transition-colors text-sm font-medium"
                  >
                    Sign Up
                  </button>
                </div>
              </>
            )}

            {/* Full Name Field - Only for Sign Up */}
            {view === 'signup' && (
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 border border-orange-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm"
                />
              </div>
            )}

            {/* Email Address Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={view === 'signup' ? "Enter your email address" : "Enter our email address"}
                className={`w-full px-4 py-2.5 border ${view === 'signup' ? 'border-gray-300' : 'border-orange-400'} rounded-lg focus:outline-none focus:ring-2 focus:ring-${view === 'signup' ? 'blue' : 'orange'}-500 focus:border-transparent text-sm`}
              />
            </div>

            {/* Phone Number Field - Only for Sign Up */}
            {view === 'signup' && (
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            )}

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              {view === 'signin' && (
                <div className="text-right">
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setView('recover'); }}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    Forget Password?
                  </a>
                </div>
              )}
            </div>

            {/* Confirm Password Field - Only for Sign Up */}
            {view === 'signup' && (
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm mt-4"
            >
              {view === 'signup' ? 'Create Account' : 'Sign In'}
            </button>
          </div>

          {/* Footer Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {view === 'signup' ? (
                <>
                  Already have an account{' '}
                  <a href="#" onClick={(e) => { e.preventDefault(); setView('signin'); }} className="text-gray-900 hover:underline font-semibold">
                    Log In
                  </a>
                </>
              ) : (
                <>
                  Don't have an account{' '}
                  <a href="#" onClick={(e) => { e.preventDefault(); setView('signup'); }} className="text-gray-900 hover:underline font-semibold">
                    Sign Up
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;