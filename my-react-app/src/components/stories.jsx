import React, { useState } from 'react';
import './Stories.css';

const storiesData = [
  {
    title: "Success Story 1",
    content: "A startup transformed their business using our services, achieving remarkable growth.",
  },
  {
    title: "Success Story 2",
    content: "An enterprise improved efficiency and customer satisfaction with our solutions.",
  },
  {
    title: "Success Story 3",
    content: "A small business expanded their market reach through our strategic guidance.",
  }
];

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % storiesData.length);
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? storiesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="stories" className="stories-section">
      <div className="stories-container">
        <h2 className="stories-heading">Our Stories</h2>
        <div className="carousel">
          <button className="carousel-button" onClick={prevStory}>❮</button>
          <div className="story-content">
            <h3>{storiesData[currentIndex].title}</h3>
            <p>{storiesData[currentIndex].content}</p>
          </div>
          <button className="carousel-button" onClick={nextStory}>❯</button>
        </div>
      </div>
    </section>
  );
};

export default Stories;
