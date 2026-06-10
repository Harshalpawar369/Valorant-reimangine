const { randomUUID } = require('node:crypto');
const postModel = require('../models/post.js');
const {uploadFile} = require('../services/cloudStorageservice.js')
const { v7:uuid } = require('uuid')

async function createPost(req,res){

    try {

        console.log("Body:", req.body);
        console.log("File:", req.file);

      if (!req.file) return res.status(400).json({ message: "No image provided" });

        const uploadResponse = await uploadFile(req.file.buffer, Date.now() + "-" + uuid.v7n);

        const newPost = await postModel.create({
            wallpapperName: req.body.wallpapperName,
            createrName: req.body.createrName,
            likes: req.body.likes,
            dislikes:req.body.dislikes,
            image: uploadResponse.url 
        });

        return res.status(201).json({
            message: "Item added successfully",
            post: newPost
        });

    } catch (error) {
        res.status(500).json({ message: "Error adding item", error: error.message });
    }
}

async function getPosts(req, res) {
    try {
        const posts = await postModel.find();   
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error: error.message });
    }
}


module.exports = { createPost, getPosts };