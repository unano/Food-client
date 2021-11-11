import React, {useState, useContext} from "react";
import "./login.css";
import Head from "../components/head/head"
import Bg from "../pic/bg.png"
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Navigate } from "react-router-dom";

const Regist = () =>{
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordAgain, setPasswordAgain] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("")
    const [registered, setRegistered] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [nav, setNav] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const context = useContext(AuthContext);

    const register = async() =>{
        var reg1 = /^([0-9]+.?[0-9]*){8,}$/;
        var result1 = reg1.test(phoneNumber);
        if (!phoneNumber) setErrMsg("Please enter phone number");
        else if(!result1){
          setErrMsg("Invalid phone number");
        }
        else if (!username) setErrMsg("Please enter your name");
        else if (!password) setErrMsg("Please enter password");
        else if(!passwordAgain) setErrMsg("Please confirm password");
        else{
          if(password === passwordAgain){
            var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            var result = reg.test(password);
            if (result) {
              const result2 = await context.duplicatePhoneNumber(phoneNumber);
              if (result2) {
                const ifRegist = context.register(username, password, phoneNumber);
                if (ifRegist) {
                  setSuccessMsg("Register Succeed!");
                  setTimeout(() => {setNav(true)}, 1000)
                  setRegistered(true);
              }
              }
              else {
                setErrMsg("Phone number is used");
              }
            }
            else{
              setErrMsg("Password too weak");
            }
          }
          else{
            setErrMsg("Password not consistent");
          }
        }
    }

    if (registered && nav) {
          return <Navigate to="/login"/>;
      }


    return(
        <>
        <div className = "loginBody">
            <img src = {Bg} className="loginBg" alt="bg"></img>
        <Head/>
        <div className="loginArea">
            <div className="loginLogin">注冊</div>
            <div className="loginBodyInside">
            {errMsg && <div className ="alertMsg">{errMsg}</div>}
            {successMsg && <div className ="successMsg">{successMsg}</div>}
            <div className="loginFill">
            <div className="loginPhoneReq">機號 Phone number</div>
            <input className="loginPhone" placeholder="phone number"
            onChange={e => { setPhoneNumber(e.target.value)}}></input>
            </div>
            <div className="loginFill">
            <div className="loginPhoneReq">姓名 Name</div>
            <input className="loginPhone" placeholder="name"
            onChange={e => { setUsername(e.target.value)}}></input>
            </div>
            <div className="loginFill">
            <div className="loginPhoneReq">密碼 Password</div>
            <input className="loginPhone" type="password" placeholder="password"
            onChange={e => { setPassword(e.target.value)}}></input>
            </div>
            <div className="loginFill">
            <div className="loginPhoneReq">確認密碼 Confirm Password</div>
            <input className="loginPhone" type="password" placeholder="confirm password"
            onChange={e => { setPasswordAgain(e.target.value)}}></input>
            </div>
            <div className="loginBtn" onClick={register}>Regist</div>
            <Link className="registlink" to="/login">Login</Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default Regist;