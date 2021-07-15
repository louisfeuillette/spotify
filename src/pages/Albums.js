import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

import "../styles/Albums.css"
import default_album from "../assets/default_album.png"

const AlbumsPage = (props) => {
    
    const [items, setItems] = useState([])
    
    // let tokenStorage = window.localStorage.getItem("tokenStorage")
    // console.log(JSON.parse(tokenStorage), 'data album')

    // const [token, setToken] = useState(
    //     window.localStorage.getItem(tokenStorage) || ''
    // );

    // console.log(token, 'from storage ?')

    const handleIdAlbums = (arg) => {
        props.history.push(`/${arg.id}/tracks`)
    }

    useEffect(() => {

        const url = `https://api.spotify.com/v1/artists${props.history.location.pathname}`
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${tokenFromStorage}`
        }

        axios(url, {
            method: "GET",
            data: "grant_type=client_credentials",
            headers,
        })
        .then((res) => {
            if (res.status === 200) setItems(res.data.items)
        }).catch(err => console.error("err", err))
    }, [])
    
    let tokenFromStorage = window.localStorage.getItem("tokenStorage")
    console.log(tokenFromStorage, 'no parse data on album page')
    // console.log(JSON.parse(tokenFromStorage), 'data on album page')

    return (
            <div className="card-container">
                {items.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className="card-artist">
                                <img src={e.images[0]?.url || default_album} className="card-img" onClick={()=> handleIdAlbums(e)} alt="albums"/>            
                                <p className="card-name">{e.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}

export default withRouter(AlbumsPage);