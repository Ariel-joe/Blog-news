export const getUsers = (req, res) => {
  console.log({ UserFromReq: req.user });

  res.json({
    message: "this are all the users",
  });
};
