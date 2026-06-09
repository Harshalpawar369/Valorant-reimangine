const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
},
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true,
        unique: true
    }
},
    {
        timestamps: true
    }
)


const userModel = mongoose.model("user", userShema);

module.exports = userModel;