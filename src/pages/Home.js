import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Card from "../components/Card";

import "../styles/Home.css";

import default_album from "../assets/default_album.png";

const Home = () => {

    const [artists, setArtists] = useState([]);

    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    let token;

    // Get token from storage to use it in fetch
    let tokenFromStorage = window.localStorage.getItem("access_token");

    // Get artists from Search component 
    const handleParents = (arg) => {
        setArtists(arg);
    };

    useEffect(() => {
        

        const url = `https://api.spotify.com/v1/me/player/recently-played`;
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${tokenFromStorage}`,
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
            <Search data={handleParents} token={tokenFromStorage} />
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