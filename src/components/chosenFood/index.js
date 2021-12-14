import React, { useEffect, useState } from "react";
import "./chosenFood.css";
import { CSSTransition} from "react-transition-group";

const Head = ({chosenFood, getMoney, amountSet, check0, unset, unsetSet}) => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(1);
  const hide = () =>{
    amount===0? check0({name:chosenFood.foodName, size:chosenFood.foodSize}):setShow(false);
  }
  useEffect(() => {
    setAmount(chosenFood.foodAmount); //children function of interest
  }, [chosenFood.foodAmount]);

  useEffect(() => {
    if(unset){
      setShow(false) //children function of interest
    }
  }, [unset]);

  useEffect(() => {
    if(amount < 0){
      setAmount(0) //children function of interest
    }
  }, [amount]);

  useEffect(() => {
    if(chosenFood)
    getMoney(chosenFood.foodPrice * amount)
    
  }, [amount]);
  return (
    <>
{chosenFood?
    <>
           <div className="chosenFood">
           <div className="chosenFoodName">{chosenFood.foodName}({chosenFood.foodSize})</div>
           <div className="chosenFoodAmount" onClick={() => {setShow(true); unsetSet(false);}}>{amount}</div>
           <CSSTransition
                in={show}
                timeout={300}
                classNames="showAmount"
                unmountOnExit
              >
            <div className="chosenFood2">
              <div className="chosenFoodAction" onClick={() =>{
                if(amount >=1) amountSet({name:chosenFood.foodName, size:chosenFood.foodSize, operation:-1})}}>-</div>
              <div className="chosenFoodActionNum">{amount}</div>
              <div className="chosenFoodAction"onClick={() =>amountSet({name:chosenFood.foodName, size:chosenFood.foodSize, operation:1})}>+</div>
              <div className="chosenFoodAction2" onClick={hide}>✖</div>
              </div>
            </CSSTransition>
           </div>
    </>:null}</>
    );
  };
  
  export default Head;
