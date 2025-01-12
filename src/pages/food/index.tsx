import Authorization from "@/components/layout/Authorization";
import React from "react";
import useFood from "./useFood";
import { Food } from "./food.interface";
import Navbar from "@/components/Navbar";

const FoodList = () => {
  const { data, isLoading, handleRedirect } = useFood();
  return (
    <Authorization>
      <div
        className="min-h-screen relative bg-cover"
        style={{ backgroundImage: 'url("/FoodListImage.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-10 flex flex-col justify-center items-center">
          <Navbar />
          <div className="flex justify-center items-start">
            <h1 className="text-white text-4xl tracking-wider ">
              Allow us to present the collection of tastes we have thoughtfully
              curated for you!
            </h1>
          </div>
          <div className="grid grid-cols-5 gap-4 mt-10">
            {data &&
              data.map((item: Food) => (
                <div
                  key={`${item.name}-${item.id}`}
                  className="p-3 border border-black bg-[#A64D79] bg-opacity-30 text-center rounded-xl hover:scale-110 transition-all duration-300 text-white flex flex-col gap-2 text-xl tracking-wider"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-[200px] object-cover rounded-lg mb-3"
                  />
                  <div className="text-lg font-bold">{item.name}</div>
                  <button
                    className="border border-black rounded-lg bg-[#6A1E55] hover:bg-white hover:text-black text-base"
                    onClick={() => handleRedirect(`/food/${item.id}`)}
                  >
                    See Details!
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Authorization>
  );
};

export default FoodList;
