"use client";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] 
      bg-opacity-80 backdrop-blur-[0.5rem] border
       border-gray-900 border-opacity-40
        shadow-2xl rounded-full flex items-center justify-center
        hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-800"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
