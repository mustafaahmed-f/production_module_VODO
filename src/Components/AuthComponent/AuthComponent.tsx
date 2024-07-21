import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/Stores/hooks";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { setCookiesData } from "../../lib/Services/User/UserReducer";
import { authData } from "../../lib/Services/Utils/getAuthData";
import { RootState } from "../../lib/Stores/Reducers";

interface AuthComponentProps {
  children: React.ReactNode;
}

const AuthComponent: React.FC<AuthComponentProps> = ({ children }) => {
  const userToken = Cookies.get("token");
  const user_id = Cookies.get("user_id");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    if (!userToken || !user_id) {
      navigate("/login");
      return;
    }

    //// Condition to prevent dispatching with each refresh or navigation
    if (!user?.token || !user?.user_id) {
      dispatch(setCookiesData(authData));
    }
  }, [userToken, user_id]);

  return userToken && user_id ? children : null;
};

export default AuthComponent;
