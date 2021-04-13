import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg color-nav container-fluid">
      <Link className="navbar-brand" to="/" style={{ color: "gold" }}>
        Ben Flynn
      </Link>
      <div>
        <ul className="navbar-nav" >
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/myportfolio"
              className={window.location.pathname === "/myportfolio" ? "nav-link active" : "nav-link"}
            >
              My Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;