import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface NonAuthComponentProps {
  children: React.ReactNode;
}

const NonAuthComponent: React.FC<NonAuthComponentProps> = ({ children }) => {
  const userToken = Cookies.get("token");
  const user_id = Cookies.get("user_id");
  const navigate = useNavigate();
  useEffect(() => {
    if (userToken && user_id) {
      navigate("/");
    }
  }, []);
  return !userToken || !user_id ? children : null;
};

export default NonAuthComponent;
