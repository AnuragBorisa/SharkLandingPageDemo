import React from "react";
import { useState } from "react";
import "./MainPage.css";
import Form from "../Form/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
const MainPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const isClickedHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section className="main-pge-container">
      <div className="main-pge-right">
        <div className="heading ">
          <div className="wel-tag ">
            <h2 className="test ">
              Welcome to{" "}
              <span className="main-page-title-color  " >Shark Cybertech</span>
            </h2>
          </div>
          <div className="main-heading ">
            <h1 >
              Empowering Tomorrow's{" "}
              <span className="main-page-title-color">
                {" "}
                <br></br>Cyber Guardians{" "}
              </span>
            </h1>
          </div>
          
          <div className="main-para ">
            {" "}
            <p>
              Are you ready to become a cyber guardian? Join us at Shark
              Cybertech and be part of a revolution that’s dedicated to securing
              the digital frontier, and reinforcing the firewalls. Together,
              we’d not just learn about cybersecurity but shaping its future.
              The world needs guardians, and at Shark Cybertech, we are set to
              make you one.
            </p>
          </div>
        </div>
        <div className="main-page-btns">
          <button className="start-learn-btn reveal-text" onClick={isClickedHandler}>
            Start Learing For Free
          </button>
        </div>
      </div>
      <div className="main-pge-left">
        <Form className="form-pge" />
      </div>

      {isClicked && (
        <>
          {" "}
          <Form className="start-lern-form"></Form>
          <FontAwesomeIcon
            className="close-form-sign"
            onClick={isClickedHandler}
            icon={faXmark}
          />
        </>
      )}
    </section>
  );
};

export default MainPage;
