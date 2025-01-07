export const getBlog = (req, res) =>   {
  res.json({
    message: "this is are all the blogs",
  });
}

export const addBlog = (req, res) => {
    res.json({
      message: "blog added successfully",
    });
  }