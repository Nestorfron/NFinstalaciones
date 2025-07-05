import React from "react";

function ProductCard({ name, description, icon }) {
  return (
    <div className="relative bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text shadow-glass rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300 w-24 h-24 flex items-center justify-center cursor-pointer group mx-auto my-5">
      {/* Icono */}
      <div className="text-5xl select-none">{icon}</div>

      {/* Nombre que aparece solo al hacer hover en el padre */}
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none select-none">
        <span className="font-semibold text-sm">{name}</span>
      </div>
    </div>
  );
}

export default ProductCard;
