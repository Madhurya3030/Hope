import React from 'react';

const aboutus = () => {
  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '4rem 2rem',
    textAlign: 'center'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#242424',
    marginBottom: '1.5rem'
  };

  const textStyle = {
    color: '#4b5563',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '0.5rem 1.5rem',
    borderRadius: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out'
  };

  const buttonHoverStyle = {
    backgroundColor: '#2563eb'
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={textStyle}>
          Welcome to our platform! We are dedicated to providing the best services
          with a focus on customer satisfaction, innovation, and excellence.
        </p>
        <p style={textStyle}>
          Our team of experts continuously strives to improve and deliver solutions
          that empower businesses and individuals alike.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
        </div>
      </div>
    </section>
  );
};

export default aboutus;
