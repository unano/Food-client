import React, { useState } from "react";
import "./head.css";
import { CSSTransition} from "react-transition-group";
import { Link } from "react-router-dom";
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
                <Link className="button2" to="/">主<br />頁</Link>
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
                <Link className="button2" to="/order">点<br/>菜</Link>
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
                <Link className="button2" to="/login">登<br />陸</Link>
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
