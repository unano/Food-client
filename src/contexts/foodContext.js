import React, { useState, useEffect, createContext } from "react";
import { getFoods, getFoodKinds } from "../api/api";

export const FoodContext = createContext(null)

const FoodContextProvider = props => {
  const [foods, setFoods] = useState([]);
  const [foodKinds, setFoodKinds] = useState([]);
  useEffect(() => {
    getFoods().then(food => {
      setFoods(food);
    });
  }, [foods]);

  useEffect(() => {
    getFoodKinds().then(foodKind => {
      setFoodKinds(foodKind);
    });
  }, [foodKinds]);


  return (
    <FoodContext.Provider
      value={{
        foods:foods,
        foodKinds:foodKinds
      }}
    >
      {props.children}
    </FoodContext.Provider>
  )
}

export default FoodContextProvider;
