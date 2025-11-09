import { StrictMode } from "react";
/* import React from "react";
import ReactDOM from "react-dom/client"; */
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Content from "./pages/content.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/:day_time/med" element={<Content />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
