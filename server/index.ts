import express from 'express';
const celestialBodies = require('./data.json'); // In a production application this would come from the database

const app = express();
const PORT = 8000;

app.get('/celestial-bodies', (req,res) => {
  res.json(celestialBodies);
});

app.listen(PORT, () => {
  console.log(`API Server is running @ http://localhost:${PORT}`);
});
