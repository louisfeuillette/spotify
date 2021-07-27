import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Howl, Howler} from 'howler';
import NavBar from '../components/NavBar';
import { PauseCircleOutline } from 'react-ionicons'

import "../styles/Tracks.css"

const Tracks = (props) => {

    const [items, setItems] = useState([])
    let sound = null;

    useEffect(() => {

        const url = `https://api.spotify.com/v1/albums${props.history.location.pathname}`
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${tokenFromStorage}` ,
        }

        axios(url, {
            method: "GET",
            data: "grant_type=client_credentials",
            headers,
        })
        .then((res) => {
            if (res.status === 200) {
                setItems(res.data.items)
            }
        }).catch(err => console.error("err", err))
    }, [])

    let tokenFromStorage = window.localStorage.getItem("tokenStorage")

    const playTrack = (arg) => {
        if (sound != null) {
            sound.stop();
            sound.unload();
            sound = null;
        }
        sound = new Howl({
            src: arg.preview_url,
            html5: true,
            autoplay: true
        });
        sound.play();
    }

    
    return (
        <>
            <NavBar />
            <div className="tracks-container">
                
                {items.map((e, i)=> {
                    return (
                        <div key={i} className="tracks-line">
                            <p className="tracks-number">{e.track_number}</p>
                            <p style={{color: "#ffff"}}>-</p>
                            <p className="tracks-name" onClick={()=> playTrack(e)} >{e.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="tracks-bottom">
                <PauseCircleOutline
                    onClick={() => {
                        if (sound !== null) {
                            sound.stop()
                            sound.unload()
                            sound = null
                        }
                    }}
                    color={'#ffff'} 
                    height="50px"
                    width="50px"
                />
            </div>
        </>
    )
}

export default Tracks;