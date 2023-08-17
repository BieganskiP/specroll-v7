import React from "react";
import data from "@/staticData/productsData.json";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function page() {
  return (
    <div className="mx-auto px-4 container">
      <div className="flex flex-col">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productName={product.productName}
            description={product.description}
            url={product.url}
          />
        ))}
      </div>
    </div>
  );
}
