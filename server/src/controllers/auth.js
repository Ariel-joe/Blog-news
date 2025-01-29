import { User } from "../database/models/user.js";
import { compare, hash } from "bcrypt";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      username,
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const passwordsMatch = await compare(password, user.password);

    if (!passwordsMatch) {
      throw new Error("Invalid credentials");
    }

    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something Went Wrong.",
    });
  }

  res.json({
    message: "Login",
  });
};

export const signup = async (req, res) => {
  const { name, email, phone, username, password } = req.body;

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
