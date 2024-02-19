import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const isSetBgColor = () => {
    const scrollY = window.pageYOffset;
    if (scrollY > 100) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };
  const isClickedHandler = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSetBgColor);
    return () => {
      window.removeEventListener("scroll", isSetBgColor);
    };
  }, []);
  return (
    <nav className={bgColor ? "navbarsroll" : "navBar"}>
      <h1 className="logo">SHARK!!</h1>
      {/* <img src={sharklogo} alt='logo' className='header-logo'></img> */}

      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">News</NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>

      <button className="header-btn">Get Started </button>
      <div className="header-mobile-view">
        <FontAwesomeIcon
          icon={faBars}
          onClick={isClickedHandler}
          className="hambuger"
        />
        {isClicked ? (
          <div className="mobileLinks">
            <NavLink className="internal-mobile-links" to="/">
              Home
            </NavLink>
            <NavLink className="internal-mobile-links" to="/">
              About
            </NavLink>
            <NavLink className="internal-mobile-links" to="/">
              News
            </NavLink>
            <NavLink className="internal-mobile-links" to="/">
              Contact
            </NavLink>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
