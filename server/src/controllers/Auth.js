import { compare, hash } from "bcrypt";
import { User } from "../database/models/user.js";

// signup function
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

// login function
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("invalid credentials");
    }

    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
