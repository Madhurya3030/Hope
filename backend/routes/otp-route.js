const express = require("express");
const router = express.Router(); 
const User = require("../models/user");
const twilio = require("twilio");

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.post("/send-otp", async (req, res) => {
    const { phone } = req.body;

    if (!phone) {
        return res.status(400).json({ message: "Phone number is required" });
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000);

    try {
        await client.messages.create({
            body: `Your OTP code is: ${generatedOtp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone,
        });

        // Store OTP in MongoDB
        await User.findOneAndUpdate({ phone }, { otp: generatedOtp }, { upsert: true, new: true });

        res.json({ message: "OTP sent successfully" });
    } catch (error) {
        console.error("Twilio Error:", error);
        res.status(500).json({ message: "Error sending OTP" });
    }
});


router.post("/verify-otp", async (req, res) => {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
        return res.status(400).json({ message: "Phone number and OTP are required" });
    }

    const user = await User.findOne({ phone });

    if (!user || user.otp !== otp) {
        return res.status(400).json({ message: "Invalid OTP" });
    }

    res.json({ message: "OTP verified successfully" });
});


module.exports = router;
