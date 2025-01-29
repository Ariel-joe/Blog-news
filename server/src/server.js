import express from "express";
import "dotenv/config";
import cors from "cors";
import { getHome } from "./controllers/home.js";
import { blogRouter } from "./routes/blogRoute.js";
import { userAuthentication } from "./middleware/Auth.js";
import { usersRouter } from "./routes/usersRoute.js";
import { connectDB } from "./database/config.js";
import { authRoute } from "./routes/authRoute.js";

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

connectDB();

const port = process.env.PORT;

app.get("/", getHome);

app.use("/api",authRoute, blogRouter, userAuthentication, usersRouter);

app.listen(port, () => console.log(`server running on ${port}`));
