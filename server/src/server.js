import express from "express";
import "dotenv/config";
import { getHome } from "./controllers/home.js";
import { blogRouter } from "./routes/blogRoute.js";
import { userAuthentication } from "./middleware/Auth.js";
import { usersRouter } from "./routes/usersRoute.js";


const app = express();
app.use(express.json());


const port = process.env.PORT;

app.get("/", getHome);
 
app.use("/api", blogRouter, userAuthentication, usersRouter );

app.listen(port, () => console.log(`server running on ${port}`));
