import React, {useState, useContext} from "react";
import "./check.css";
import OrderedFoods from "../components/orderedFoods"
import { FoodContext } from '../contexts/foodContext';

const Check = () =>{
    const context = useContext(FoodContext);
    return(
        <>
        <div className="confirmOrder">
        <div className="confirmOrderTitle">Check order</div>
        <OrderedFoods foodlist={context.chosenFoods} />
        <div className="checkTotalPrice">Total ${context.money}</div>
        <div className = "checkPay">Pay</div>
        </div>
        </>
    )
}

export default Check;