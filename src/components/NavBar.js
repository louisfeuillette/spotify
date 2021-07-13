import React from 'react';
import Link from 'react-router-dom';

import '../styles/NavBar.css'

const NavBar = () => {

    return (
        <div className="nav-container">
            <img src='../assets/logo.svg' alt='logo spotify' />
            <p className='nav-title'>Black Smith's Spotify</p>
        </div>
    )
}

export default NavBar;