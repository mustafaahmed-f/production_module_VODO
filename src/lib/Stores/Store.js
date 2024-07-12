import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./Reducers";

export const Store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
