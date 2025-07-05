import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div
      className="
        grid 
        grid-cols-2  /* 2 columnas en pantallas pequeñas */
        sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]  /* flexible desde sm (≥640px) */
        gap-4 
        justify-center 
        max-w-screen-xl 
        mx-auto
      "
    >
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
