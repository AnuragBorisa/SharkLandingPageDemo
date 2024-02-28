import React, { useState } from "react";
import people from "./Resources/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import RevealHeading from "../RevealHeading/RevealHeading";
import "./Review.css"
const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex=0;
  const maxIndex=people.length-1;

  
  const getRandomPerson=()=>{
    const getRandomIntInclusive=(min, max) =>{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let randomIndex=getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex===index){
      randomIndex=index+1
    }
    setIndex(checkNumber(randomIndex));

  }
  

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
     <RevealHeading> <h4 className="author">{name}</h4> </RevealHeading>
     <RevealHeading>  <p className="job">{job}</p> </RevealHeading>
     <RevealHeading>   <p className="info">{text}</p> </RevealHeading>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={getRandomPerson}>Get Random Review</button>
    </article>
  );
};

export default Review;
