import React from 'react';
import './Stories.css';

const storiesData = [
  {
    title: "Rebuilding a Family's Life",
    content: "After losing their home to a natural disaster, HopeBridge helped the Smith family secure shelter and essential supplies. Today, they have rebuilt their lives and are thriving in their community.",
    image: "rebuilt.webp"
  },
  {
    title: "Empowering Education",
    content: "HopeBridge connected a young girl named Asha with a sponsor for her education. Now, she's excelling in school and dreams of becoming a doctor to give back to her community.",
    image: "education.webp"
  },
  {
    title: "From Homeless to Hopeful",
    content: "John, who struggled with homelessness for years, was introduced to a support program through HopeBridge. He now has stable housing and is working towards financial independence.",
    image: "hopeful.jpeg"
  }
];

const Stories = () => {
  return (
    <section id="stories" className="stories-section">
      <div className="stories-container">
        <h2 className="stories-heading">Our Stories</h2>
        <div className="stories-grid">
          {storiesData.map((story, index) => (
            <div key={index} className="story-card">
              <img
                src={story.image}
                alt={story.title}
                className="story-image"
              />
              <div className="story-text">
                <h3>{story.title}</h3>
                <p>{story.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
