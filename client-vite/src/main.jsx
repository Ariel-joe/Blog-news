import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { SiHomepage } from "react-icons/si";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage.jsx} />
          <Route index element={<Contactpage.jsx} />
          <Route index element={<Newspage.jsx} />
         </Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>
);
