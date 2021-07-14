import React, {useState} from 'react';
import axios from 'axios';

import '../styles/Search.css'

const Search = (props) => {

    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        
        const url = 'https://api.spotify.com/v1/search'
        const headers = {
            Authorization: `Bearer ${props.token}`
        }

        axios(url+`?q=${search}&type=artist`, {
            method: "GET",
            headers,
        })
        .then( async (res) => {
            console.log(res.data.artists.items, 'res data ARTIST')
            await props.data(res.data.artists.items)
        })
    }

    return (
        <div className='search-container'>
            <input 
                type='texte' 
                placeholder='Recherche' 
                className='search-input'
                onChange={(e)=> setSearch(e.target.value)}
                value={search}
            />
            <button className="search-button" onClick={() => handleSearch()}>
                rechercher
            </button>
        </div>
    )
}

export default Search;