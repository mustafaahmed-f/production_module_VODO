import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "../node_modules/vodo-react-components/dist/index.css";
import Router from "./Router/Router";
import { Providers } from "./lib/Stores/Providers";
import { createRoot } from "react-dom/client";

const App = () => {
  return <Router />;
};

const rootElement = document.getElementById("app");

createRoot(rootElement).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);

export default App;
