import { StatusCodes } from "http-status-codes";
import { User } from "../database/models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(StatusCodes.OK).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: " you are not authorised",
    });
  }
};
