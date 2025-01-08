import { Blog } from "../database/models/blog.js";

// getting all blogs
export const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
};

// adding a blog
export const addBlog = async (req, res) => {
  try {
    const newBlog = await  Blog.create(req.body)

    return res.status(201).json({
      success: true,
      message: newBlog
    })
  } catch (error) {
    console.log(error);
    res.Status(500).json({
      success: false,
      message: "Failed",
    });
  }
};
