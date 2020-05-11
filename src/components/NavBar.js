import React from "react";
import { Link } from "react-router-dom";
import logo from "../just_pdf.png";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} width="15%" />
      </Link>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/books">
          <li>Books</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
