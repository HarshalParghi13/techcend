const express = require('express');
const cors = require('cors');
require('dotenv').config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim()).filter(Boolean)
  : true;

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'techcend-server' });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'healthy' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const message = String(req.body?.message || '').trim();

    if (!message) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    const userMsg = message.toLowerCase();
    let responseText = '';

    if (userMsg.includes('price') || userMsg.includes('cost') || userMsg.includes('quote')) {
      responseText = 'Every project at Techcend is custom-built, so pricing varies. Use the Contact form and our lead engineer will send you an accurate quote.';
    } else if (userMsg.includes('service') || userMsg.includes('what do you do') || userMsg.includes('offer')) {
      responseText = 'We specialize in premium web design, scalable React/Node web apps, and enterprise-grade infrastructure.';
    } else if (userMsg.includes('hello') || userMsg.includes('hi') || userMsg.includes('hey')) {
      responseText = 'Hello there! Welcome to Techcend. Are you looking to build a new website or upgrade an existing platform?';
    } else if (userMsg.includes('contact') || userMsg.includes('email') || userMsg.includes('reach')) {
      responseText = 'You can reach our team at hello@techcend.com or by filling out the Contact form.';
    } else {
      responseText = "I'm sorry, I didn't quite catch that. Try asking me about our services, pricing, or how to contact us.";
    }

    return res.json({ text: responseText });
  } catch (error) {
    console.error('Chat request failed:', error);
    return res.status(500).json({ error: 'Failed to process message.' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Techcend server running on port ${PORT}`);
});

server.on('error', error => {
  console.error('Failed to start Techcend server:', error);
  process.exit(1);
});
