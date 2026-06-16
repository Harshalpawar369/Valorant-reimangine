const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();

const allowedOrigins = [
  'http://localhost:3000', 
  process.env.FRONTEND_URL 
];

const authRoutes = require('./routes/authRoutes.js')
const postRoutes = require('./routes/postRoutes.js')
const aiRoutes = require('./routes/aiRoutes.js')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors({ origin: allowedOrigins, methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }));

app.use('/api/valorant', authRoutes);
app.use('/api/valorant', postRoutes)
app.use('/api/valorant/ai', aiRoutes)


app.get("/", function(req,res){
    res.send("backend is running")
})


module.exports = app;