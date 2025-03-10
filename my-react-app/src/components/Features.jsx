import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>How It Works</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Step 1</h3> 
          <p>Register as a Citixen with true identity.</p>
        </div>
        <div className="card">
          <h3>Step 2</h3>
          <p>Find people in poverty.</p>
        </div>
        <div className="card">
          <h3>Step 3</h3>
          <p>Help then by giving their details in the form.</p>
        </div>
        <div className="card">
          <h3>Step 4</h3>
          <p>HopeBridge connects with the poverty people.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;