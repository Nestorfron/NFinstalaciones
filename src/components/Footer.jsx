import React from "react";

function Footer() {
  return (
    <footer className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text text-sm py-6 px-4 mt-12 border-t border-light-highlight dark:border-dark-highlight">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} NF Instalaciones. Todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          <a href="mailto:contacto@nf.com.uy" className="hover:text-light-accent dark:hover:text-dark-accent">
            contacto@nf.com.uy
          </a>
          <span>|</span>
          <a href="tel:+59899999999" className="hover:text-light-accent dark:hover:text-dark-accent">
            +598 99 999 999
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
