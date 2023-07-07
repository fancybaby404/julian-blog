import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const blogPostSchema = new mongoose.Schema({
    // id: {type: Number, required: true, min: 1},
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true, min: 4 },
});

export default mongoose.models.Post || mongoose.model("Post", blogPostSchema, "blogInfo");;
