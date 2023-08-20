import React from "react";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  productName: string;
  description: string;
  url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  productName,
  description,
  url,
}) => {
  return (
    <div className="rounded-md shadow-md w-full overflow-hidden my-4 bg-gray-100 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Image src={url} alt={productName} width={500} height={500} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h3 className="font-bold text-xl mb-4">{productName}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
