import React from "react";
import FoodKind from "../foodKind"
import "./foodKinds.css"
const FoodKinds = ({foodKinds, info, ifShow, leftOn, setKindId}) => {
  const allFoodKinds = foodKinds.map(foodKind => (
    <FoodKind foodKind={foodKind} info={info} ifShow={ifShow} leftOn={leftOn} setKindId={setKindId}/>
  ));
  return (
  <div className="foodKinds">
    {allFoodKinds}
  </div>
  )
};

export default FoodKinds;