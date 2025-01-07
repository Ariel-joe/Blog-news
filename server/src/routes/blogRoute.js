import { Router } from "express";
import { addBlog, getBlog } from "../controllers/blogs.js";

const blogRouter = Router();

blogRouter.route("/blog").get(getBlog).post(addBlog);

export { blogRouter };
