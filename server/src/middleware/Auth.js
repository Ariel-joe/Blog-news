// import jwt from "jsonwebtoken";


export const userAuthentication = (req, res, next) => {
    const isAuthenticated = false;
    if (isAuthenticated) {
        next();
  } else {
    res.status(403).json({
      success: false,
      message: "you are not authorized",
    });
  }
};





  //   const username = req.body.username;
  //   const user = { name: username };
  //   const accessToken = jwt.sign(user, process.env.SECRET_TOKEN);
  //    const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];
  //   if (token === null) return res.Status(401);
  //   jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
  //     if (err) return res.Status(403);
  //     req.user = user;
  //     next();
  //   });
