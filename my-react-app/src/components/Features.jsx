import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Why Donate Through Us?</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Trust & Transparency</h3>
          <p>100% of your donation reaches the cause.</p>
        </div>
        <div className="card">
          <h3>Tax Benefits</h3>
          <p>Get tax exemptions under 80G.</p>
        </div>
        <div className="card">
          <h3>Verified NGOs</h3>
          <p>We partner with trusted NGOs across the country.</p>
        </div>
        <div className="card">
          <h3>Impact Stories</h3>
          <p>See how your donations are changing lives.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;