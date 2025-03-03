const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require("body-parser");
require("dotenv").config();
const User = require("./models/user.js");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const otproute = require("./routes/otp-route.js");
const loginroute = require("./routes/loginroute.js");
const helproute = require("./routes/helproute.js");
const app = express();
const path = require("path");


// Middleware
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

 
connectDB();

app.use("/", userRoutes);
app.use("/",otproute);
app.use("/",loginroute);

app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded images
app.use("/", helproute);

// Start backend server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
