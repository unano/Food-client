import React, { useState, createContext } from "react";
import { login, signup, testDuplicate } from "../api/api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [phone, setPhone] = useState(null);
  const [isDuplicate, setIsDuplicate] = useState();

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const duplicatePhoneNumber = async (phoneNumber) => {
    const result = await testDuplicate(phoneNumber);
    (result.code === 201) ? setIsDuplicate(false): setIsDuplicate(true);
    return (result.code === 201) ? true: false;
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setPhone(username);
    }
    else {
      setIsAuthenticated(false);
    }
    return (result.token) ? true : false;
  };

  const register = async (username, password, phoneNumber) => {
    const result = await signup(username, password, phoneNumber);
    return (result.code === 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        duplicatePhoneNumber,
        isDuplicate,
        setIsDuplicate,
        authenticate,
        register,
        signout,
        phone,
        setPhone
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
