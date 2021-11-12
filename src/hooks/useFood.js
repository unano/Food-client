import { useEffect, useState } from "react";
import { getFood } from "../api/api";

const useFood = foodkind => {
  const [food, setFood] = useState(null);
  useEffect(() => {
    getFood(foodkind).then(food => {
      setFood(food);
    });
  }, [foodkind]);
  return [food, setFood];
};

export default useFood;