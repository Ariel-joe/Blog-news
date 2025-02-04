import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Homepage } from "./pages/Homepage.jsx";
import { Contactpage } from "./pages/Contactpage.jsx";
import { Newspage } from "./pages/Newspage.jsx";
import { Login } from "./pages/Auth/login.jsx";
import { Signup } from "./pages/Auth/Signup.jsx";
import { AddBlogpage } from "./pages/AddBlogpage.jsx";
import { AuthLayout } from "./pages/Auth/AuthLayout.jsx";
import { SingleBlogpage } from "./pages/SingleBlogpage.jsx";
import { GlobalLayout } from "./pages/GlobalLayout.jsx";
import { ProtectedRouteWrapper } from "./pages/protected/ProtectedRouteWrapper.jsx";
import { Profilepage } from "./pages/protected/Profilepage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          {/* for layout with home route */}
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/news" element={<Newspage />} />
            <Route path="/add" element={<AddBlogpage />} />

            {/* protected routes */}
            <Route element={<ProtectedRouteWrapper />}>
              <Route path="/profile" element={<Profilepage />} />
            </Route>
          </Route>

          {/* for layout only */}
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* layout for an opened blog */}
          <Route path="/article/:id" element={<SingleBlogpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
