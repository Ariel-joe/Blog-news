import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import { App } from "./App.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NewsPage } from "./pages/NewsPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { LoginPage } from "./pages/auth/LoginPage.jsx";
import { SignupPage } from "./pages/auth/SignupPage.jsx";
import { AuthLayout } from "./pages/auth/AuthLayout.jsx";
import { GlobalLayout } from "./GlobalLayout.jsx";
import { ProfilePage } from "./pages/protected/ProfilePage.jsx";
import { ProtectedRouteWrapper } from "./pages/protected/ProtectedRouteWrapper.jsx";
import { UsersPage } from "./pages/admin/UsersPage.jsx";
import { AdminRoutesWrapper } from "./pages/admin/AdminRoutesWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route element={<ProtectedRouteWrapper />}>
              <Route path="/profile" element={<ProfilePage />} />

              <Route element={<AdminRoutesWrapper />}>
                <Route path="/users" element={<UsersPage />} />
              </Route>
            </Route>
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
