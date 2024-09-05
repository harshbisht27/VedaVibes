import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Veda Vibes</div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="videoSection" smooth={true} duration={500}>Video Section</Link></li>
        <li><Link to="analysis" smooth={true} duration={500}>Analysis</Link></li>
        <li><Link to="anyQuery" smooth={true} duration={500}>Any Query</Link></li> {/* Match ID */}
        <li><Link to="contactUs" smooth={true} duration={500}>Contact Us</Link></li>
        <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
