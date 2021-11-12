import React, { useState } from "react";
import "./element.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import TableCloth from "../pic/tablecloth3.png";
import Plate from "../pic/plate.png";
import Right from "../pic/right.png";
import Board from "../pic/board.png";
import ToMenu from "../pic/toMenu.png";
import Egg from "../pic/egg.png";
import Head from "../components/head/head"
import { Link } from "react-router-dom";

const Test = () => {
  const [scrollDown, setScrollDown] = useState(false);

  const [index, setIndex] = useState(0);
  let list = ["溏心蛋", "大蒜", "敬請期待"];
  let list2 = [Egg, Plate, Plate]

  const handleScroll = (e) =>{
    if(e.deltaY>0){
      //scrolldown
      setScrollDown(true);
      if (index >= list.length - 1) setIndex(0);
      else {
          setIndex((index) => index + 1);
      }
    }
    else{
      //scrollup
      setScrollDown(false);
      if (index <= 0) setIndex(list.length - 1);
      else {
          setIndex((index) => index - 1);
      }
    }

  }


  return (
    <>
      <div className="body">
        <Head/>
        <div className="content">
          <div className="bigWord">
            好好的食物
            <div id = "leftContainer">
            <div id="bigWord2">
              いい食べ物
              <div id = "bigWord3">Good food</div>
              </div>
              <div id = "bigWord4">キャンペーン期間中に、
                全国のすき家でメイン商品+
                すきすきセットをお買い上げのレシート情報
                をご入力いただいた方の中から、
                抽選で100名様にゲームソフト
                「Nintendo Switch TM クレヨンしんちゃんオラと博士の夏休み～終わらない七日間の旅～」
                をプレゼントいたします！
                <br/>
                <span style={{color:"rgb(50, 72, 168)"}}>
                  活動期間，將在全國范圍内輸入購買主打産品
                +Sukiya套餐的收據信息中抽籤抽取100人，
                送您“ Nintendo Switch TM 小新欧士与暑假-永无止境的七日游-”！ </span></div>
                <img src={ToMenu} alt="toMenu" id="toMenu"></img>
                <div id ="toMenu2"><Link id ="toMenu20" to="/order">View all food</Link></div>
            </div>
            </div>
          {/* <div className="right">
            <div className="rightInside"></div>
            <div className="bgword">Cup noodles</div>
          </div> */}
          <img
            src={TableCloth}
            id="tablecloth"
            alt="dd"
            width="650px"
            height="650px"
          ></img>
          <SwitchTransition>
            <CSSTransition
              key={index}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames={scrollDown?"fade":"fade2"}
            >
              <img
            src={list2[index]}
            id="plate"
            alt="dd"
            width="450px"
            height="450px"
            onWheel={(e) =>handleScroll(e)}
          ></img>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition>
            <CSSTransition
              key={index}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames="scroll1"
            >
              <div>
              <img src={Board} id="foodName" alt="borad"></img>
              <div id="foodnameInside">{list[index]}</div>
              </div>
            </CSSTransition>
          </SwitchTransition>
          
          <img src={Right}  id = "switchFoodBtn" alt="right"
                onClick={() => {
                  setScrollDown(true);
                  if (index === list.length - 1) setIndex(0);
                  else {
                    setIndex((index) => index + 1);
                  }
                }}
              ></img>

<img src={Right}  id = "switchFoodBtn2" alt="right"
                onClick={() => {
                  setScrollDown(false);
                  if (index === 0) setIndex(list.length - 1);
                  else {
                    setIndex((index) => index - 1);
                  }
                }}
              ></img>
              <div id = "zhaopai">招牌菜品</div>
              
          </div>
      </div>
    </>
  );
};

export default Test;
