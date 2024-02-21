import React from "react";
import "./PromisesCard.css"
const promisesup = [
  { 
    img: "logo",
    title: "VAPT",
    para: "The fastest way to grow profitably",
  },
  { 
    img: "logo",
    title: "CEH",
    para: "The fastest way to grow profitably",
  },
];
const promisesdown = [{
  img: "logo",
  title: "CISA",
  para: "",
},
{ 
  img: "logo",
  title: "CISSP",
  para: "The fastest way to grow profitably",
},]

const promisesupelement = promisesup.map((element,index)=>{
  return <div className="promises-internal" key={index}>
           <img className="" src="" alt="logo"></img>
           <h1 className="promises-t">{element.title}</h1>
           <p className="promises-p">{element.para}</p>
           </div>
}) 
const promisesdownelement = promisesdown.map((element,index)=>{
  return <div className="promises-internal" key={index}>
           <img className="" src="" alt="logo"></img>
           <h1 className="promises-t">{element.title}</h1>
           <p className="promises-p"> {element.para}</p>
           </div>
}) 

const PromisesCard = (props) => {

  return (
    <div className={props.className}>
      <div className='promises-up'>
        {promisesupelement}
      </div>
      <div className='promises-down'>
        {promisesdownelement}
      </div>
    </div>
  )
}

export default PromisesCard


