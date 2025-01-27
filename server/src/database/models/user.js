import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

export const User = model("user", userSchema);
