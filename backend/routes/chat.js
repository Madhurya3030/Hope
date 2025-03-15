const express = require("express");
const router = express.Router();
const { generateResponse } = require("../service");


router.post("/chat", async (req, res) => {
    const { prompt } = req.body;
  
    try {
      const response = await generateResponse(prompt);
      if (!response) {
        throw new Error("Empty response from AI");
      }
      res.json({ response });
    } catch (error) {
      console.error("Error in /chat route:", error.message);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });
  
module.exports = router; 


