import React from "react";
import ChosenFood from "../chosenFood"
import "./chosenFoods.css"
const ChosenFoods = ({foodlist, getMoney, amountSet, check0, unset, unsetSet}) => {
  const allChosenFood = foodlist.map(chosenFood => (
    <ChosenFood chosenFood={chosenFood} getMoney={getMoney} amountSet={amountSet} check0={check0} unset={unset} unsetSet={unsetSet}/>
  ));
  return (
  <div className="chosenFoodBox">
    {allChosenFood}
  </div>
  )
};

export default ChosenFoods;