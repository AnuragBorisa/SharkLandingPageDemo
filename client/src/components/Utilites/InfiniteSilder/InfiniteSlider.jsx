import React from "react";
import "./InfiniteSlider.css";

const logos = [
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/vawyva0ibnfnwkigngsb.png", alt: "Logo 1" },
  { id: 2, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/uigiurcab48n5tpiii9f.png", alt: "Logo 1" },
 
  { id: 4, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/cufioqvg1jmuknnyycdu.png", alt: "Logo 1" },
  { id: 5, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188762/images/k2qpmgzdfh4xu430jw9c.png", alt: "Logo 1" },
];

const carouselElements = logos.map((logo, index) => {
  return (
    <>
      <div className="logos-slide" key={index}>
        <img src={logo.src} alt={logo.alt} className="slider-img" />
      </div>
    </>
  );
});

const repeatedLogos = [...carouselElements, ...carouselElements];

const InfiniteSlider = () => {
  return (
    <>
      <div className="logos">
        {repeatedLogos}
      </div>
    </>
  );
};


export default InfiniteSlider;
