import React from "react";

function ProductCard({ name, description, icon }) {
  return (
    <div className="bg-light-card dark:bg-dark-card border border-light-accent dark:border-dark-accent rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        
        <div className="flex justify-center items-center p-2">
          {icon}
          <h4 className="text-lg font-semibold text-light-accent dark:text-dark-accent mb-1 pl-2">{name}</h4>
        </div>
        <div className="p-4">
          <p className="text-sm text-light-text dark:text-dark-text">{description}</p>
        </div>
        
      </div>
  );
}

export default ProductCard;
