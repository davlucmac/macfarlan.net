const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import data
const { images, quotes, getDailyImage, getRandomQuote } = require('./data-server');

// API Routes

// Get daily featured image
app.get('/api/image', (req, res) => {
  try {
    const dailyImage = getDailyImage();
    res.json({ image: dailyImage });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get daily image' });
  }
});

// Get random quote
app.get('/api/quote', (req, res) => {
  try {
    const quote = getRandomQuote();
    res.json({ quote });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get quote' });
  }
});

// Get both image and quote
app.get('/api/content', (req, res) => {
  try {
    const dailyImage = getDailyImage();
    const quote = getRandomQuote();
    res.json({ 
      image: dailyImage,
      quote 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get content' });
  }
});

// Serve static files from the React app build directory
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});

