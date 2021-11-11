import React, {useState, useContext} from "react";
import Head from "../components/head/head"
import ChosenFood from "../components/chosenFood/chosenFood"
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./order.css";
import { FoodContext } from '../contexts/foodContext';
import FoodKinds from "../components/foodKinds"
const Order = () =>{
  const [ifShow, setIfShow] = useState(true);
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("null");
  const context = useContext(FoodContext);
  const foodKinds = context.foodKinds;

  const unsetOther =(value) =>{
    setIfShow(value);
  }
  const setShowFunc = (value) =>{
    setShow(value);
  }

  const setIcons = (value) =>{
    if(value === icon) setIcon("null");
    else setIcon(value);
  }
    return(
        <>
        <div className="orderBody">
        <Head/>
        <div className="menuLeft">
            <FoodKinds foodKinds={foodKinds} info={unsetOther} ifShow={ifShow} leftOn={setShowFunc}/>
            <CSSTransition
                in={show}
                timeout={600}
                classNames="rightOpen"
                unmountOnExit
              >
            <div className="foodNames" onMouseOver={() => setShow(true)}>
              <div className="foodName">一般般</div>
              <div className="foodNameLine"></div>
              <div className="foodName">爽肤水</div>
              <div className="foodNameLine"></div>
              <div className="foodName">士大夫分</div>
              <div className="foodNameLine"></div>
              <div className="foodName">石帆胜发</div>
              <div className="foodNameLine"></div>
              <div className="foodName">士大夫傅</div>
              <div className="foodNameLine"></div>
              <div className="foodName">手动阀阀</div>
              <div className="foodNameLine"></div>
            </div>
            </CSSTransition>
            <div className="foodPic">
              <div className="foodPicLarge"></div>
              <div className="foodPicSmall">
                <div className="foodNameUnder">多椒魚頭</div>
                <div className={icon==="S"?"foodsizeIconOn":"foodsizeIcon"} onClick={() => setIcons("S")}>S</div>
                <div className={icon==="M"?"foodsizeIconOn":"foodsizeIcon"} onClick={() => setIcons("M")}>M</div>
                <div className={icon==="L"?"foodsizeIconOn":"foodsizeIcon"} onClick={() => setIcons("L")}>L</div>
                <div className="foodPrize">$</div>
                <div className="foodsizeIcon">+</div>
              </div>
            </div>
        </div>
        <div className="menuRight">
        <div className="menuRightTitle">已選</div>
          <ChosenFood/>
          <ChosenFood/>
          <ChosenFood/>
          <ChosenFood/>
          <ChosenFood/>
          <div className="totalMoney">
          <div className="totalMoneyTitle">總計</div>
          <div className="totalMoneyMoney">$100</div>
          </div>
          <div className="pay">付款</div>
        </div>
        </div>
        </>
    )
}

export default Order;