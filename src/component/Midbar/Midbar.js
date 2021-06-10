import React from "react";
import './Midbar.css';
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import ListSong from "./ListSong/ListSong";

export default function Midbar({spotify}){
    return(
        <div className="Midbar">
            <Header spotify={spotify} />
            <Banner />
            <ListSong/>
        </div>
    )
}
