import express from "express";
import "dotenv/config";
import cors from "cors";
import { getHome } from "./controllers/home.js";
import { blogRouter } from "./routes/blogRoute.js";
import { userAuthentication } from "./middleware/Auth.js";
import { usersRouter } from "./routes/usersRoute.js";
import { connectDB } from "./database/config.js";
import { authRouter } from "./routes/auth.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

connectDB();

const port = process.env.PORT;

app.get("/", getHome);

app.use("/api", authRouter, blogRouter, userAuthentication, usersRouter);

app.listen(port, () => console.log(`server running on ${port}`));
