import { Router } from "express";
import { login, signup } from "../controllers/Auth.js";

const authRoute = Router();

authRoute.post("/auth/signup", signup);

authRoute.post("/auth/login", login)

export { authRoute };
