const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();

const authRoutes = require('./routes/authRoutes.js')
const postRoutes = require('./routes/postRoutes.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use('/api/valorant', authRoutes);
app.use('/api/valorant', postRoutes)


app.get("/", function(req,res){
    res.send("backend is running")
})


module.exports = app;