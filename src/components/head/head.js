import React, { useState } from "react";
import "./head.css";
import { CSSTransition} from "react-transition-group";

const Head = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <>
        <div className="head">
          <div className="headWord">
            <div id = "headWordInside">食物·たべもの</div>
            <div className="button1">日本菜</div>

            <div className="navbar">
              <div
                className="button2"
                onMouseOver={() => setShow3(true)}
                onMouseLeave={() => setShow3(false)}
              >
                主<br />頁
              </div>

              <CSSTransition
                in={show3}
                timeout={300}
                classNames="alert"
                unmountOnExit
              >
                <div
                  className="background"
                  variant="primary"
                  dismissibleonClose={() => setShow3(false)}
                ></div>
              </CSSTransition>
              <div
                className="button2"
                onMouseOver={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                点<br/>菜
              </div>
              <CSSTransition
                in={show}
                timeout={300}
                classNames="alert"
                unmountOnExit
              >
                <div
                  className="background"
                  variant="primary"
                  dismissibleonClose={() => setShow(false)}
                ></div>
              </CSSTransition>
              <div
                className="button2"
                onMouseOver={() => setShow2(true)}
                onMouseLeave={() => setShow2(false)}
              >
                登<br />陸
              </div>
              <CSSTransition
                in={show2}
                timeout={300}
                classNames="alert"
                unmountOnExit
              >
                <div
                  className="background"
                  variant="primary"
                  dismissibleonClose={() => setShow2(false)}
                ></div>
              </CSSTransition>
              
              </div>
              </div>
              </div>


    </>
  );
};

export default Head;
