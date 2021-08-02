import React from "react";
import logo from "../assets/logo.svg";

import "../styles/Login.css";

const Login = () => {
    
    // link to get access token on URL
    const handleLogin = () => {
        window.location =
        "https://accounts.spotify.com/authorize?client_id=384c7ea6626f4727b0198f3f999fe314&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-recently-played&show_dialog=true";
    };

    return (
        <div className="login-div">
        <div className="nav-container">
            <img src={logo} alt="logo spotify" className="nav-logo" />
            <p className="nav-title">for Black Smith</p>
        </div>
        <div>
            <button className="login-bouton" onClick={() => handleLogin()}>
            SE CONNECTER
            </button>
        </div>
        </div>
    );
};

export default Login;
