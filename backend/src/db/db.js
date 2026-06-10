const mongoose = require("mongoose");

async function connectDB(){
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.warn("MONGODB_URI is not defined. Skipping database connection.");
        return;
    }

    try {
        await mongoose.connect(uri);
        console.log("mongoose connected");
    } catch (err) {
        console.log("there is a error", err);
    }
}

module.exports = connectDB;