import { useEffect, useState } from "react";
import { getUserInfo } from "../api/api"

const useUserInfo = phoneNumber => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserInfo(phoneNumber).then(user => {
      setUser(user);
    });
  }, [phoneNumber]);
  return user;
};

export default useUserInfo;