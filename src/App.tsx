import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/vodo-react-components/dist/index.css";

import Router from "./Router/Router";
import { Providers } from "./lib/Stores/Providers";

const App = () => {
  return <Router />;
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
