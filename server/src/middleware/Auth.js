import jwt from "jsonwebtoken";
import { User } from "../database/models/user.js";
import { StatusCodes } from "http-status-codes";

// user authenitcation
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

    next();
  } catch (error) {
    console.error(error.message);

    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "unauthorized",
    });
  }
};

// admin authorisation
export const isAdmin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: " not authorized",
    });
  }

  next();
};
