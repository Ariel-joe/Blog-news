import { hash } from "bcrypt";
import { User } from "../database/models/user.js";

export const signup = async (req, res) => {
  const { password } = req.body;

  const hashedPassword = await hash(password, 10);

  req.body.password = hashedPassword;

  try {
    const newUser = await User.create(req.body);

    return res.json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
