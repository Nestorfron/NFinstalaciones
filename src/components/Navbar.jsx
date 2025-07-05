import React from "react";
import logo from "../assets/logo.png"; // ajusta la ruta según tu estructura

function Navbar() {
  return (
    <nav className="bg-light-card dark:bg-dark-card shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <img src={logo} alt="NF Instalaciones" className="h-8 md:h-10" />
        </div>
        <ul className="hidden md:flex gap-6 text-sm text-light-text dark:text-dark-text font-medium">
          <li>
            <a href="#contacto" className="hover:text-light-accent dark:hover:text-dark-accent">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
