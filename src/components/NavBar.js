import React from 'react'
import navLogo from '../images/airbnb 1.png';

function NavBar() {
  return (
    <nav>
      <img className="nav-logo" src={navLogo} alt="" />
    </nav>
  )
}

export default NavBar