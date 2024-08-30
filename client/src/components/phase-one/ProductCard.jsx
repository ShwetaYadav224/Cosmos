import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Rating,
} from "@material-tailwind/react";

function ProductCard({
  image,
  brand,
  itemType,
  originalPrice,
  discountedPrice,
  rating,
  reviewCount,
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const discountPercentage = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100
  );

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };
  const handleImageError = () => {
    setImageError(true);
  };
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className="flex flex-col gap-6">
      <Card className="w-full max-w-[24rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader
          shadow={false}
          floated={false}
          className="h-48 sm:h-64 relative group"
        >
          {!imageError ? (
            <>
              <img
                src={image}
                alt={`${brand} ${itemType}`}
                className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Typography>Loading...</Typography>
                </div>
              )}
            </>
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <Typography>Image not available</Typography>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <IconButton
            size="sm"
            color={isWishlisted ? "red" : "gray"}
            variant="text"
            className="!absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
            onClick={toggleWishlist}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semibold"
              >
                {brand}
              </Typography>
            </div>
            <div className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-lg">
              -{discountPercentage}%
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium text-lg">
              {itemType}
            </Typography>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Rating value={rating} readonly />
              <Typography color="blue-gray" className="font-medium ml-2">
                ({reviewCount})
              </Typography>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-bold text-xl sm:text-2xl"
            >
              ${discountedPrice.toFixed(2)}
            </Typography>
            <Typography
              color="gray"
              className="font-normal line-through text-sm sm:text-lg"
            >
              ${originalPrice.toFixed(2)}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={true}
            fullWidth={true}
            className="bg-blue-500 text-white shadow-md hover:shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 mr-2"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductCard;
