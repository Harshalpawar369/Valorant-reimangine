const mongoose = require("mongoose");

async function connectDB(){
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error("MONGODB_URI is not defined. Check backend/src/.env");
    }

    try {
        await mongoose.connect(uri);
        console.log("mongoose connected");
    } catch (err) {
        console.log("there is a error", err);
    }
}

module.exports = connectDB;