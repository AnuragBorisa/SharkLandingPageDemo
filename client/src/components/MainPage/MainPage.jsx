import React from 'react'
import "./MainPage.css"
import Form from '../Form/Form'
const MainPage = () => {
  return (
   <section className='main-pge-container'>
    <div className='main-pge-right'>
    <div className='heading'>
      <div className='wel-tag'><h1 className='test'>Welcome to <span className='main-page-title-color'>Shark Cybertech</span></h1></div>
      <div className='main-heading' ><h1  >Empowering Tomorrow's <span className='main-page-title-color' > <br></br>Cyber Guardians </span></h1></div>
     <div className='main-para'> <p>At Shark Cybertech, we're dedicated to empowering tomorrow's cyber guardians. Our cutting-edge courses and hands-on training prepare individuals to navigate the evolving cybersecurity landscape, ensuring they become formidable defenders of the digital realm.</p></div>
     
    </div>
    <div className='main-page-btns'>
      <button className='start-learn-btn'>Start Learing For Free</button>
    </div>

    </div>
    <div className='main-pge-left'>
    <Form className="form-pge" />
    </div>
   </section>
  )
}

export default MainPage