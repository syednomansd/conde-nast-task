import React from "react";
import "../styles/footer.css"; // Import footer.css
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <nav className="foot-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          <p>© 2024 Condé Nast</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
