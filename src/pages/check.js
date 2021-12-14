import React, {useState, useContext} from "react";
import "./check.css";
import OrderedFoods from "../components/orderedFoods"
import { FoodContext } from '../contexts/foodContext';
import { useNavigate } from "react-router-dom";
import Pay from "./pay";
import { AuthContext } from '../contexts/authContext';
const Check = () =>{
    const authContext = useContext(AuthContext);
    const phone = authContext.phone;
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [wait, setWait] =useState(false);
    const handleHistory = () =>{
        navigate('/order')
    }

    const setWait2 = (value) =>{
        setWait(value);
    }

    const context = useContext(FoodContext);
    return(
        <>
        <div className="checkpage">
        {wait && <><div className="processing">
            <div className="procesingWord">Processing...(may take a long time)</div></div></>}
        {/* <img src = {Bg} className="loginBg" alt="bg"></img> */}
        <div className="confirmOrder">
        <div className="confirmOrderTitle">確認訂單</div>
        <OrderedFoods foodlist={context.chosenFoods} />
        <div className="checkTotalPrice">總計 ${context.money}</div>
        <div className = "checkPay" onClick={() => setShow(true)}>付款</div>
        <div className = "backToChoose" onClick={handleHistory}>取消</div>
        </div>
        {show && <div className="PayWindow">
            <div className="choosePayWord">选择付款方式</div>
            <div className = "backToChoose2" onClick={() => setShow(false)}>取消</div>
        <Pay phone={phone} money={context.money} setWait2={setWait2}/></div>}
        </div>
        </>

    )
}

export default Check;