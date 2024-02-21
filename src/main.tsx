import React from "react";
import ReactDOM from "react-dom/client";
import "@picocss/pico";
import "./index.css";
import RootElement from "./components/RootElement.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootElement />
  </React.StrictMode>
);
