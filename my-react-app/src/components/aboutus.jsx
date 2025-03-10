import React from 'react';

const aboutus = () => {
  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '0.5rem 1rem',
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


  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={textStyle}>
        At HopeBridge, we are dedicated to making a meaningful impact in the lives of those in need. Our platform is built on the belief that every individual deserves a helping hand and a chance for a better life.
        </p>
        <p style={textStyle}>
        Our mission is to bridge the gap between those who want to help and those who need help the most. By creating a simple and reliable platform, we empower citizens to connect with and support people facing poverty, ensuring that help reaches those who need it most.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
        </div>
      </div>
    </section>
  );
};

export default aboutus;
