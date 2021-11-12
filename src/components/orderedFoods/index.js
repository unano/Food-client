import React from "react";
import OrderedFood from "../orderedFood"
import "./orderedFoods.css"
const OrderedFoods = ({foodlist}) => {
  console.log(foodlist)
  const allOrderedFood = foodlist.map(chosenFood => (
    <OrderedFood chosenFood={chosenFood}/>
  ));
  return (
  <div className="c">
    {allOrderedFood}
  </div>
  )
};

export default OrderedFoods;
