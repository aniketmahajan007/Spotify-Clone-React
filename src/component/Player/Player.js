import React from 'react';
import "./Player.css"
import Leftbar from "../Leftbar/Leftbar";
import Midbar from "../Midbar/Midbar";
import Footer from "../Footer/Footer";

function Player ({spotify}) {
    return (
        <div className="Player">
            <Leftbar spotify={spotify} />
            <Midbar spotify={spotify} />
            <Footer />
        </div>
    );
}

export default Player;
