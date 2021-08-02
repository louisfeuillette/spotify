import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Card from "../components/Card";

import "../styles/Home.css";

import default_album from "../assets/default_album.png";
import { Redirect } from "react-router-dom";

/*
IMPORTANT :
When you launch the npm start, you need to go to 
the route http://localhost:3000/login first before landing here. 
*/

const Home = () => {
    const [token, setToken] = useState("");

    const [artists, setArtists] = useState([]);

    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    const [isLogged, setIsLogged] = useState(false);

    // Get artists from Search component 
    const handleParents = (arg) => {
        setArtists(arg);
    };

    // Helper function to get tokens from URL 
    // function found here https://youtu.be/G_WFk4wg9fk?t=803
    const getReturnsParams = (hash) => {
        const string = hash.substring(1);
        const paramsInUrl = string.split("&");
        const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
        }, {});
        return paramsSplitUp;
    };

    useEffect(() => {
        if (window.location.hash) {
            const { access_token, expires_in, token_type } = getReturnsParams(
                window.location.hash
            );

            // Sending token in local storage
            localStorage.clear();
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("expires_in", expires_in);
            localStorage.setItem("token_type", token_type);

            access_token ? setIsLogged(true) : setIsLogged(false);
        }

        // Get token from storage to use it in fetch
        let tokenFromStorage = window.localStorage.getItem("access_token");

        const url = `https://api.spotify.com/v1/me/player/recently-played`;
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${tokenFromStorage}`,
        };

        // Fetch to get recently played track from user
        axios(url, {
            method: "GET",
            data: "grant_type=client_credentials",
            headers,
        })
            .then((res) => {
                res.data.items
                ? setRecentlyPlayed(res.data.items.slice(0, 6))
                : setRecentlyPlayed(null);
            })
            .catch((err) => console.error("err", err));
    }, []);

    return (
        <div className="all-container">
        <NavBar />
        <div className="home-container">
            <Search data={handleParents} token={localStorage.access_token} />
            <div className="card-container">
            {artists.length === 0 ? (
                <div className="home-without-songs">
                <p className="home-text">
                    Saisi un artiste dans <br />
                    la barre de recherche
                </p>
                <p className="home-text-recently-play">Écoute récente :</p>
                <div className="home-recently-play-container">
                    {recentlyPlayed.map((e, i) => {
                    return (
                        <div key={i} className="home-recently-play-card">
                        <img
                            className="home-recently-play-picture"
                            src={e.track.album.images[0]?.url || default_album}
                        />
                        <p className="home-recently-play-title">
                            {e.track.artists[0].name}
                        </p>
                        </div>
                    );
                    })}
                </div>
                </div>
            ) : (
                artists.map((e, i) => {
                return (
                    <Card
                    token={token}
                    id={e.id}
                    name={e.name}
                    img={e.images}
                    key={i}
                    />
                );
                })
            )}
            ;
            </div>
        </div>
        </div>
    );
};

export default Home;
