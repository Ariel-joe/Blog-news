import jwt from "jsonwebtoken";
import { User } from "../database/models/user.js";

export const userAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies[process.env.AUTH_COOKIE_NAME];

    if (!token) throw new Error("token not found!");

    // beyond this point means the token has been set in the cookie

    // step one: verify the token
    const payload = jwt.verify(token, process.env.SECRET_TOKEN);

    const { _id } = payload;

    const user = await User.findById(_id);

    if (!user) throw new Error("Invalid token");

    req.user = user;

    next()
  } catch (error) {
    console.error(error.message);
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
