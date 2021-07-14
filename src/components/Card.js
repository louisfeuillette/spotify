import React from 'react'
import { Router } from 'react-router'

import '../styles/Card.css'

const Card = (props) => {

    const handleId = () => {
        console.log(props.id,'props ID')
        // link ==> page albums
    }

    return (
        <div className="card-container">
            <div className="card-artist">
                <img src={props.img[0]?.url || "../assets/unknown_album.png"} className="card-img" onClick={()=> handleId()}/>            
                <p className="card-name">{props.name}</p>
            </div>
        </div>
    )
}

export default Card;