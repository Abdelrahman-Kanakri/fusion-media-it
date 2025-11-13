import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // 1. Import HashRouter
import App from "./App.tsx";
import "./index.css";

// 2. Wrap your <App /> component in <HashRouter>
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
