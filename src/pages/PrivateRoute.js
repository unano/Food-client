import React, { useContext } from "react";
import { AuthContext } from '../contexts/authContext'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const context = useContext(AuthContext);
  return context.isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
}

export default PrivateRoute;