import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Form from "../Form/Form";
import LeftToRight from "../Utilites/Animations/LeftToRight";
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const [headerBtnClicked, setIsHeaderBtnClicked] = useState(false);
  const isHeaderBtnClickedHandler = () => {
    setIsHeaderBtnClicked(!headerBtnClicked);
  };
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
        <a className="header-links-effects" href="/">
          Home
        </a>
        <a className="header-links-effects" href="#two">
          Courses
        </a>
        <a className="header-links-effects" href="#three">
          Certificates
        </a>
        <a className="header-links-effects" href="#four">
          Contact
        </a>

        {/* <NavLink className="header-links-effects" to="/">
          Home
        </NavLink>
        <NavLink className="header-links-effects" to="/#two">
          About
        </NavLink>
        <NavLink className="header-links-effects" to="/">
          News
        </NavLink>
        <NavLink className="header-links-effects" to="/">
          Contact
        </NavLink> */}
      </div>

      <button className="header-btn" onClick={isHeaderBtnClickedHandler}>
        Get Started{" "}
      </button>
      {headerBtnClicked && (
        <>
          {" "}
          <Form className="header-btn-clicked-form"></Form>{" "}
          <FontAwesomeIcon
            className="close-form"
            onClick={isHeaderBtnClickedHandler}
            icon={faXmark}
          />
        </>
      )}
      <div className="header-mobile-view">
        <FontAwesomeIcon
          icon={isClicked ? faXmark : faBars}
          onClick={isClickedHandler}
          className="hambuger"
        />
        {isClicked ? (
          <div className="mobileLinks">
            <a className="internal-mobile-links" href="/">
              Home
            </a>
            <a className="internal-mobile-links" href="#two" onClick={(isClickedHandler)}>
              Courses
            </a>
            <a className="internal-mobile-links" href="#three" onClick={(isClickedHandler)}>
              Certificates
            </a>
            <a className="internal-mobile-links" href="#four" onClick={(isClickedHandler)}>
              Contact
            </a>
            {/* <NavLink className="internal-mobile-links" to="/">
              <LeftToRight> Home </LeftToRight>
            </NavLink>
            <NavLink className="internal-mobile-links" to="/#two">
            <LeftToRight >Courses</LeftToRight>
            </NavLink>
            <NavLink className="internal-mobile-links" to="/#three">
            <LeftToRight >Certificates</LeftToRight>
            </NavLink>
            <NavLink className="internal-mobile-links" to="/#four">
            <LeftToRight >Contact</LeftToRight> 
            </NavLink> */}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
