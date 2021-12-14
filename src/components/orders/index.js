import React from "react";
import Order from "../order"
import "./orders.css"
const Orders = ({orders}) => {
  const order = orders.map(order => (
    <Order order={order}/>
  ));
  return (
  <div className="orderss">
    {order}
  </div>
  )
};

export default Orders;