import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
   <>
   
   <nav> 
    <label className="logo">Pratyush<span>'K</span></label>
    <ul>
      <li><a className='active' href="">Home</a></li>
      <li><a href="#work-section">Work</a></li>
      <li><a href="#services-section">Service</a></li>
      <li><a href="#contact-section">Contact</a></li>
    </ul>
    <label className='icon' onClick={() => $('ul').toggleClass('show') }>
    <i class="fa-solid fa-bars"></i>
    </label>
   </nav>
   
   </>
  )
}            

export default Navbar
