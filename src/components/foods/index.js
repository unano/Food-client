import React from "react";
import FoodKind from "../foodKind"
import "./foodKinds.css"
const FoodKinds = ({foodKinds, info, ifShow, leftOn}) => {
  const allFoodKinds = foodKinds.map(foodKind => (
    <FoodKind foodKind={foodKind} info={info} ifShow={ifShow} leftOn={leftOn}/>
  ));
  return (
  <div className="foodKinds">
    {allFoodKinds}
  </div>
  )
};

export default FoodKinds;