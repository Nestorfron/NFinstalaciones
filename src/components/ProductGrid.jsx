import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-center max-w-screen-xl mx-auto">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
}
