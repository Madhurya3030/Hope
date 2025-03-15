import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      try {
        const response = await axios.post("http://localhost:4000/chat", { prompt: userInput });
        const botResponse = response.data.response;
  
        if (botResponse.action === "navigate") {
          navigate(botResponse.page); // Navigate to the specified page
        } else {
          setChatHistory([...chatHistory, { user: userInput, bot: botResponse }]);
        }
        setUserInput("");
      } catch (err) {
        console.error("Chatbot request failed:", err.response?.data || err.message);
      }
    }
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <div>
        {chatHistory.map((chat, index) => (
          <p key={index}>
            <strong>User:</strong> {chat.user} <br />
            <strong>Bot:</strong> {chat.bot}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
