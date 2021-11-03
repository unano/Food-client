import React, { useState } from "react";
import "./chosenFood.css";
import { CSSTransition} from "react-transition-group";

const Head = () => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(1);
  const hide = () =>{
    amount===0? alert("YES?"):setShow(false);
  }

  return (

    <>
           <div className="chosenFood">
           <div className="chosenFoodName">海子味藥包包</div>
           <div className="chosenFoodAmount" onClick={() => setShow(true)}>{amount}</div>
           <CSSTransition
                in={show}
                timeout={300}
                classNames="showAmount"
                unmountOnExit
              >
            <div className="chosenFood2">
              <div className="chosenFoodAction" onClick={amount===0?() => {setAmount(0)}:() => {setAmount(amount-1)}}>-</div>
              <div className="chosenFoodActionNum">{amount}</div>
              <div className="chosenFoodAction"onClick={() => setAmount(amount+1)}>+</div>
              <div className="chosenFoodAction2" onClick={hide}>✖</div>
              </div>
            </CSSTransition>
           </div>
    </>
    );
  };
  
  export default Head;
