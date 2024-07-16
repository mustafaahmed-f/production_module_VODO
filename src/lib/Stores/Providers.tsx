import React from "react";

import { Provider } from "react-redux";
import { Store } from "./Store";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={Store}>{children}</Provider>;
};
