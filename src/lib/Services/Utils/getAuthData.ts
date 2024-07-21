import Cookies from "js-cookie";
import { userState } from "../User/UserReducer.types";

export const authData: userState = {
  token: Cookies.get("token") as string,
  user_id: Cookies.get("user_id") as string,
  secure_key: Cookies.get("secure_key"),
  business_modules_route: Cookies.get("business_modules_route"),
};
