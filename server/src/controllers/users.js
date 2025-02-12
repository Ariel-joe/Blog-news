import { User } from "../database/models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "There was a problem fetching the users",
    });
  }
};
