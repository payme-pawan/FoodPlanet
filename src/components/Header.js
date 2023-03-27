import logoImage from "../images/logo.jpg";
import { useState } from "react";






const Header = () => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img src={logoImage} alt="restaurant-logo" className="logo-img" />
      <ul className="nav-bar">
        <li>Home </li>
        <li>About </li>
        <li>Contact </li>
        <li>Cart </li>
        <li> { isLoggedIn ?
        (<button onClick = {() => setIsLoggedIn(false)} > Log Out  </button>)
        :
        (<button onClick={()=> setIsLoggedIn(true)} > Log In</button>) }  </li>
      </ul>
    </div>
  );
};

export default Header;
