import React from "react";
import NavBar from "../phase-one/NavBar";
import ProductCard from "../phase-one/ProductCard";

const Main = () => {
  return (
    <>
      <NavBar />
      <ProductCard
        image="https://example.com/path-to-your-image.jpg"
        brand="Apple"
        itemType="AirPods Pro"
        originalPrice={249.0}
        discountedPrice={199.0}
      />
    </>
  );
};

export default Main;
