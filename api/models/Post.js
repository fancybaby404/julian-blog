import { Schema, model } from "mongoose";

const blogPostSchema = new Schema({
    // id: {type: Number, required: true, min: 1},
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true, min: 4 },
});

const blogPostModel = model("Post", blogPostSchema, "blogInfo");

export default blogPostModel;
