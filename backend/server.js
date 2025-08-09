// server.js
const express = require('express');
const cors = require('cors');
const { checkUrlPhishing } = require('./phishing');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/check-url', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const result = await checkUrlPhishing(url); // Call model logic
  res.json(result);
});

app.get('/api/compare-accuracy', (req, res) => {
  // Mock accuracy comparison data
  res.json([
    { name: 'Your Model', accuracy: 0.92 },
    { name: 'Google Safe Browsing', accuracy: 0.96 },
    { name: 'VirusTotal', accuracy: 0.93 },
    { name: 'PhishTank', accuracy: 0.89 }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
