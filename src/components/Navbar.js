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
                <a href="javascript:void(0)">Company</a>
              </li>
              <li>
                <a href="javascript:void(0)">History</a>
              </li>
              <li>
                <a href="javascript:void(0)">Career</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="javascript:void(0)">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
