const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true },
  aadhar: { type: String, required: true, unique: true },
  phone: { type: String, required: true ,unique: true},
  otp: { type: String, required: true },
  location: { type: String, required: true },
  username: { type: String, required: true, unique: true }, // Added username
  password: { type: String, required: true },
});

module.exports = mongoose.model("reg", userSchema);
 