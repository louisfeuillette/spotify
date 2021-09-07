import React from "react";
import logo from "../assets/logo.svg";

import "../styles/Login.css";

const Login = () => {

    let clientID = process.env.REACT_APP_CLIENT_ID
    
    // link to get access token on URL
    const handleLogin = () => {
        // If you're testing with localhost:3000
        // // window.location =
        // // `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-recently-played&show_dialog=true`;
        
        // Heroku redirection 
        window.location =
        `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=https%3A%2F%2Flouispotify.herokuapp.com%2F&scope=user-read-recently-played&show_dialog=true`;
    };

    return (
        <div className="login-div">
        <div className="nav-container">
            <img src={logo} alt="logo spotify" className="nav-logo" />
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
