import { Provider } from "react-redux";
import { Store } from "./Store";
import { ReactNode } from "react";

export const Providers = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};
