import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "../reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
);

reportWebVitals(console.log);
