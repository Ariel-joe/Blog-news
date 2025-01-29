import { Router } from "express";
import { signup } from "../controllers/Auth.js";

const authRoute = Router();

authRoute.post("/auth/signup", signup);

export { authRoute };
