import React, { useContext } from "react";
import { AuthContext } from '../contexts/authContext'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const context = useContext(AuthContext);
  //const isLogin = localStorage.getItem("token") ? true : false;
  return context.isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
}

export default PrivateRoute;