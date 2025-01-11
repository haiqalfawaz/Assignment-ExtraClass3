import React from "react";
import useFood from "./useFood";
import Link from "next/link";

// import icons
import { SlLike } from "react-icons/sl";
import { IoIosStarOutline } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import Authorization from "@/components/layout/Authorization";

const FoodListDetail = () => {
  const { food, handleRedirect } = useFood();

  return (
    <Authorization>
      <div
        className="min-h-screen relative bg-cover"
        style={{ backgroundImage: 'url("/FoodListDetailImage.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-6 min-h-screen gap-4">
          <div className="max-w-3xl w-full bg-[#6A1E55] bg-opacity-80 rounded-lg gap-4 shadow-xl p-8 flex flex-col justify-center items-center">
            <div>
              {food.imageUrl ? (
                <img
                  src={food.imageUrl}
                  className="rounded-xl w-[600px] h-[400px]"
                  alt={food.name}
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold text-white text-center mb-3">
                {food.name}
              </h1>
              <p className="text-lg text-white text-center mb-3">
                "{food.description}"
              </p>
              <div>
                <p className="text-lg text-white text-center mb-3">
                  Ingredients
                </p>
                <ul>
                  {food.ingredients.map((ingredient, index) => (
                    <li key={index} className="list-disc">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg text-white text-center mb-3">
                {food.price}
              </p>
              <p className="text-lg text-white text-center mb-3">
                {food.priceDiscount}
              </p>
              <div className="flex gap-4 justify-center items-center text-white mb-3 ">
                <p className="flex gap-2 items-center">
                  <IoIosStarOutline />
                  {food.rating}
                </p>
              </div>
              <div className="flex gap-4 justify-center items-center text-white ">
                <p className="flex gap-2 items-center">
                  <SlLike />
                  {food.totalLikes}
                </p>
              </div>
            </div>
          </div>
          <Link href="/food">
            <button className="text-4xl text-white border-2 p-2 border-black rounded-lg bg-[#6A1E55] hover:scale-110 transition-all duration-300">
              <IoChevronBack />
            </button>
          </Link>
        </div>
      </div>
    </Authorization>
  );
};

export default FoodListDetail;
