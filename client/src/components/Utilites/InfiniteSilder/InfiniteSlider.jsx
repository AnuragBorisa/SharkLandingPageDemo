import React from "react";
import logone from "./Resources/Logos/American-Airlines-PNG-Photo.png";
import logotwo from "./Resources/Logos/kindpng_2735331.png";
import logothree from "./Resources/Logos/logo-virgin (1).png";
import logofour from "./Resources/Logos/PngItem_1320262.png";
import "./InfiniteSlider.css";

const logos = [
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1708413492/images/yogpqfpluyh4dkpc4gbd.png", alt: "Logo 1" },
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1708413492/images/tyi8ldzbypaoau0zsjgf.png", alt: "Logo 1" },
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1708413492/images/voiow5uudfmln2m9ohme.png", alt: "Logo 1" },
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1708413492/images/p69wiadjrz80cdhxt7iu.png", alt: "Logo 1" },
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1708413492/images/yogpqfpluyh4dkpc4gbd.png", alt: "Logo 1" },
 
  
];
const carouselElements = logos.map((logo, index) => {
  return (<>
    <div className="logos-slide" key={index}>
      <img src={logo.src} alt={logo.alt} className="slider-img"></img>
      
    </div>
   
   </>
  );
});
const InfiniteSlider = () => {
  return (
    <>
    <div className="logos">
      {carouselElements} 
      {carouselElements} 
    </div>
   
   </>
  );
};

export default InfiniteSlider;
