const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    wallpapperName: {
        type: String,
        required: true
    },
    createrName:{
        type: String,
        required: true
    },
    likes:{
        type: Number,
       
    },
      dislikes:{
        type: Number,
       
    },

    image:{
        type: String,
        required: true
    }
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel;