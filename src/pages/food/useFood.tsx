import React, { useEffect, useState } from "react";
import { Food } from "./food.interface";
import { useRouter } from "next/router";
import { getFoodDetail, getFoods } from "@/services/food";

const useFood = () => {
  const [data, setData] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [food, setFood] = useState<Food>({
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    ingredients: [],
    price: null,
    priceDiscount: null,
    rating: 4.9,
    totalLikes: 5,
  });

  const router = useRouter();

  const getData = async () => {
    setIsLoading(true);
    const res = await getFoods();
    setData(res.data.data);
    setIsLoading(false);
  };

  const getDetail = async () => {
    setIsLoading(true);
    const res = await getFoodDetail(router.query.id as string);
    setFood(res.data.data);
    setIsLoading(false);
  };

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (router.query.id) getDetail();
  }, [router.query.id]);

  return {
    data,
    isLoading,
    handleRedirect,
    getDetail,
    food,
  };
};

export default useFood;
