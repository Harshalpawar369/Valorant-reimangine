const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = require('./app.js');
const connectDB = require('./db/db.js');

connectDB();

app.listen(8000, () => {
    console.log("server is running")
})