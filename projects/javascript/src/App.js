import React, { useState, useEffect } from 'react';
import './App.css';
import { getDailyImage, getRandomQuote } from './data';

function App() {
  const [featuredImage, setFeaturedImage] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Set daily image and random quote on component mount
    setFeaturedImage(getDailyImage());
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">MACFARLAN</h1>
          <h2 className="subtitle">a collection</h2>
        </header>
        
        <main className="main-content">
          <div className="image-container">
            {featuredImage && (
              <img 
                src={featuredImage} 
                alt="Featured daily image" 
                className="featured-image"
                loading="lazy"
              />
            )}
          </div>
          
          <div className="quote-container">
            <p className="quote">"{quote}"</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

