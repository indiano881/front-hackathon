"use client"

import React, { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Match duration with animation duration

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-purple-700 z-50">
      <div className="w-40 h-40 bg-blue-500 rounded-full animate-splash"></div>
    </div>
  );
};

export default SplashScreen;

