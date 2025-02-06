import express from "express";
import "dotenv/config";
import cors from "cors";
import { getHome } from "./controllers/home.js";
import { blogRouter } from "./routes/blogRoute.js";
import { userAuthentication } from "./middleware/Auth.js";
import { usersRouter } from "./routes/usersRoute.js";
import { connectDB } from "./database/config.js";
import { authRouter } from "./routes/auth.js";
import cookieParser from "cookie-parser";
import { parseCookie } from "./middleware/cookie-parser.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Third party cookie-parser middleware
// app.use(cookieParser()); // Calls the factory function to get the middleware

// Custom option to parse the cookies
app.use(parseCookie); // Passes the middleware function directly

connectDB();

const port = process.env.PORT;

app.get("/", getHome);

app.use("/api", authRouter, blogRouter, userAuthentication, usersRouter);

app.listen(port, () => console.log(`server running on ${port}`));
