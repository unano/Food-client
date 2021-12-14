import React from "react";
import "./orderedFood.css";

const OrderedFood = ({chosenFood}) => {
  return (
    <>
{chosenFood?
    <>
           <div className="orderedFood">
           <div className="orderedFoodName">{chosenFood.foodName}({chosenFood.foodSize})</div>
           <div className="orderedFoodAmount">${chosenFood.foodAmount * chosenFood.foodPrice}</div>
           <div className="orderedFoodAmount2">×{chosenFood.foodAmount}</div>
           <div className="orderedFoodAmount2">${chosenFood.foodPrice}</div>
           </div>
    </>:null}</>
    );
  };
  
  export default OrderedFood;
