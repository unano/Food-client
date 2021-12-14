import React, {useState, useContext, useEffect} from "react";
import "./personalInfo.css";
import Head from "../components/head/head"
import { AuthContext } from '../contexts/authContext';
import { useNavigate } from "react-router-dom";
import{ changeName, changePhoneNumber, changeAddress} from "../api/api"
import { CSSTransition } from "react-transition-group";
import { getUserInfo } from "../api/api"
import Orders from "../components/orders"
const PersonalInfoPage = () =>{
    
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const phone = context.phone;
    const [userInfo, setUserInfo] = useState();
    const [modify1, setModify1] = useState(false);
    const [modify2, setModify2] = useState(false);
    const [modify3, setModify3] = useState(false);
    const [name, setName] = useState();
    const [phoneN, setPhoneN] = useState();
    const [address, setAddress] = useState();
    const [showErr, setShowErr] = useState(false);
    const [showErrMsg, setShowErrMsg] = useState(["",""]);

    useEffect(() => {
        getUserInfo(phone).then(user => {
            setUserInfo(user);
        });
    }, [modify1, modify3, phone, showErr]);
    
    const updateNames = async (name) =>{
        if (name.length<3 || name.length>15){
            setShowErrMsg(["用戶名太短/太長","Username too short/long"]);
            setShowErr(true);
        } 
        else{
            await changeName(phone, name);
            setModify1(false);
        }
    }
    
    const updatePhoneNs = async(phoneN) =>{
        var reg1 = /^[0-9]{8,}$/;
        var result1 = reg1.test(phoneN);
        console.log(result1);
        if(!result1){
            setShowErrMsg(["不合法的號碼","Invalid phone number"]);
            setShowErr(true);
        }
        else{
            const result2 = await context.duplicatePhoneNumber(phoneN);
            if (result2) {
                await changePhoneNumber(phone, phoneN);
                context.setPhone(phoneN);
                setModify2(false);
            }
              else {
                setShowErrMsg(["此號碼已被注冊", "The phone number is used"]);
                setShowErr(true);
              }
            }
    }

    const updateAddress = async (address) => {
        const result = await changeAddress(phone, address);
        return (result.code === 201) ? true : false;
      };
    
    const updateAddresses = (phoneN) =>{
        updateAddress(phoneN);
        setModify3(false);
    }

    
    const logout = () =>{
        context.signout();
        navigate('/');
    }
    return(
        <>
        <Head/>
        <CSSTransition
                in={showErr}
                timeout={300}
                classNames="alertStyle"
                unmountOnExit
              >
        <div className="deleteAlert">{showErrMsg[0]}<br/> {showErrMsg[1]}
        <div className="noBtn2" onClick={() =>setShowErr(false)}>OK</div>
        </div>
        </CSSTransition>
        <div className = "personaInfo">
            <div className = "personaInfoLeft">
            <div className="personalInfos">用戸名</div>
            <div className="personalInfos">手机号</div>
            <div className="personalInfos">地址</div>
            <div className="personalInfos"> 訂單</div>
            </div>
            <div className = "personaInfoRight">
                {userInfo?
                <>
            {modify1?<input type="text" className="personalInfos2 pIinput1" autoFocus defaultValue={userInfo.username} onFocus={e =>{setName(e.target.value)}} onChange={e =>{setName(e.target.value)}}></input>
            :<div className="personalInfos2">{userInfo.username}</div>}
            {modify1?<div className="ModifyInfoBtn" onClick={() => setModify1(false)}>取消</div>:
            <div className="ModifyInfoBtn" onClick={() => setModify1(true)}>修改</div>}
            {modify1?<div className="ModifyInfoBtn"  onClick={() => updateNames(name)}>確認</div>:<></>}

            {modify2?<input type="text" className="personalInfos2 pIinput1" autoFocus defaultValue={userInfo.phoneNumber} onFocus={e =>{setPhoneN(e.target.value)}} onChange={e =>{setPhoneN(e.target.value)}}></input>
            :<div className="personalInfos2">{userInfo.phoneNumber}</div>}
            {modify2?<div className="ModifyInfoBtn" onClick={() => setModify2(false)}>取消</div>:
            <div className="ModifyInfoBtn" onClick={() => setModify2(true)}>修改</div>}
            {modify2?<div className="ModifyInfoBtn"  onClick={() => updatePhoneNs(phoneN)}>確認</div>:<></>}

            {modify3?<input type="text" className="personalInfos2 pIinput1" autoFocus defaultValue={userInfo.address} onFocus={e =>{setAddress(e.target.value)}} onChange={e =>{setAddress(e.target.value)}}></input>
            :<div className="personalInfos2">{userInfo.address?userInfo.address:"No address"}</div>}
            {modify3?<div className="ModifyInfoBtn" onClick={() => setModify3(false)}>取消</div>:
            <div className="ModifyInfoBtn" onClick={() => setModify3(true)}>修改</div>}
            {modify3?<div className="ModifyInfoBtn"  onClick={() => updateAddresses(address)}>確認</div>:<></>}
            <div className="personalInfos2"><Orders orders={userInfo.order}/></div>
            </>:<></>
                }
            </div>
            <div className="logoutBtn" onClick={logout}>
                <div className="logoutWord">登出</div>
            </div>
        </div>
        </>
    )
}

export default PersonalInfoPage;