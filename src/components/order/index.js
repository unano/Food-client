import React from "react";
import "./order.css";

const Order = ({order}) => {
  return (
    <>
{order?
    <>
           <div className="orderedFood">
           <div className="orderTime">{order.orderTime}</div>
           <div className="orderMoney">共計${order.totalMoney}</div>
           </div>
    </>:null}</>
    );
  };
  
  export default Order;
