import { Blog } from "../database/models/blog.js";

// adding a blog
export const addBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);

    return res.status(201).json({
      success: true,
      message: newBlog,
    });
  } catch (error) {
    console.log(error);
    res.Status(500).json({
      success: false,
      message: "Failed",
    });
  }
};

// finding a single blog
export const singleBlog = async (req, res) => {
  try {
    const blogId = req.query.id;

    const article = await Blog.findOne({ _id: blogId }, req.body);

    res.json({
      succcess: true,
      data: article,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
};

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

// updating a blog
export const editBlog = async (req, res) => {
  try {
    const blogId = req.query.id;

    const article = await Blog.findOneAndUpdate({ _id: blogId }, req.body, {
      new: true,
    });

    res.json({
      success: true,
      data: article,
    });
  } catch (e) {
    res.json({
      success: false,
      message: "Error try again!",
    });
  }
};

// delete a blog
export const removeBlog = async (req, res) => {
  try {
    const blogId = req.query.id;

    const deletedBlog = await Blog.deleteOne({ _id: blogId });

    res.json({
      success: true,
      deletedCount: deletedBlog.deletedCount,
    });
  } catch (error) {
    console.log(error);
    return res.status.json({
      success: false,
      message: error,
    });
  }
};
