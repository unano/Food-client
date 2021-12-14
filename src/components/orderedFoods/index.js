import React from "react";
import OrderedFood from "../orderedFood"
import "./orderedFoods.css"
const OrderedFoods = ({foodlist}) => {
  const allOrderedFood = foodlist.map(chosenFood => (
    <OrderedFood chosenFood={chosenFood}/>
  ));
  return (
  <div className="orderedFoodBox">
    {allOrderedFood}
  </div>
  )
};

export default OrderedFoods;
