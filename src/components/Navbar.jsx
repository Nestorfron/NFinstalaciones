import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-light-card dark:bg-dark-card shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <a href="#">
            <img src={logo} alt="NF Instalaciones" className="h-10 md:h-12" />
          </a>
        </div>

        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
