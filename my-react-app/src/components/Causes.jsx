import React from 'react';
import './Causes.css';

function Causes() {
  return (
    <section className="causes">
      <h2>Support a Cause You Care About</h2>
      <div className="cause-cards">
        <div className="cause-card">
          <img src="cause1.jpg" alt="Educate a Child" />
          <h3>Educate a Child</h3>
          <p>Help children get access to quality education.</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
          <p>₹50,000 raised out of ₹1,00,000</p>
          <button className="donate-button">Donate Now</button>
        </div>
        {/* Add more cause cards */}
      </div>
    </section>
  );
}

export default Causes;