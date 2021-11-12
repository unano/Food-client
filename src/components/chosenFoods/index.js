import React from "react";
import ChosenFood from "../chosenFood"
import "./chosenFoods.css"
const ChosenFoods = ({foodlist, getMoney, amountSet, check0}) => {
  const allChosenFood = foodlist.map(chosenFood => (
    <ChosenFood chosenFood={chosenFood} getMoney={getMoney} amountSet={amountSet} check0={check0}/>
  ));
  return (
  <div className="c">
    {allChosenFood}
  </div>
  )
};

export default ChosenFoods;