import React from 'react';

import NavBar from '../components/NavBar'
import Search from '../components/Search'

import '../styles/Home.css'


const Home = () => {

    return (
        <div className="home-container">
            <NavBar />
            <Search />
            <p className="home-text">Saisi un artiste dans la barre de recherche</p>
        </div>
    )
}

export default Home;