import { hash } from "bcrypt";
import { User } from "../database/models/user.js";

export const signup = async (req, res) => {
  const { name, phone, email, username, password } = req.body;

  const hashedPassword = await hash(password, 10);

  const userData = {
    name,
    phone,
    email,
    username,
    hashedPassword,
  };

  try {
    const newUser = User.create(userData);

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
