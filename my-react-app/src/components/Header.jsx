import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">YourLogo</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/causes">Causes</a>
        <a href="/how-it-works">How It Works</a>
        <a href="/stories">Stories</a>
        <div className="button-container">
        <button className="Login" onClick={() => navigate('/login')}>Login</button>
        <button className="Register" onClick={() => navigate('/registration1')}>Register</button>
        </div>
        
      </nav>
    </header> 
  );
}

export default Header;