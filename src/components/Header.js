import logoImage from "../images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logoImage} alt="restaurant-logo" className="logo-img" />
      <ul className="nav-bar">
        <li>Home </li>
        <li>About </li>
        <li>Contact </li>
        <li>Cart </li>
      </ul>
    </div>
  );
};

export default Header;
