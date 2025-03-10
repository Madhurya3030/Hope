import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>How It Works</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Register as a Citizen</h3> 
          <p>Join our platform by registering with your true identity, becoming part of a growing network of compassionate individuals.</p>
        </div>
        <div className="card">
          <h3>Find People in Poverty</h3>
          <p>Use our platform to identify and locate people struggling with poverty in your community.</p>
        </div>
        <div className="card">
          <h3>Submit Their Details</h3>
          <p>Provide accurate information about those in need through our secure form, ensuring that the right help reaches the right people.</p>
        </div>
        <div className="card">
          <h3>Bridge the Gap</h3>
          <p>HopeBridge works to connect these individuals with resources, support, and opportunities, helping them improve their quality of life.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;