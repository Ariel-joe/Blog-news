import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: {type: String, required: true},
    image: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, default: "Draft" },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

export const Blog = new model ("blog", blogSchema)
