import React, {useState} from 'react';
import axios from 'axios';

import '../styles/Search.css'

const Search = () => {

    const [search, setSearch] = useState('')

    const token = "BQA_2PHHkNZtrEGkLqhA80UmEvse_xOQ20ky5K4SJ5V4lwVMrlo25Ck6UPe8sMfhaW1W6AJ0FwX_wRoDsJA6Py-e8o2JjzO6dt8iJP-Vw-b_nF9QD7GIYfNfRd5Y9ggSYRSeMx0loxmAiC5qBsWOcHCjpBEvcgKDAzpPBog"


    const handleSearch = async () => {
        
        const url = 'https://api.spotify.com/v1/search'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        axios(url+`?q=${search}&type=artist`, {
            method: "GET",
            headers,
        })
        .then((res) => {
            console.log(res, 'response')
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