import React from "react";
import ReactDOM from "react-dom";
import Element from "./components/element"
import Order from "./components/order"
import Login from "./pages/login"
import Regist from "./pages/regist"
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import FoodContextProvider from "./contexts/foodContext";
const App = () => {
    return (
      <AuthContextProvider>
        <FoodContextProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/regist" element={<Regist/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/order" element={<Order/>} />
          <Route path="/" element={<Element/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </FoodContextProvider>
      </AuthContextProvider>
    )
};

ReactDOM.render(<App/>, document.getElementById("root"));