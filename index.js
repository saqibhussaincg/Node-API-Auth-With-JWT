const express = require("express");
const app = express();
const dotev = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoute = require('./routes/auth');

dotev.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
() => console.log("connected to DB"));

// Moddleware
app.use(express.json());

// Route Middlewares
// run on off route ye prefix hai api > user > register
app.use('/api/user', authRoute);

app.listen(5000, () => console.log("server is running"));