import { Router } from "express";
import { addBlog, getBlog } from "../controllers/blogs.js";
import { userAuthentication } from "../middleware/Auth.js";

const blogRouter = Router();

blogRouter.route("/blogs").get(getBlog).post(userAuthentication ,addBlog);

export { blogRouter };
