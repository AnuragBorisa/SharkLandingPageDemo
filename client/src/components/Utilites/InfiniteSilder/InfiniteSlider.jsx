import React from "react";
import "./InfiniteSlider.css";

const logos = [
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709124661/images/snxxgrf3nhhumrq81ugg.png", alt: "Logo 1" },
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709124661/images/kxyeyl0cwpf1wzuzzpw4.png", alt: "Logo 1" },
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709124660/images/cuykliw34tgoarns2ypv.png", alt: "Logo 1" },
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709124660/images/d1afeljrjhjwixsz38h8.png", alt: "Logo 1" },
  { id: 1, src: "https://res.cloudinary.com/dhuagtzvw/image/upload/v1709124660/images/nyk4ejmi6i8vcfc9qaxu.png", alt: "Logo 1" },
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
