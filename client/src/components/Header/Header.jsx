import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"



const Header = () => {
  return (
    <nav className='navBar'>
         <h1 className='logo'>SHARK!!</h1>
        {/* <img src={sharklogo} alt='logo' className='header-logo'></img> */}
         
      
        <div className='navlinks'>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/">About</NavLink>
         <NavLink to="/">News</NavLink>
         <NavLink to="/">Contact</NavLink>
        </div>
     
     
        <button className='header-btn'>Get Started </button>
     
    </nav>
  )
}

export default Header