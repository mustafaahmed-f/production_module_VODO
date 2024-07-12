import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "",
};

const generalSlice = createSlice({
  initialState,
  name: "general",
  reducers: {
    setTest(state, action) {
      state.test = action.payload;
    },
  },
});
export const { setTest } = generalSlice.actions;
export default generalSlice.reducer;
