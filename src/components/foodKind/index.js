import React, { useEffect, useState } from "react";
import "./foodKind.css";
import { CSSTransition} from "react-transition-group";

const FoodKind = ({foodKind, info, ifShow, leftOn, setKindId}) => {
    const foodName = foodKind.foodKind;
    const foodId = foodKind.foodKindId;
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);
    const judge2 = () =>{
        clicked?setShow(true) :setShow(false);
        clicked || ifShow?leftOn(true) :leftOn(false);
        setKindId(ifShow);
    }
    const showBlue = () =>{
        setShow(true);
        leftOn(true);
        setKindId(foodKind.foodKindId);
    }
    const judge = () =>{
        setClicked(true);
        setShow(true);
        info(foodId);
    }

    useEffect(() => {
        if(ifShow===foodId)
            setShow(true);
        else{
            setShow(false);
            setClicked(false);
        }
    },[foodId, ifShow])
    return (
        
      <>
      {foodKind ? 
      <div>
      <CSSTransition
                in={show}
                timeout={300}
                classNames="foodKindDown"
                unmountOnExit
              >
            <div className="foodKindDown"></div>
            </CSSTransition>
            <CSSTransition
                in={show}
                timeout={300}
                classNames="foodKindDown2"
                unmountOnExit
              >
            <div className="foodKindDown2"></div>
            </CSSTransition>
            <CSSTransition
                in={show}
                timeout={300}
                classNames="foodKind"
              >
            <div className="foodKind"
            onMouseOver={showBlue}
            onMouseLeave={judge2}
            onClick={judge}>
                {foodName}
            </div>
            </CSSTransition>
            <div className="foodKind2">
            <div className="foodKind2Inside"></div>
            </div>
            </div>:null}
        </>
);
};

export default FoodKind;