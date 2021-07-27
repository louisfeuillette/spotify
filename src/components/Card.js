import React from "react";
import { withRouter } from "react-router";
import "../styles/Card.css";

import default_album from "../assets/default_album.png";

const Card = (props) => {
    const handleId = () => {
        props.history.push(`/${props.id}/albums`);
    };

    return (
        <div className="card-container">
        <div className="card-artist">
            <img
            src={props.img[0]?.url || default_album}
            className="card-img"
            onClick={() => handleId()}
            alt="artists"
            />
            <p className="card-name">{props.name}</p>
        </div>
        </div>
    );
};

export default withRouter(Card);
