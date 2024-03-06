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
        <a href="/" className="header-links-effects">
          {" "}
          Home{" "}
        </a>
        <a href="#two" className="header-links-effects">
          {" "}
          Courses{" "}
        </a>
        <a href="#three" className="header-links-effects">
          {" "}
          Certificates{" "}
        </a>
        <a href="#four" className="header-links-effects">
          {" "}
          Contact{" "}
        </a>

        {/* <NavLink className="header-links-effects" to="/">
          Home
        </NavLink>
        <NavLink className="header-links-effects" to="#two">
          Course
        </NavLink>
        <NavLink className="header-links-effects" to="#three">
          Certificates
        </NavLink>
        <NavLink className="header-links-effects" to="#four">
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
            <a
              href="/"
              className="internal-mobile-links"
              onClick={isClickedHandler}
            >
              {" "}
              <LeftToRight> Home </LeftToRight>{" "}
            </a>
            <a
              href="#two"
              className="internal-mobile-links"
              onClick={isClickedHandler}
            >
              {" "}
              <LeftToRight> Courses </LeftToRight>{" "}
            </a>
            <a
              href="#three"
              className="internal-mobile-links"
              onClick={isClickedHandler}
            >
              {" "}
              <LeftToRight> Certificates </LeftToRight>{" "}
            </a>
            <a
              href="#four"
              className="internal-mobile-links"
              onClick={isClickedHandler}
            >
              {" "}
              <LeftToRight> Contact </LeftToRight>{" "}
            </a>
            {/* <NavLink className="internal-mobile-links" to="/">
              <LeftToRight> Home </LeftToRight>
            </NavLink>
            <NavLink className="internal-mobile-links" to="/two">
            <LeftToRight >Courses</LeftToRight>
            </NavLink>
            <NavLink className="internal-mobile-links" to="/three">
            <LeftToRight >Certificates</LeftToRight>
            </NavLink>
            <NavLink className="internal-mobile-links" to="/four">
            <LeftToRight > Contact </LeftToRight> 
            </NavLink> */}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
