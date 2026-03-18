// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// const app = express();

// // Enable CORS so your Vite frontend can talk to this server
// app.use(cors());
// app.use(express.json());

// // Initialize Gemini
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // Create the AI Model with a strict "Techcend Persona"
// const model = genAI.getGenerativeModel({
//   model: "gemini-pro-latest", // <--- TRY THIS MODEL INSTEAD
//   systemInstruction: `You are the official AI assistant for 'Techcend', a premium software engineering and IT agency. 
//   Your tone is professional, helpful, confident, and slightly futuristic. 
//   Your goal is to answer questions about web development, UI/UX design, and custom software. 
//   Keep your answers relatively short and punchy. 
//   If asked about pricing, say that every project is custom and encourage them to use the Contact form. 
//   Never invent fake case studies or specific prices. Always be polite.`
// });

// app.post('/api/chat', async (req, res) => {
//   try {
//     const { message, history } = req.body;

//     // Convert frontend history format to Gemini's required format
//     const formattedHistory = history.map(msg => ({
//       role: msg.isBot ? "model" : "user",
//       parts: [{ text: msg.text }],
//     }));

//     // Start a chat session with the history
//     const chat = model.startChat({
//       history: formattedHistory,
//     });

//     // Send the new message to Gemini
//     const result = await chat.sendMessage(message);
//     const responseText = result.response.text();

//     res.json({ text: responseText });

//   } catch (error) {
//     console.error("Error communicating with Gemini:", error);
//     res.status(500).json({ error: "Failed to process message." });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🧠 Techcend AI Brain running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Simulate the AI "typing" delay (1.5 seconds) so your UI animation plays
    await new Promise(resolve => setTimeout(resolve, 1500));

    const userMsg = message.toLowerCase();
    let responseText = "";

    // Smarter keyword matching
    if (userMsg.includes('price') || userMsg.includes('cost') || userMsg.includes('quote')) {
      responseText = "Every project at Techcend is custom-built, so pricing varies. I highly recommend using the Contact form above so our lead engineer can give you an accurate quote!";
    } else if (userMsg.includes('service') || userMsg.includes('what do you do') || userMsg.includes('offer')) {
      responseText = "We specialize in premium Web Design, scalable Web App Development (React/Node), and enterprise-grade infrastructure. Check out our Services section for more details!";
    } else if (userMsg.includes('hello') || userMsg.includes('hi') || userMsg.includes('hey')) {
      responseText = "Hello there! Welcome to Techcend. Are you looking to build a new website or upgrade an existing platform?";
    } else if (userMsg.includes('contact') || userMsg.includes('email') || userMsg.includes('reach')) {
      responseText = "You can reach our team directly at hello@techcend.com or by filling out the Contact form at the bottom of the page!";
    } else {
      // The new "Gibberish / Unknown" Fallback Response
      responseText = "I'm sorry, I didn't quite catch that. I am the Techcend AI demo! Try asking me about our **services**, **pricing**, or how to **contact** us.";
    }

    // Send the fake response back to your React app exactly like Gemini would
    res.json({ text: responseText });

  } catch (error) {
    res.status(500).json({ error: "Failed to process message." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🛠️ Techcend DEV MOCK Brain running on port ${PORT}`);
});