import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./constants/theme.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContext>
      <App />
    </ThemeContext>
  </BrowserRouter>,
);
