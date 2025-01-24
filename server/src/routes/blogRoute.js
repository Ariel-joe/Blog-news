import { Router } from "express";
import {
  addBlog,
  editBlog,
  getBlog,
  removeBlog,
  singleArticleSearch,
  singleBlog,
} from "../controllers/blogs.js";
import { userAuthentication } from "../middleware/Auth.js";

const blogRouter = Router();

blogRouter
  .route("/blogs")
  .get(getBlog)
  .post(userAuthentication, addBlog)
  .patch(userAuthentication, editBlog)
  .delete(userAuthentication, removeBlog);

blogRouter.get("/blogs/single", singleBlog);

blogRouter.get("/blogs/search", singleArticleSearch);

export { blogRouter };
