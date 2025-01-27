import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { SiHomepage } from "react-icons/si";
import { Homepage } from "./pages/Homepage.jsx";
import { Contactpage } from "./pages/Contactpage.jsx";
import { Newspage } from "./pages/Newspage.jsx";
import { Login } from "./pages/Auth/login.jsx";
import { Signup } from "./pages/Auth/Signup.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* for layout with home route */}
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/news" element={<Newspage />} />
        </Route>

        {/* for layout only */}
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
