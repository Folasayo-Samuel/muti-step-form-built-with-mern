const mongoose = require('mongoose');
require("dotenv").config();


const connection_url = process.env.MONGODB_URI;
mongoose.connect(connection_url, () => console.log("Database Connected!"));
