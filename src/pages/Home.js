import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../components/NavBar';
import Search from '../components/Search';
import Bottom from '../components/Bottom'

import '../styles/Home.css';


const Home = () => {

    const [token, setToken] = useState('')

    // const handleClickGet = () => {
    //     console.log(token)
    // }

    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            method: "POST",
            data: "grant_type=client_credentials",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic Mzg0YzdlYTY2MjZmNDcyN2IwMTk4ZjNmOTk5ZmUzMTQ6NzhiY2IzYjhjNDIyNDNmMDhkZDk5YjQ1NWMwNmIxNDg=',
            },
        })
        .then((res) => {
            if(res.status === 200) {
                setToken(res.data.access_token)
            }
        })
    }, [])

    return (
        <div className='all-container'>
            <NavBar />
                <div className="home-container">
                    <Search />
                    {/* <button onClick={()=> handleClickGet()}>POST</button> */}
                    <p className="home-text">Saisi un artiste dans <br/>la barre de recherche</p>
                </div>
            <Bottom />
        </div>
    )
}

export default Home;