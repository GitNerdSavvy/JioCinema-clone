import React, { useState, useEffect } from 'react'
import './Nav.css';
function Nav() {
  const [show, handleshow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true)
      } else handleshow(false);
    });
    return () => {
    //   window.removeEventListener("scroll")
    }
  }, []);
  return (
    <div className={`nav ${show && "nav_invisible"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Jiocinema.png"
        alt="Jiocinema Logo"
      />
     
        <h3 className="jioCinema">JioCinema</h3>
      
      
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Vista_Login_Manager.svg"
        alt="Jiocinema Logo"
      />  
    </div>
  )
}

export default Nav