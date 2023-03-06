import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.png";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div
          className=" logotext"
          style={{ color: "#D4AF37", fontWeight: "700" }}
        >
          <h1>NEERU'S YOGA</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {!showNavbar && (
            <img className="menu-icon-img" src={Hamburger} alt="" />
          )}
          {showNavbar && (
            <img className="menu-icon-img-close" src={Close} alt="" />
          )}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/Aboutus">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">CONTACT US</NavLink>
            </li>
            <li>
              <NavLink to="/AboutYoga">ABOUT YOGA</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
