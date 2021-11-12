import React from "react";
import Food from "../food"
import "./foods.css"
const Foods = ({foods, kind, info}) => {
  const chosenFood = foods.filter(food => food.foodKindId === kind)
  .map(food => (
    <Food food={food} kind={kind} info={info}/>
  ));
  return (
  <div className="foodsuu">
    {chosenFood}
  </div>
  )
};

export default Foods;