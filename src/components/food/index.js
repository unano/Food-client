import React from "react";
import "./food.css";

const Food = ({food, info}) => {
    const chosenfood = food;
    return (
      <>
      {food ? 
      <div>
      <div className="foodName" onClick={() => info(chosenfood.foodName)}>{chosenfood.foodName}</div>
        <div className="foodNameLine"></div>
        </div>:null}
        </>
);
};

export default Food;