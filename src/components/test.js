import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles.css";


export default function App() {
  const [state, setState] = React.useState(0);
  let list=["apple","pineapple","juice"]
  return (
    <>
      <SwitchTransition>
     <CSSTransition
       addEndListener={(node, done) => {
        node.addEventListener("transitionend", done, false);
      }}
       classNames='fade'
     >
       <button onClick={() => 
        {
            if(state===list.length-1)
            setState(0)
            else{
                setState(state => state +1)
            }
       }}>
         {list[state]}
       </button>
     </CSSTransition>
   </SwitchTransition>

    </>
  );
}
