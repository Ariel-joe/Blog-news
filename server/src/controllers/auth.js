import { User } from "../database/models/user.js";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  console.log("Cookies in req:", req.cookies);

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

    // Generate a JWT Token
    const { _id } = user;

    const jwtInfo = {
      _id,
    };

    // Sign the JWT using the secret key in the env
    const token = jwt.sign(jwtInfo, process.env.JWT_SECRET, {
      expiresIn: 24 * 60 * 60,
    });

    console.log({ token });

    // Add the token in cookie
    res.cookie(process.env.AUTH_COOKIE_NAME, token, {
      maxAge: 24 * 60 * 60 * 1000,
      // can only be accessed by server requests
      httpOnly: true,
      // path = where the cookie is valid
      // path: "/",
      // domain = what domain the cookie is valid on
      // domain: "localhost",
      // secure = only send cookie over https
      secure: process.env.NODE_ENV === "production",
      // sameSite = only send cookie if the request is coming from the same origin
      sameSite: "lax", // "strict" | "lax" | "none" (secure must be true)
      // maxAge = how long the cookie is valid for in milliseconds
    });

    res.cookie("test_cookie", "This is a test cookie", {
      maxAge: 24 * 60 * 60 * 1000,
      secure: false,
      sameSite: "lax",
    });

    return res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log({ error });

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
