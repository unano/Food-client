import React, { useState, useEffect, createContext } from "react";
import { getFoods, getFoodKinds } from "../api/api";

export const FoodContext = createContext(null)

const FoodContextProvider = props => {
  const [foods, setFoods] = useState([]);
  const [foodKinds, setFoodKinds] = useState([]);
  const [chosenFoods, setChosenFoods] = useState([]);
  const [money, setMoney] = useState([]);
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
        foodKinds:foodKinds,
        setChosenFoods: setChosenFoods,
        chosenFoods:chosenFoods,
        money:money,
        setMoney:setMoney
      }}
    >
      {props.children}
    </FoodContext.Provider>
  )
}

export default FoodContextProvider;
