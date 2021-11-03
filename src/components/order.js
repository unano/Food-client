import React, {useState} from "react";
import Head from "../components/head/head"
import ChosenFood from "../components/chosenFood/chosenFood"
import FoodKind from "../components/foodKind/foodKind"
import "./order.css";

const Order = () =>{
  const [ifShow, setIfShow] = useState(true)
  const unsetOther =(value) =>{
    setIfShow(value);
  }
    return(
        <>
        <div className="orderBody">
        <Head/>
        <div className="menuLeft">
            <div className="foodKinds">
            <FoodKind foodName={"炒飯"} info={unsetOther} ifShow={ifShow}/>
            <FoodKind foodName={"湯面"} info={unsetOther} ifShow={ifShow}/>
            <FoodKind foodName={"炒面"} info={unsetOther} ifShow={ifShow}/>
            <FoodKind foodName={"臭面"} info={unsetOther} ifShow={ifShow}/>
            </div>
            <div className="foodName"></div>
            <div className="foodPic">
              <div className="foodPicLarge"></div>
              <div className="foodPicSmall"></div>
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
          <div className="pay">Pay</div>
        </div>
        </div>
        </>
    )
}

export default Order;