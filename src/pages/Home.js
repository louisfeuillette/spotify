import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../components/NavBar';
import Search from '../components/Search';
import Card from '../components/Card';
import Bottom from '../components/Bottom';

import '../styles/Home.css';


const Home = () => {

    const [token, setToken] = useState('')

    const [artists, setArtists] = useState([])

    const handleParents = (arg) => {
        setArtists(arg)
    }

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
                    <Search data={handleParents} token={token}/>
                    <div className="card-container"> 
                    {
                        artists.length === 0 ? 
                        <p className="home-text">Saisi un artiste dans <br/>la barre de recherche</p>
                        :
                        artists.map((e, i)=>{
                            return(
                                    <Card id={e.id} name={e.name} img={e.images} key={i}/>
                            )
                        })
                    }   
                    </div>
                </div>
            <Bottom />
        </div>
    )
}

export default Home;