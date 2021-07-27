import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import Card from '../components/Card';

import '../styles/Home.css';


const Home = () => {

    const [token, setToken] = useState('')

    const [artists, setArtists] = useState([])

    const [isLogged, setIsLogged] = useState(false)

    const handleParents = (arg) => {
        setArtists(arg)
    }

    const getReturnsParams = (hash) => {
        const string = hash.substring(1);
        const paramsInUrl = string.split("&");
        const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) =>{
            const [key, value] = currentValue.split("=");
            accumulater[key] = value;
            return accumulater;
        }, {})
        return paramsSplitUp 
    }

    useEffect(()=> {
        if(window.location.hash) {
            const {
                access_token, 
                expires_in, 
                token_type
            } = getReturnsParams(window.location.hash)

            localStorage.clear()
            localStorage.setItem("access_token", access_token)
            localStorage.setItem("expires_in", expires_in)
            localStorage.setItem("token_type", token_type)

            localStorage.access_token ? setIsLogged(true) : setIsLogged(false)
        }
    })

    useEffect(() => {
        const url = "https://accounts.spotify.com/api/token"
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `${process.env.REACT_APP_TOKEN_CODE}`,
        }

        axios(url, {
            method: "POST",
            data: "grant_type=client_credentials",
            headers,
        })
        .then((res) => {
            if(res.status === 200) {
                setToken(res.data.access_token)
            }
        })
    }, [])

    window.localStorage.setItem("tokenStorage", token)
    
    return (
        <div className='all-container'>
            <NavBar />
                <div className="home-container">
                    <Search data={handleParents} token={token} />
                    <div className="card-container"> 
                    {
                        artists.length === 0 ? 
                        <p className="home-text">Saisi un artiste dans <br/>la barre de recherche</p>
                        :
                        artists.map((e, i)=>{
                            return(
                                    <Card token={token} id={e.id} name={e.name} img={e.images} key={i}/>
                            )
                        })
                    }   
                    </div>
                </div>
        </div>
    )
}

export default Home;