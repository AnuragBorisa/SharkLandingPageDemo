// FooterComponent.jsx
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import sharklogo from "../resourcecs/Images/Shar_Logo-01 (1).png"
import RevealHeading from "../Utilites/RevealHeading/RevealHeading";
const FooterComponent = () => {
  return (
    
    <footer className="footer">
      
      <div className="footer-left">
        <div className="footer-logo-div">
        <img className="footer-logo" src={sharklogo} alt="logo"></img>
        </div>
       
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <div className="about">
            <h4>ABOUT</h4>
            <ul>
              <li>
                <a href="#">Get to Know</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h4>FOLLOW US</h4>
            <ul>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Discord</a>
              </li>
            </ul>
          </div>
          <div className="legal">
            <h4>LEGAL</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="footer-line"></span>
      <div className="footer-mid">
        <div className="footer-copy">
          <p>© 2024 SharK CyberTech™</p>
        </div>
        <div className="footer-social">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  
  );
};

export default FooterComponent;
