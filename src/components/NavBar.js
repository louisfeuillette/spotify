import React from "react";
import logo from "../assets/logo.svg";

import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
        <Link to="/">
            <img src={logo} alt="logo spotify" className="nav-logo" />
        </Link>
        <p className="nav-title">for Black Smith</p>
        </div>
    );
};

export default NavBar;
