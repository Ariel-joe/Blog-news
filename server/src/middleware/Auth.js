import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { User } from "../database/models/user.js";

export const userAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies[process.env.AUTH_COOKIE_NAME];

    if (!token) throw new Error("Token not found");

    // Beyond this point, means the token has been set in the cookie

    console.log({ token });

    // Verify the token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const { _id } = payload;

    const user = await User.findById(_id);

    if (!user) throw new Error("Invalid token");

    req.user = user;

    next();
  } catch (error) {
    console.log({ error });

    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "Unauthorized",
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
