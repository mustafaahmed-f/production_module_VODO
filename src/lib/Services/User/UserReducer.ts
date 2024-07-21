import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "./UserReducer.types";

const initialState: userState = {
  token: "",
  user_id: "",
  secure_key: "",
  business_modules_route: "",
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setCookiesData: {
      prepare: (state) => {
        return {
          payload: {
            ...state,
          },
        };
      },
      reducer(state: userState, action: PayloadAction<userState>) {
        state.token = action.payload.token;
        state.user_id = action.payload.user_id;
        state.secure_key = action.payload.secure_key;
        state.business_modules_route = action.payload.business_modules_route;
      },
    },
  },
});
export const { setCookiesData } = userSlice.actions;
export default userSlice.reducer;
