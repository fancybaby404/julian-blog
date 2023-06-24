import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Post from "./models/Post.js";
import cors from 'cors'

const PORT = 4000
dotenv.config();
const app = express();
app.use(cors())

app.use(express.json());

mongoose.connect(
    // eslint-disable-next-line no-undef
    process.env.URL,
);


// Create entry on the database
// TODO: req.body (INPUT) for title, description, date.
app.post("/create", async (req, res) => {
    const { title, description, date } = "";

    try {
        const postDoc = await Post.create({
            title: title,
            description: description,
            date: date,
        });
        res.status(200).json(postDoc);
    } catch (e) {
        res.status(404).json(e);
    }
});

// Grab all data from the database and render on front page
app.get('/data', async (req, res) => {
    const result = await Post.find()
    res.json(result)
    // .then((doc) => {
    //     res.json(doc.length)
    // })
})

app.post('/getpost', async (req, res) => {
    const blogId = req.body
    const data = await Post.findById(blogId.id)
    res.json(data)
})

mongoose.connection.once('open', () => {
    mongoose.connection.useDb('blog');
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("Connected to port " + PORT));
})