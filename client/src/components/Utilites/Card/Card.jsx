import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const coursesandtitles = [{}];

const Card = () => {
  return (
    <div className="Card">
      <div className="card-ctn">
        <h2 className="card-ctn-title">SEO</h2>
        <h1 className="card-ctn-para">Creating dynamic sites with CMS React + SEO for React Websites</h1>
      </div>
    
      <div className="card-redirect">
        <button className="card-read-more">READ MORE `${"->"}`</button>
        <img className="card-img" src="" alt="logo"></img>
      </div>
    </div>
  );
};

export default Card;
