import React from "react";
import ProductCard from "./ProductCard"; // Ensure this path is correct

const ProductGrid = () => {
  const products = [
    {
      image: "https://example.com/path-to-your-image.jpg",
      brand: "Apple",
      itemType: "AirPods Pro",
      originalPrice: 249.0,
      discountedPrice: 199.0,
      rating: 4.5,
      reviewCount: 2345,
    },
    {
      image: "https://example.com/path-to-your-image.jpg",
      brand: "Samsung",
      itemType: "Galaxy Buds Pro",
      originalPrice: 199.99,
      discountedPrice: 169.99,
      rating: 4.3,
      reviewCount: 1876,
    },
    {
      image: "https://example.com/path-to-your-image.jpg",
      brand: "Sony",
      itemType: "WF-1000XM4",
      originalPrice: 279.99,
      discountedPrice: 249.99,
      rating: 4.7,
      reviewCount: 1543,
    },
    // Add more product objects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => {
          // Ensure discountedPrice is always defined
          const safeProduct = {
            ...product,
            discountedPrice:
              product.discountedPrice !== undefined
                ? product.discountedPrice
                : product.originalPrice,
          };

          return <ProductCard key={index} {...safeProduct} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
