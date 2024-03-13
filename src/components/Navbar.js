import React, { useState } from "react";
import "../styles/navbar.css"; // Import navbar.css
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="top-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span onClick={toggleSubMenu}>About</span>
          {showSubMenu && (
            <ul>
              <li>
                <Link to="/company">Company</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
