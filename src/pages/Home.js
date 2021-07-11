import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../components/NavBar';
import Search from '../components/Search';

import '../styles/Home.css';


const Home = () => {

    // // DATA FOUND WITH CURL
    // curl -H "Authorization: Bearer BQCb8TxJ7DCawwlt0TJyQFtXTexG0HXXHcir1XuYQNR51MlqXMpBbhl9GYSe5IHTh13PnZm4M__Y54EHEx18OI90kNDLhQOYobuOkpNByV9djOUZMSnDJKPZp4Nfbk4lEkR4-m2KsAG3F7_J8AzZHPlFZ6Swy6PgN5pjEgw" https://api.spotify.com/v1/me

    // axios({
    //     method: 'post',
    //     url: 'https://accounts.spotify.com/api/token',
    //     data: {
    //         grant_type: "authorization_code",
    //         code: 'AQA8AAK3xmvTb69NAgQrqctxd5ju9ONHJRCkpoUvVMXPXkLo_flkAq6JkKTsEtSlW49_41fYUWo8bEHg9O7LZixdjkFTwbhzwTr54VJfY35E7R96pm5i2i8by94lhsoY8gFil1KoDnvH8pctV4LrytxDq5jt2a8PKErHa1HZuhC4k52wJ8CNiPpyePrdwZ82qophWXRq8IcUHcrz9MjdCChbgFie-EzaImJhm0WJRWThAqFDIQ'
    //     }
    // });


    return (
        <div className="home-container">
            <NavBar />
            <Search />
            <p className="home-text">Saisi un artiste dans la barre de recherche</p>
        </div>
    )
}

export default Home;