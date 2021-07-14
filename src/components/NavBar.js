import React from 'react';
import logo from "../assets/logo.svg"

import '../styles/NavBar.css'

const NavBar = () => {

    return (
        <div className="nav-container">
            <img src={logo} alt='logo spotify' />
            <p className='nav-title'>Black Smith's Spotify</p>
        </div>
    )
}

export default NavBar;