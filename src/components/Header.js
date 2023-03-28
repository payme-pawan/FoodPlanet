import logoImage from "../images/logo.jpg";
import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img src={logoImage} alt="restaurant-logo" className="logo-img" />
      <ul className="nav-bar">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About Us </Link>
        </li>
        <li>
          <Link to="/contact">Contact Us </Link>
        </li>
        <li>Cart </li>

        <li>
          {" "}
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}> Log Out </button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}> Log In</button>
          )}{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
