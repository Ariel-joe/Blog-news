import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

export const Category = new model("category", categorySchema);
