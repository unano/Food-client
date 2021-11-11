import React, { useEffect, useState } from "react";
import "./foodKind.css";
import { CSSTransition} from "react-transition-group";

const FoodKind = ({foodKind, info, ifShow, leftOn}) => {
    const foodName = foodKind.foodKind;
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);
    const judge2 = () =>{
        clicked?setShow(true) :setShow(false);
        clicked?leftOn(true) :leftOn(false);
    }
    const showBlue = () =>{
        setShow(true);
        leftOn(true);
    }
    const judge = () =>{
        setClicked(true);
        setShow(true);
        info(foodName);
    }
    console.log(ifShow);

    useEffect(() => {
        if(ifShow===foodName)
            setShow(true);
        else{
            setShow(false);
            setClicked(false);
        }
    },[foodName, ifShow])
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