export const getBlog = (req, res) =>   {
  res.json({
    message: "this is the home route",
  });
}

export const addBlog = (req, res) => {
    res.json({
      message: "this is getting a blog",
    });
  }