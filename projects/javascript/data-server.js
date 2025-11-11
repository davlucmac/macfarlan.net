// Server-side data file (CommonJS format)
// Image library - using Unsplash placeholder images
const images = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop',
];

// Quotes collection
const quotes = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Life is what happens to you while you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is during our darkest moments that we must focus to see the light.",
  "The way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "You learn more from failure than from success.",
  "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.",
  "People who are crazy enough to think they can change the world, are the ones who do.",
  "We may encounter many defeats but we must not be defeated.",
  "The only person you are destined to become is the person you decide to be.",
  "Go confidently in the direction of your dreams. Live the life you have imagined.",
  "The two most important days in your life are the day you are born and the day you find out why.",
  "Your limitation—it's only your imagination.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn't just find you. You have to go out and get it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream bigger. Do bigger.",
];

// Helper function to get daily image based on date
const getDailyImage = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  return images[dayOfYear % images.length];
};

// Helper function to get random quote
const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

module.exports = {
  images,
  quotes,
  getDailyImage,
  getRandomQuote
};

