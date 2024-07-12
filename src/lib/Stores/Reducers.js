import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "../Services/User/UserReducer";

export const reducers = combineReducers({
  user: UserReducer,
});
