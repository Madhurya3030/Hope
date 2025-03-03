const express = require("express");
const bcrypt = require("bcryptjs"); // For hashing passwords
const router = express.Router();
const User = require("../models/user");

// POST route for user registration
router.post("/registration1", async (req, res) => {
  try {
    const { phone, firstName, lastName, dob, aadhar, location, username, password, confirmPassword } = req.body;

    // Check if user with this phone exists (from OTP step)
    const existingUser = await User.findOne({ phone });

    if (!existingUser) {
      return res.status(400).json({ error: "OTP verification required before registration." });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: "Username already taken. Choose another." });
    }
 
    // Validate password matching
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    // Hash the password before storing it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update existing user details with new fields
    await User.findOneAndUpdate(
      { phone }, // Find by phone
      { firstName, lastName, dob, aadhar, location, username, password: hashedPassword }, // Update fields
      { new: true } // Return the updated document
    );

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
