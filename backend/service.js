const axios = require("axios");

require("dotenv").config(); 

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const predefinedResponses = {
    login: { action: "navigate", page: "/login" },
    register: { action: "navigate", page: "/registration1" },
    home: { action: "navigate", page: "/" },
  };

const generateResponse = async (prompt) => {
    try {

        if (predefinedResponses[prompt.toLowerCase()]) {
    return predefinedResponses[prompt.toLowerCase()];
  }

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            { contents: [{ parts: [{ text: prompt }] }] },
            { headers: { "Content-Type": "application/json" } }
        );

        // Extract response text
        const botResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
        
        return botResponse;

    } catch (error) {
        console.error("Error generating response:", error.response?.data || error.message);
        return "Error generating response";
    }
};

module.exports = { generateResponse };
