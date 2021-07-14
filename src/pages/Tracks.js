import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Howl, Howler} from 'howler';

import '../styles/Card.css'

const Tracks = (props) => {

    const [items, setItems] = useState([])
    let sound = null;

    useEffect(() => {

        const url = `https://api.spotify.com/v1/albums${props.history.location.pathname}`
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer BQAZ9IGyb7T-u7r7NhS9_zjkQvdR-KPZoIBS9YVlMHZK5RQMIUQ1c_j-xjPgFi6PAMk9_fJdQHybHn1gwkM',
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
        <div className="tracks-container">
            
            {items.map((e, i)=> {
                return (
                    <div key={i}>
                        <p></p>
                        <p onClick={()=> playTrack(e)} >{e.name}</p>
                    </div>
                )
            })}
            <button onClick={() => {
                if (sound !== null) {
                    sound.stop()
                    sound.unload()
                    sound = null
                }
            }}>Stop the music</button>
        </div>

    )
}

export default Tracks;