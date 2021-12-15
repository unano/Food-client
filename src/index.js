import React from "react";
import ReactDOM from "react-dom";
import Element from "./pages/homepage"
import Order from "./pages/order"
import Login from "./pages/login"
import Regist from "./pages/regist"
import Check from "./pages/check"
import Personal from "./pages/personalInfo";
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import FoodContextProvider from "./contexts/foodContext";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
    return (
      <AuthContextProvider>
        <FoodContextProvider>
        <BrowserRouter>
        <Routes>
        <Route exact path="/regist" element={<Regist/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/order" element={<Order/>} />
        
        <Route exact path="/personal" element={<PrivateRoute/>}>
        <Route exact path="/personal" element={<Personal/>} />
        </Route>
        <Route exact path="/order/check" element={<PrivateRoute/>}>
        <Route exact path="/order/check" element={<Check/>} />
        </Route>
          <Route exact path="/" element={<Element/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </FoodContextProvider>
      </AuthContextProvider>
    )
};

ReactDOM.render(<App/>, document.getElementById("root"));