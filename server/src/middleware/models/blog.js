import { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    status: {type: String, default: "Draft"},
    category: {type: String, }

})