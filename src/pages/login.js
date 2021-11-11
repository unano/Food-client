import React, {useState, useContext} from "react";
import "./login.css";
import Head from "../components/head/head"
import Bg from "../pic/bg.png"
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Navigate } from "react-router-dom";

const Login = () =>{
    const [phoneNumber, setPhoneNmuber] = useState(null);
    const [password, setPassword] = useState(null);
    const [errMsg, setErrMsg] = useState("")
    const context = useContext(AuthContext);

    const CheckLogin = async () => {
        if (!phoneNumber) setErrMsg("Please enter phone number")
        else if (!password) setErrMsg("Please enter password")
        else{
            const auth = await context.authenticate(phoneNumber, password);
            if (auth === false) {
                setErrMsg("Wrong pnumber/password");
            }
        }
      };

    const { from } = { from: { pathname: "/" } };
    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return(
        <>
        <div className = "loginBody">
            <img src = {Bg} className="loginBg" alt="bg"></img>
        <Head/>
        <div className="loginArea">
            <div className="loginLogin">登陸</div>
            <div className="loginBodyInside">
            {errMsg && <div className ="alertMsg">{errMsg}</div>}
            <div className="loginFill">
            <div className="loginPhoneReq">機號 Phone number</div>
            <input className="loginPhone" placeholder="phone number"
            onChange={e => { setPhoneNmuber(e.target.value)}}></input>
            </div>
            <div className="loginFill">
            <div className="loginPhoneReq">密碼 Password</div>
            <input className="loginPhone" placeholder="password" type="password"
            onChange={e => { setPassword(e.target.value)}}></input>
            </div>
            <div className="loginBtn" onClick={CheckLogin}>Login</div>
            <Link className="registlink" to="/regist">Regist</Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default Login;