
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="header">
      <img src="bg.png" alt="Logo" className="logo" />
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/how-it-works">How It Works</a>
        <a href="/stories">Stories</a>
        <a href="/causes">Causes</a>
        <button onClick={handleLogout} className="logout-btn">
              Logout
        </button>
      </nav>
    </header>
  );
}

export default Header;
