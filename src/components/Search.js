import React, { useState } from "react";
import axios from "axios";
import { SearchOutline } from "react-ionicons";
import "../styles/Search.css";

const Search = (props) => {
    const [search, setSearch] = useState("");

    const handleSearch = async () => {
        const url = "https://api.spotify.com/v1/search";
        const headers = {
        Authorization: `Bearer ${props.token}`,
        };

        axios(url + `?q=${search}&type=artist`, {
        method: "GET",
        headers,
        }).then(async (res) => {
        if (res.status === 200) {
            await props.data(res.data.artists.items.slice(0, 6));
        }
        });
    };

    return (
        <div className="search-container">
        <input
            type="texte"
            placeholder="Recherche"
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
        />
        <button className="search-button" onClick={() => handleSearch()}>
            <SearchOutline color={"#ffff"} height="30px" width="30px" />
        </button>
        </div>
    );
};

export default Search;
