import React from 'react';
import '../styles/header.css'; // Import header.css
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../images/conde-nast-logo.png'

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
