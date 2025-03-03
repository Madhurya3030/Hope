const express = require("express");
const multer = require("multer");
const path = require("path");
const ReportCase = require("../models/help");

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../uploads/"),
    filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Handle report form submission
router.post("/report", upload.single("photo"), async (req, res) => {
  try {
    const { name, age, children, studying, healthIssues, healthDetails, address, location, earnings, sufficientFood, needHelp } = req.body;

    const newReport = new ReportCase({
      name,
      age,
      children,
      studying,
      healthIssues,
      healthDetails: healthIssues === "yes" ? healthDetails : "",
      address,
      location,
      earnings,
      sufficientFood: sufficientFood === "yes",
      needHelp,
      photo: req.file ? req.file.filename : null, // Store uploaded file name
    });

    await newReport.save();
    res.status(201).json({ message: "Report submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting report", error });
  }
});

// Get all reports
router.get("/reports", async (req, res) => {
  try {
    const reports = await ReportCase.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reports", error });
  }
});

module.exports = router;
