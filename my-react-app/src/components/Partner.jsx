import React from 'react';
import './Partners.css';

const partnersData = [
  { name: "Tata Trusts", logo: "tata.png" },
  { name: "Reliance Industries", logo: "reliance.png" },
  { name: "Infosys", logo: "infosys.jpg" },
  { name: "Mahindra Group", logo: "mahindra.png" },
  { name: "Wipro", logo: "wiprs.png" },
  { name: "Axis Bank", logo: "axisbank.png" }
];

const Partners = () => {
  return (
    <section id="partners" className="partners-section">
      <h2 className="partners-heading">Our Partners</h2>
      <div className="partners-slider">
        <div className="partners-track">
          {[...partnersData, ...partnersData].map((partner, index) => (
            <div key={index} className="partner-card">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
                onError={(e) => e.target.src = 'fallback.png'} // Fallback image
              />
              <h3 className="partner-name">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
