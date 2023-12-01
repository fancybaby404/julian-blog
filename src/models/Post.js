import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now().toLocaleString().split('T')[0] , required: true, min: 4 },
});

export default mongoose.models.Post || mongoose.model("Post", blogPostSchema, "blogInfo");;
