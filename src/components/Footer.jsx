import React from "react";

function Footer() {
  return (
    <footer className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text text-sm py-6 px-4 mt-12 border-t border-light-highlight dark:border-dark-highlight">
      <div className="max-w-screen-xl mx-auto">
        <div>
          © {new Date().getFullYear()} NF Instalaciones. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
