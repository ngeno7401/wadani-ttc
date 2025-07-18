import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#4D7A94', // WTTC blue
    color: 'white'
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    textDecoration: 'none',
    color: 'white'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '16px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>WTTC</Link>
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/programs" style={linkStyle}>Programs</Link>
        <Link to="/admissions" style={linkStyle}>Admissions</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
