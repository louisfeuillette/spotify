import React, { useState } from 'react';
import {Howl, Howler} from 'howler';

import '../styles/Bottom.css'

const Bottom = () => {

    // https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3

    const sound = new Howl({
        // src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        html5: true,
        autoplay: false,
    });  

    const handlePlay = () => {
        sound.play();
        
    }

    const handlePause = () => {
        sound.pause()
    }

    return (
        <div className="bottom-container">
            <p>Bottom</p>
            <div>
                <button onClick={()=> handlePlay()}>PLAY</button>
                <button onClick={()=> handlePause()}>PAUSE</button>
            </div>
        </div>
    )
}

export default Bottom;